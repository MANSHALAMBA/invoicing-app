import reducer from "./reducer";

const state = {
  clients: [],
  items: [],
  userName: "",
  userImageUrl: "",
  companyInfo: {
    companyName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    phoneNmber: "",
    email: "",
    contactPrsn: "",
    pinCode: ""
  }
};

const state2 = {
  clients: [
    {
      name: "some",
      phone: "some",
      email: "some",
      gstin: "some",
      pan: "some",
      address: "some",
      country: "some",
      state: "some",
      city: "some",
      pinCode: "some"
    }
  ],
  items: [
    {
      name: "some",
      description: "some",
      unit: "1",
      quantity: "1",
      unitPrice: "1",
      discount: "1",
      tax: "1"
    }
  ],
  userName: "",
  userImageUrl: "",
  companyInfo: {
    companyName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    phoneNmber: "",
    email: "",
    contactPrsn: "",
    pinCode: ""
  }
};

describe("Testing Reducer", () => {
  it("should add item", () => {
    expect(
      reducer(state, {
        type: "ADD ITEM",
        data: {
          name: "some",
          description: "some",
          unit: "1",
          quantity: "1",
          unitPrice: "1",
          discount: "1",
          tax: "1"
        }
      })
    ).toEqual({
      ...state,
      items: [
        {
          name: "some",
          description: "some",
          unit: "1",
          quantity: "1",
          unitPrice: "1",
          discount: "1",
          tax: "1"
        }
      ]
    });
  });
  it("should update item", () => {
    expect(
      reducer(state, {
        type: "EDIT ITEM",
        payload: {
          index: 0,
          updatedItem: {
            name: "some",
            description: "some",
            unit: "1",
            quantity: "1",
            unitPrice: "1",
            discount: "1",
            tax: "1"
          }
        }
      })
    ).toEqual({
      ...state,
      items: [
        {
          name: "some",
          description: "some",
          unit: "1",
          quantity: "1",
          unitPrice: "1",
          discount: "1",
          tax: "1"
        }
      ]
    });
  });
  it("should delete item", () => {
    expect(
      reducer(state2, {
        type: "DELETE ITEM",
        payload: {
          index: 0
        }
      })
    ).toEqual({
      ...state2,
      items: []
    });
  });
  it("should add client", () => {
    expect(
      reducer(state, {
        type: "ADD CLIENT",
        data: {
          name: "some",
          phone: "some",
          email: "some",
          gstin: "some",
          pan: "some",
          address: "some",
          country: "some",
          state: "some",
          city: "some",
          pinCode: "some"
        }
      })
    ).toEqual({
      ...state,
      clients: [
        {
          name: "some",
          phone: "some",
          email: "some",
          gstin: "some",
          pan: "some",
          address: "some",
          country: "some",
          state: "some",
          city: "some",
          pinCode: "some"
        }
      ]
    });
  });
  it("should update client", () => {
    expect(
      reducer(state, {
        type: "EDIT CLIENT",
        payload: {
          index: 0,
          updatedClient: {
            name: "some",
            phone: "some",
            email: "some",
            gstin: "some",
            pan: "some",
            address: "some",
            country: "some",
            state: "some",
            city: "some",
            pinCode: "some"
          }
        }
      })
    ).toEqual({
      ...state,
      clients: [
        {
          name: "some",
          phone: "some",
          email: "some",
          gstin: "some",
          pan: "some",
          address: "some",
          country: "some",
          state: "some",
          city: "some",
          pinCode: "some"
        }
      ]
    });
  });
  it("should delete client", () => {
    expect(
      reducer(state2, {
        type: "DELETE CLIENT",
        payload: {
          index: 0
        }
      })
    ).toEqual({
      ...state2,
      clients: []
    });
  });

  it("should update user name", () => {
    expect(
      reducer(state, {
        type: "SET USERNAME",
        payload: {
          name: "some"
        }
      })
    ).toEqual({
      ...state,
      userName: "some"
    });
  });

  it("should update user image url", () => {
    expect(
      reducer(state, {
        type: "SET USER IMAGEURL",
        payload: {
          url: "some"
        }
      })
    ).toEqual({
      ...state,
      userImageUrl: "some"
    });
  });

  it("should update company info", () => {
    expect(
      reducer(state, {
        type: "SET COMPANY INFO",
        payload: {
          info: {
            some: "some"
          }
        }
      })
    ).toEqual({
      ...state,
      companyInfo: { some: "some" }
    });
  });
});
