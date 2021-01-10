import { configure, shallow } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { Invoices } from "./Invoices";
import Invoice from "../../Components/Invoice/Invoice";

configure({ adapter: new Adapter() });
describe("Testing <Invoices/>", () => {
  it("should  render single Invoice", () => {
    const wrapper = shallow(<Invoices data={[]} />);

    wrapper.setState({
      viewSingleInvoice: true
    });

    expect(wrapper.find(Invoice)).toHaveLength(1);
  });

  it("should not render single Invoice", () => {
    const wrapper = shallow(<Invoices data={[]} />);
    wrapper.setState({ viewSingleInvoice: false });
    expect(wrapper.find(Invoice)).toHaveLength(0);
  });
});
