import { configure, shallow } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { SignUpForm } from "./SignUpForm";
import TextField from "@material-ui/core/TextField";
import CompanyInfo from "../../Components/ComapnyInfo/CompanyInfo";

configure({ adapter: new Adapter() });

describe("Testing <SignUpForm/>", () => {
  it("Should render six TextField", () => {
    const wrapper = shallow(<SignUpForm />);
    wrapper.setState({ showInfo: false });
    expect(wrapper.find(TextField)).toHaveLength(6);
  });

  it("Should render CompanyInfo", () => {
    const wrapper = shallow(<SignUpForm />);
    wrapper.setState({ showInfo: true });
    expect(wrapper.find(CompanyInfo)).toHaveLength(1);
  });
});
