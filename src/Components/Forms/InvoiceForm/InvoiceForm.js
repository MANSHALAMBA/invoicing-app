import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const InvoiceForm = props => {
  return (
    <div>
      <FormControl
        variant="outlined"
        style={{ marginTop: "5px", marginBottom: "5px" }}
      >
        <InputLabel>Client Name</InputLabel>
        <Select
          value={props.values.client}
          onChange={props.handleChange}
          label="Client Name"
          name="client"
        >
          {props.savedClients.map(client => {
            return <MenuItem value={client}>{client.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <TextField
        label="Invoice Number"
        variant="outlined"
        type="number"
        name="invoiceNumber"
        value={props.values.invoiceNumber}
        onChange={props.handleChange}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Invoice Date"
        type="date"
        variant="outlined"
        name="invoiceDate"
        value={props.values.invoiceDate}
        onChange={props.handleChange}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="PO Date"
        type="date"
        variant="outlined"
        name="poDate"
        value={props.values.poDate}
        onChange={props.handleChange}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <FormControl
        variant="outlined"
        style={{ marginTop: "5px", marginBottom: "5px" }}
      >
        <InputLabel>Payment Terms</InputLabel>
        <Select
          label="Payment Terms"
          value={props.values.paymentTerms}
          onChange={props.handleChange}
          name="paymentTerms"
        >
          <MenuItem value={"On Receipt"}>On Receipt</MenuItem>;
          <MenuItem value={"NET 7"}>NET 7</MenuItem>;
          <MenuItem value={"NET 15"}>NET 15</MenuItem>;
          <MenuItem value={"NET 30"}>NET 30</MenuItem>;
          <MenuItem value={"NET 45"}>NET 45</MenuItem>;
          <MenuItem value={"NET 60"}>NET 60</MenuItem>;
          <MenuItem value={"NET 90"}>NET 90</MenuItem>;
          <MenuItem value={"Specific Date"}>Specific Date</MenuItem>;
          <MenuItem value={"Hide Payment Terms"}>Hide Payment Terms</MenuItem>;
        </Select>
      </FormControl>
      {props.mountDueDate && (
        <TextField
          label="Due Date"
          type="date"
          variant="outlined"
          name="dueDate"
          value={props.values.dueDate}
          disabled={props.disableDueDate}
          onChange={props.handleChange}
          style={{ marginTop: "5px", marginBottom: "5px" }}
        />
      )}

      <TextField
        label="Notes"
        variant="outlined"
        name="notes"
        value={props.values.notes}
        onChange={props.handleChange}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Terms & Conditions"
        variant="outlined"
        name="termsConditions"
        value={props.values.termsConditions}
        onChange={props.handleChange}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <Button variant="contained" color="primary" onClick={props.addItem}>
        Add Item
      </Button>
      {props.values.items.map((item, idx) => {
        return (
          <div>
            <FormControl
              variant="outlined"
              style={{ marginTop: "5px", marginBottom: "5px" }}
            >
              <InputLabel>Item Name</InputLabel>
              <Select
                label="Item Name"
                value={item.name}
                onChange={e => props.handleItemChange(e, idx)}
                name="name"
              >
                {props.savedItems.map(item => {
                  return <MenuItem value={item.name}>{item.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <TextField
              label="Quantity"
              variant="outlined"
              name="quantity"
              value={item.quantity}
              type="number"
              onChange={e => props.handleItemChange(e, idx)}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <TextField
              label="Price"
              variant="outlined"
              name="price"
              value={item.price}
              type="number"
              onChange={e => props.handleItemChange(e, idx)}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <TextField
              label="Discount"
              variant="outlined"
              name="discount"
              value={item.discount}
              type="number"
              onChange={e => props.handleItemChange(e, idx)}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <TextField
              label="Tax"
              variant="outlined"
              name="tax"
              value={item.tax}
              onChange={e => props.handleItemChange(e, idx)}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <TextField
              label="Description"
              variant="outlined"
              name="description"
              value={item.description}
              onChange={e => props.handleItemChange(e, idx)}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
          </div>
        );
      })}
      <Button onClick={props.clickHandler} variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
};

export default InvoiceForm;
