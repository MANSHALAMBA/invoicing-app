import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const NewItemForm = props => {
  return (
    <div>
      <TextField
        label="Item name"
        variant="outlined"
        name="name"
        value={props.value.name}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Item description"
        variant="outlined"
        name="description"
        value={props.value.description}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Unit"
        variant="outlined"
        name="unit"
        value={props.value.unit}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Unit Price"
        variant="outlined"
        name="unitPrice"
        type="number"
        value={props.value.unitPrice}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Quantity"
        variant="outlined"
        name="quantity"
        type="number"
        value={props.value.quantity}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Discount"
        variant="outlined"
        name="discount"
        value={props.value.discount}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Tax"
        variant="outlined"
        name="tax"
        value={props.value.tax}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <br />
      <Button onClick={props.submitHandler} variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
};

export default NewItemForm;
