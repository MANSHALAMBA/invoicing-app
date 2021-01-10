import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

const ClientForm = props => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";

    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://geodata.solutions/includes/countrystatecity.js";

    document.body.appendChild(script2);
  });

  return (
    <div>
      <TextField
        label="Client Name"
        variant="outlined"
        name="name"
        value={props.value.name}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Phone"
        variant="outlined"
        name="phone"
        value={props.value.phone}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={props.value.email}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="GSTIN"
        variant="outlined"
        name="gstin"
        value={props.value.gstin}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="PAN"
        variant="outlined"
        name="pan"
        value={props.value.pan}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <TextField
        label="Address"
        variant="outlined"
        name="address"
        value={props.value.address}
        onChange={props.inputChangeHandler}
        style={{ marginTop: "5px", marginBottom: "5px" }}
      />
      <div>
        <select
          name="country"
          className="countries order-alpha group-continents group-order-alpha"
          id="countryId"
          value={props.value.country}
          onChange={props.inputChangeHandler}
          style={{ marginTop: "5px", marginBottom: "5px" }}
        >
          <option value={""}>Select Country</option>
        </select>
      </div>
      <div>
        <select
          name="state"
          className="states order-alpha"
          id="stateId"
          value={props.value.state}
          onChange={props.inputChangeHandler}
          style={{ marginTop: "5px", marginBottom: "5px" }}
        >
          <option value="">Select State</option>
        </select>
      </div>
      <div>
        <select
          name="city"
          className="cities order-alpha"
          id="cityId"
          value={props.value.city}
          onChange={props.inputChangeHandler}
          style={{
            marginTop: "5px",
            marginBottom: "5px"
          }}
        >
          <option value="">Select City</option>
        </select>
      </div>
      <TextField
        label="Pin Code"
        variant="outlined"
        name="pinCode"
        value={props.value.pinCode}
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

export default ClientForm;
