import React from "react";
import Typography from "@material-ui/core/Typography";

const CompanyInfo = props => {
  return (
    <div>
      <Typography variant="h6" display="inline">
        {" "}
        Company Name:{" "}
      </Typography>
      <Typography variant="body1" display="inline">
        {props.data.companyName}
      </Typography>
      <br />
      <Typography variant="h6" display="inline">
        {" "}
        Address:{" "}
      </Typography>
      <Typography variant="body1" display="inline">
        {props.data.address}
      </Typography>
      <br />
      <Typography variant="h6" display="inline">
        {" "}
        Country:{" "}
      </Typography>
      <Typography variant="body1" display="inline">
        {props.data.country}
      </Typography>
      <br />
      <Typography variant="h6" display="inline">
        {" "}
        State:{" "}
      </Typography>
      <Typography variant="body1" display="inline">
        {props.data.state}
      </Typography>

      <br />
      <Typography variant="h6" display="inline">
        {" "}
        City:{" "}
      </Typography>
      <Typography variant="body1" display="inline">
        {props.data.city}
      </Typography>

      <br />
      <Typography variant="h6" display="inline">
        {" "}
        Pincode:{" "}
      </Typography>
      <Typography variant="body1" display="inline">
        {props.data.pinCode}
      </Typography>
      <br />
      <Typography variant="h6" display="inline">
        {" "}
        Phone Number:{" "}
      </Typography>
      <Typography variant="body1" display="inline">
        {props.data.phoneNmber}
      </Typography>
      <br />
      <Typography variant="h6" display="inline">
        {" "}
        Contact Person:{" "}
      </Typography>
      <Typography variant="body1" display="inline">
        {props.data.contactPrsn}
      </Typography>
      <br />
      <Typography variant="h6" display="inline">
        {" "}
        Email:{" "}
      </Typography>
      <Typography variant="body1" display="inline">
        {props.data.email}
      </Typography>
    </div>
  );
};

export default CompanyInfo;
