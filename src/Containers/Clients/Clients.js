import React, { Component } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Modal from "@material-ui/core/Modal";
import ClientForm from "../../Components/Forms/ClientForm/ClientForm";

class Clients extends Component {
  state = {
    currInput: {
      name: "",
      phone: "",
      email: "",
      gstin: "",
      pan: "",
      address: "",
      country: "",
      state: "",
      city: "",
      pinCode: ""
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
      console.log("save client");
      this.props.addClient({ ...this.state.currInput });
    } else if (operation == "edit") {
      this.props.editClient({ ...this.state.currInput }, this.idx);
    }
  };

  deleteClient = (e, rowData) => {
    console.log(rowData.tableData.id);
    this.props.deleteClient(rowData.tableData.id);
  };

  editClientActionHandler = (e, rowData) => {
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
          Create New Client
        </Button>
        <div style={{ maxWidth: "100%", marginTop: "15px" }}>
          <MaterialTable
            columns={[
              { title: "Client Name", field: "name" },
              { title: "Phone", field: "phone" },
              { title: "Email", field: "email" },
              {
                title: "GSTIN",
                field: "gstin"
              },
              {
                title: "Pan",
                field: "pan"
              },
              {
                title: "Address",
                field: "address"
              },
              {
                title: "Country",
                field: "country"
              },
              {
                title: "State",
                field: "state"
              },
              {
                title: "City",
                field: "city"
              },
              {
                title: "Pin Code",
                field: "pinCode"
              }
            ]}
            actions={[
              {
                icon: "delete",
                tooltip: "Delete Client",
                onClick: this.deleteClient
              },
              {
                icon: "edit",
                tooltip: "Edit Client",
                onClick: this.editClientActionHandler
              }
            ]}
            data={this.props.data}
            title="Clients"
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
            <ClientForm
              value={this.state.currInput}
              inputChangeHandler={this.inputChangeHandler}
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
    data: state.clients
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    addClient: client => {
      dispatch({ type: "ADD CLIENT", data: client });
    },

    editClient: (client, idx) => {
      dispatch({
        type: "EDIT CLIENT",
        payload: { index: idx, updatedClient: client }
      });
    },

    deleteClient: idx => {
      dispatch({ type: "DELETE CLIENT", payload: { index: idx } });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Clients);
