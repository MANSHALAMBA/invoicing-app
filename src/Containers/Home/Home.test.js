import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Home } from "./Home";
import SignUpForm from "../SignUpForm/SignUpForm";
import CompanyInfo from "../../Components/ComapnyInfo/CompanyInfo";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

import React from "react";

configure({ adapter: new Adapter() });

describe("<Home/>", () => {
  it("should render 2 Google Login", () => {
    const wrapper = shallow(<Home companyInfo={{}} />);

    wrapper.setState({ isLoggedIn: false });
    expect(wrapper.find(GoogleLogin)).toHaveLength(2);
  });

  it("should render 1 Google Logout", () => {
    const wrapper = shallow(<Home companyInfo={{}} />);

    wrapper.setState({ isLoggedIn: true });
    expect(wrapper.find(GoogleLogout)).toHaveLength(1);
  });

  it("should render SignupForm", () => {
    const wrapper = shallow(<Home companyInfo={{}} />);
    wrapper.setState({ formShow: true, isLoggedIn: true });
    expect(wrapper.find(SignUpForm)).toHaveLength(1);
  });

  it("should render Company Info", () => {
    const wrapper = shallow(<Home companyInfo={{}} />);
    wrapper.setState({ formShow: false, isLoggedIn: true });
    expect(wrapper.find(CompanyInfo)).toHaveLength(1);
  });
});
