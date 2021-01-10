import React from "react";
import { connect } from "react-redux";
import Pdf from "react-to-pdf";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import Table from "../../UI/Table/Table";
import CompanyInfo from "../ComapnyInfo/CompanyInfo";

const Invoice = props => {
  const ref = React.createRef();
  let subTotal = 0;
  let tax = 0;
  props.data.items.forEach(obj => {
    subTotal += Number(obj.price);
    tax += Number(obj.tax);
  });
  return (
    <div>
      <Pdf
        targetRef={ref}
        filename={
          props.data.invoiceNumber + "_" + props.data.invoiceDate + ".pdf"
        }
      >
        {({ toPdf }) => (
          <Button onClick={toPdf} variant="contained" color="primary">
            Generate Pdf
          </Button>
        )}
      </Pdf>
      <br />
      <br />
      <div ref={ref}>
        <div style={{ padding: "10px" }}>
          <Typography variant="h4" gutterBottom>
            Invoice
          </Typography>
          <CompanyInfo data={props.companyInfo} />{" "}
          <Typography variant="subtitle2">
            Issue Date:{props.data.invoiceDate}
          </Typography>
          <Typography variant="subtitle2">
            Due Date:{props.data.dueDate}
          </Typography>
          <Typography variant="subtitle2">
            Bill To:
            {"" +
              props.data.client.name +
              " " +
              props.data.client.address +
              " " +
              props.data.client.country +
              " " +
              props.data.client.state +
              " " +
              props.data.client.city}
          </Typography>
          <Typography variant="subtitle2">
            {" "}
            Ship To:
            {"" +
              props.data.client.address +
              " " +
              props.data.client.country +
              " " +
              props.data.client.state +
              " " +
              props.data.client.city}
          </Typography>
          <br />
          <Table
            colHeadings={[
              {
                title: "Name",
                field: "name"
              },
              {
                title: "Quantity",
                field: "quantity"
              },
              {
                title: "Price",
                field: "price"
              },
              {
                title: "Discount",
                field: "discount"
              },
              {
                title: "Tax",
                field: "tax"
              },
              {
                title: "Description",
                field: "description"
              }
            ]}
            rows={props.data.items}
          />
          <br />
          <Typography variant="subtitle2">Sub Total:{subTotal}</Typography>
          <Typography variant="subtitle2"> Total Taxable:{tax}</Typography>
          <Typography variant="subtitle2">
            {" "}
            Grand Total:{subTotal + tax}
          </Typography>
          <Typography variant="subtitle2">
            Amount Due:{subTotal + tax}
          </Typography>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    companyInfo: state.companyInfo
  };
};

export default connect(mapStatetoProps)(Invoice);
