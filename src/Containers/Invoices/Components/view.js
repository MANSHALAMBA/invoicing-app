import React from "react";
import Modal from "@material-ui/core/Modal";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import InvoiceForm from "../../../Components/Forms/InvoiceForm/InvoiceForm";
import { calcInvoiceStatus } from "../../../Util/utils";

const View = props => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<Icon color="secondary">add_circle</Icon>}
        onClick={props.formModalOpenHandler}
      >
        Create New Invoice
      </Button>
      <div style={{ maxWidth: "100%", marginTop: "15px" }}>
        <MaterialTable
          columns={[
            {
              title: "Status",
              render: rowData => {
                return calcInvoiceStatus(rowData.poDate, rowData.dueDate);
              }
            },
            {
              title: "Client Name",
              field: "client",
              render: rowData => rowData.client.name
            },
            { title: "Invoice Numer", field: "invoiceNumber" },
            { title: "Invoice Date", field: "invoiceDate" },
            {
              title: "PO Date",
              field: "poDate"
            },
            {
              title: "Payment Terms",
              field: "paymentTerms"
            },
            {
              title: "Due Date",
              field: "dueDate"
            },
            {
              title: "Notes",
              field: "notes"
            },
            {
              title: "Terms & Conditions",
              field: "termsConditions"
            }
          ]}
          actions={[
            {
              icon: "delete",
              tooltip: "Delete Invoice",
              onClick: props.deleteItem
            },
            {
              icon: "edit",
              tooltip: "Edit Invoice",
              onClick: props.editInvoiceActionHandler
            },
            {
              icon: "visibility",
              tooltip: "View Invoice",
              onClick: props.viewInvoiceActionHandler
            }
          ]}
          data={props.data}
          title="Invoices"
        />
      </div>
      <Modal
        open={props.formModalOpen}
        onClose={props.formModalCloseHandler}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            overflow: "scroll",
            width: 400,
            height: "100%",
            backgroundColor: "white",
            border: "2px solid black",
            padding: "10px"
          }}
        >
          <InvoiceForm
            handleChange={props.inputChangeHandler}
            handleItemChange={props.itemInputChangeHandler}
            addItem={props.addItemHandler}
            values={props.currInput}
            disableDueDate={props.disableDueDate}
            mountDueDate={props.mountDueDate}
            savedClients={props.savedClients}
            savedItems={props.savedItems}
            clickHandler={props.func}
          />{" "}
        </div>
      </Modal>
    </div>
  );
};

export default View;
