import React, { Component } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Modal from "@material-ui/core/Modal";
import ItemForm from "../../Components/Forms/ItemForm/ItemForm";

class Items extends Component {
  state = {
    currInput: {
      name: "",
      description: "",
      unit: "",
      quantity: "",
      unitPrice: "",
      discount: "",
      tax: ""
    },

    formModalOpen: false,
    editMode: false
  };

  formModalOpenHandler = () => {
    this.setState({ formModalOpen: true });
  };

  formModalCloseHandler = () => {
    this.setState({
      formModalOpen: false,
      currInput: {
        name: "",
        description: "",
        unit: "",
        quantity: "",
        unitPrice: "",
        discount: "",
        tax: ""
      },
      editMode: false
    });
  };

  inputChangeHandler = event => {
    this.setState(prevState => {
      return {
        currInput: {
          ...prevState.currInput,
          [event.target.name]: event.target.value
        }
      };
    });
  };
  submitHandler = operation => {
    if (operation == "save") {
      this.props.addItem({ ...this.state.currInput });
    } else if (operation == "edit") {
      this.props.editItem({ ...this.state.currInput }, this.idx);
    }
  };
  deleteItem = (e, rowData) => {
    console.log(rowData.tableData.id);

    this.props.deleteItem(rowData.tableData.id);
  };

  editItemActionHandler = (e, rowData) => {
    this.idx = rowData.tableData.id;
    this.setState(prevState => {
      return {
        formModalOpen: true,
        currInput: {
          ...this.props.data[rowData.tableData.id]
        },
        editMode: true
      };
    });
  };

  render() {
    let func;
    func = this.state.editMode
      ? () => this.submitHandler("edit")
      : () => this.submitHandler("save");

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Icon color="secondary">add_circle</Icon>}
          onClick={this.formModalOpenHandler}
        >
          Create New Item
        </Button>
        <div style={{ maxWidth: "100%", marginTop: "15px" }}>
          <MaterialTable
            columns={[
              { title: "Name", field: "name" },
              { title: "Description", field: "description" },
              { title: "Unit", field: "unit" },
              {
                title: "Quantity",
                field: "quantity",
                type: "numeric"
              },
              {
                title: "Unit Price",
                field: "unitPrice",
                type: "numeric"
              },
              {
                title: "Discount",
                field: "discount"
              },
              {
                title: "Tax",
                field: "tax"
              }
            ]}
            actions={[
              {
                icon: "delete",
                tooltip: "Delete Item",
                onClick: this.deleteItem
              },
              {
                icon: "edit",
                tooltip: "Edit Item",
                onClick: this.editItemActionHandler
              }
            ]}
            data={this.props.data}
            title="Items"
          />
        </div>
        <Modal
          open={this.state.formModalOpen}
          onClose={this.formModalCloseHandler}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              backgroundColor: "white",
              border: "2px solid black",
              padding: "10px"
            }}
          >
            <ItemForm
              inputChangeHandler={this.inputChangeHandler}
              value={{ ...this.state.currInput }}
              submitHandler={func}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    data: state.items
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    addItem: item => {
      dispatch({ type: "ADD ITEM", data: item });
    },
    editItem: (item, idx) => {
      dispatch({
        type: "EDIT ITEM",
        payload: { index: idx, updatedItem: item }
      });
    },
    deleteItem: idx => {
      dispatch({ type: "DELETE ITEM", payload: { index: idx } });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Items);
