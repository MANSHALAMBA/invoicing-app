import React, { Component } from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import SignUpForm from "../SignUpForm/SignUpForm";
import CompanyInfo from "../../Components/ComapnyInfo/CompanyInfo";

export class Home extends Component {
  state = {
    // isLoggedIn: false,
    formShow: false,
    newUserId: ""
  };

  signInresponse = response => {
    console.log(response);

    // ** IF SUCCESS

    axios
      .get(
        'https://invoicing-app-300713-default-rtdb.firebaseio.com/Users.json?orderBy="email"&equalTo="' +
          response.profileObj.email +
          '"'
      )
      .then(response2 => {
        if (Object.keys(response2.data).length != 0) {
          this.props.setCompanyInfo(
            response2.data[Object.keys(response2.data)[0]].companyInfo
          );
          // this.setState({ isLoggedIn: true });
          this.props.setLoggedIn(true);
          this.props.setUserName(response.profileObj.name);
          this.props.setImageUrl(response.profileObj.imageUrl);
        } else {
          window.alert("Sign Up to continue");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  signUpresponse = response => {
    console.log(response);

    // *** If successcompanyInfo

    axios
      .post(
        "https://invoicing-app-300713-default-rtdb.firebaseio.com/Users.json",
        {
          email: response.profileObj.email
        }
      )
      .then(response2 => {
        this.setState({
          formShow: true,
          newUserId: response2.data.name
        });
        this.props.setLoggedIn(true);
        this.props.setUserName(response.profileObj.name);
        this.props.setImageUrl(response.profileObj.imageUrl);
      })
      .catch(error => {
        console.log(error);
      });
  };

  logout = () => {
    this.setState({ formShow: false });
    this.props.setLoggedIn(false);
    this.props.setUserName("");
    this.props.setImageUrl("");
  };

  render() {
    return (
      <div>
        {!this.props.isLoggedIn ? (
          <div>
            <GoogleLogin
              clientId="71512810810-4mjf71g8632orfef5t63i5a6ap7hbu8l.apps.googleusercontent.com"
              buttonText="Sign In"
              onSuccess={this.signInresponse}
              onFailure={this.signInresponse}
              cookiePolicy={"single_host_origin"}
            />
            <GoogleLogin
              clientId="71512810810-4mjf71g8632orfef5t63i5a6ap7hbu8l.apps.googleusercontent.com"
              buttonText="Sign Up"
              onSuccess={this.signUpresponse}
              onFailure={this.signUpresponse}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        ) : (
          <div>
            <GoogleLogout
              clientId="71512810810-4mjf71g8632orfef5t63i5a6ap7hbu8l.apps.googleusercontent.com"
              buttonText="Sign Out"
              onLogoutSuccess={this.logout}
            ></GoogleLogout>
            <br />
            {this.state.formShow ? (
              <SignUpForm user={this.state.newUserId} />
            ) : (
              <CompanyInfo data={{ ...this.props.companyInfo }} />
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    companyInfo: state.companyInfo,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    setUserName: name => {
      dispatch({ type: "SET USERNAME", payload: { name: name } });
    },
    setImageUrl: url => {
      dispatch({ type: "SET USER IMAGEURL", payload: { url: url } });
    },
    setCompanyInfo: info => {
      dispatch({ type: "SET COMPANY INFO", payload: { info: info } });
    },
    setLoggedIn: value => {
      dispatch({ type: "SET LOGGEDIN", payload: { value: value } });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
