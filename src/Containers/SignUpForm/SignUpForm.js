import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import CompanyInfo from "../../Components/ComapnyInfo/CompanyInfo";

export class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    currInput: {
      companyName: "",
      address: "",
      country: "",
      state: "",
      city: "",
      phoneNmber: "",
      email: "",
      contactPrsn: "",
      pinCode: ""
    },
    showInfo: false,
    data: {}
  };
  componentDidMount = () => {
    const script = document.createElement("script");
    script.src =
      "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";

    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "https://geodata.solutions/includes/countrystatecity.js";

    document.body.appendChild(script2);
  };
  inputChangeHandler = e => {
    this.setState(prevState => {
      return {
        currInput: {
          ...prevState.currInput,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  submitHandler = () => {
    let data = {
      companyInfo: {
        ...this.state.currInput
      }
    };
    // store info firebase
    console.log(this.props.user);
    axios
      .patch(
        "https://invoicing-app-300713-default-rtdb.firebaseio.com/Users/" +
          this.props.user +
          "/.json",
        data
      )
      .then(response => {
        console.log(response);
        this.props.setCompanyInfo({ ...response.data.companyInfo });

        this.setState({
          showInfo: true,
          data: { ...response.data.companyInfo }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {!this.state.showInfo ? (
          <div>
            <TextField
              label="Company Name"
              name="companyName"
              variant="outlined"
              onChange={this.inputChangeHandler}
              value={this.state.currInput.companyName}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <TextField
              label="Address"
              name="address"
              variant="outlined"
              onChange={this.inputChangeHandler}
              value={this.state.currInput.address}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <div>
              <select
                name="country"
                className="countries order-alpha group-continents group-order-alpha"
                id="countryId"
                value={this.state.currInput.country}
                onChange={this.inputChangeHandler}
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
                value={this.state.currInput.state}
                onChange={this.inputChangeHandler}
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
                value={this.state.currInput.city}
                onChange={this.inputChangeHandler}
                style={{
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                <option value="">Select City</option>
              </select>
            </div>
            <TextField
              label="Phone Nmber"
              name="phoneNmber"
              variant="outlined"
              onChange={this.inputChangeHandler}
              value={this.state.currInput.phoneNmber}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              onChange={this.inputChangeHandler}
              value={this.state.currInput.email}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <TextField
              label="Contact Person"
              name="contactPrsn"
              variant="outlined"
              onChange={this.inputChangeHandler}
              value={this.state.currInput.contactPrsn}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <TextField
              label="Pin Code"
              name="pinCode"
              variant="outlined"
              onChange={this.inputChangeHandler}
              value={this.state.currInput.pinCode}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <Button
              onClick={this.submitHandler}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        ) : (
          <CompanyInfo data={this.state.data} />
        )}
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    setCompanyInfo: info => {
      dispatch({ type: "SET COMPANY INFO", payload: { info: info } });
    }
  };
};

export default connect(null, mapDispatchtoProps)(SignUpForm);
