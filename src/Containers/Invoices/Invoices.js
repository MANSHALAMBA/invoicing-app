import React, { Component } from "react";
import { connect } from "react-redux";
import Invoice from "../../Components/Invoice/Invoice";
import { dueDateCalc } from "../../Util/utils";
import { largestInvoiceNum } from "../../Util/utils";
import { sanitizeFields } from "../../Util/utils";
import { defaultInvoiceCurrInput } from "../../Util/utils";
import View from "./Components/view";

export class Invoices extends Component {
  state = {
    currInput: {
      ...defaultInvoiceCurrInput
    },
    formModalOpen: false,
    editMode: false,
    viewSingleInvoice: false
  };

  inputChangeHandler = e => {
    // special case : change of payment terms or invoice date
    if (e.target.name == "paymentTerms" || e.target.name == "invoiceDate") {
      let dueDate =
        e.target.name == "paymentTerms"
          ? dueDateCalc(e.target.value, this.state.currInput.invoiceDate)
          : dueDateCalc(this.state.currInput.paymentTerms, e.target.value);
      this.setState(prevState => {
        return {
          currInput: {
            ...prevState.currInput,
            [e.target.name]: e.target.value,
            dueDate: dueDate
          }
        };
      });
    } else {
      this.setState(prevState => {
        return {
          currInput: {
            ...prevState.currInput,
            [e.target.name]: e.target.value
          }
        };
      });
    }
  };

  itemInputChangeHandler = (e, idx) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(prevState => {
      let items = [...prevState.currInput.items];
      items[idx] = {
        ...items[idx],
        [name]: value
      };
      return {
        currInput: {
          ...prevState.currInput,
          items: items
        }
      };
    });
  };

  addItemHandler = () => {
    this.setState(prevState => {
      return {
        currInput: {
          ...prevState.currInput,
          items: [
            ...prevState.currInput.items,
            {
              name: "",
              quantity: "",
              price: "",
              discount: "",
              tax: "",
              description: ""
            }
          ]
        }
      };
    });
  };

  submitHandler = operation => {
    if (operation == "save") {
      this.props.addInvoice({ ...this.state.currInput });
    } else if (operation == "edit") {
      this.props.editInvoice(this.idx, {
        ...this.state.currInput
      });
    }
  };

  deleteItem = (e, rowData) => {
    this.props.deleteInvoice(rowData.tableData.id);
  };

  editInvoiceActionHandler = (e, rowData) => {
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

  viewInvoiceActionHandler = (e, rowData) => {
    this.idx = rowData.tableData.id;
    this.setState({ viewSingleInvoice: true });
  };

  formModalCloseHandler = () => {
    this.setState({
      formModalOpen: false,
      currInput: {
        ...defaultInvoiceCurrInput
      },
      editMode: false
    });
  };
  formModalOpenHandler = () => {
    this.setState({ formModalOpen: true });
  };

  render() {
    let disableDueDate =
      this.state.currInput.paymentTerms == "Specific Date" ? false : true;

    let mountDueDate =
      this.state.currInput.paymentTerms == "Hide Payment Terms" ? false : true;

    if (this.state.currInput.invoiceNumber == "") {
      let invoiceNumber =
        this.props.data.length == 0
          ? 1
          : largestInvoiceNum(this.props.data) + 1;
      this.setState(prevState => {
        return {
          currInput: {
            ...prevState.currInput,
            invoiceNumber: invoiceNumber
          }
        };
      });
    }
    if (this.state.currInput.invoiceDate == "") {
      this.setState(prevState => {
        return {
          currInput: {
            ...prevState.currInput,
            invoiceDate: new Date().toISOString().slice(0, 10)
          }
        };
      });
    }

    let func;
    func = this.state.editMode
      ? () => this.submitHandler("edit")
      : () => this.submitHandler("save");

    return this.state.viewSingleInvoice ? (
      <Invoice data={sanitizeFields(this.props.data[this.idx])} />
    ) : (
      <View
        formModalOpenHandler={this.formModalOpenHandler}
        deleteItem={this.deleteItem}
        editInvoiceActionHandler={this.editInvoiceActionHandler}
        viewInvoiceActionHandler={this.viewInvoiceActionHandler}
        data={this.props.data}
        formModalOpen={this.state.formModalOpen}
        formModalCloseHandler={this.formModalCloseHandler}
        inputChangeHandler={this.inputChangeHandler}
        itemInputChangeHandler={this.itemInputChangeHandler}
        addItemHandler={this.addItemHandler}
        currInput={this.state.currInput}
        disableDueDate={disableDueDate}
        mountDueDate={mountDueDate}
        savedClients={this.props.savedClients}
        savedItems={this.props.savedItems}
        func={func}
      />
    );
  }
}

const mapStatetoProps = state => {
  return {
    savedClients: state.clients,
    savedItems: state.items,
    data: state.invoices
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    addInvoice: invoice => {
      dispatch({ type: "ADD INVOICE", data: invoice });
    },
    editInvoice: (idx, updatedInvoice) => {
      dispatch({
        type: "EDIT INVOICE",
        payload: { index: idx, updatedInvoice: updatedInvoice }
      });
    },
    deleteInvoice: idx => {
      dispatch({ type: "DELETE INVOICE", payload: { index: idx } });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Invoices);
