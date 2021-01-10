import { clients } from "../data";
import { items } from "../data";
import { invoices } from "../data";

let initialState = {
  clients: [...clients],
  items: [...items],
  invoices: [...invoices],
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
  },
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD ITEM":
      return {
        ...state,
        items: [...state.items, { ...action.data }]
      };
    case "ADD CLIENT":
      return {
        ...state,
        clients: [...state.clients, { ...action.data }]
      };
    case "ADD INVOICE":
      return {
        ...state,
        invoices: [...state.invoices, { ...action.data }]
      };
    case "EDIT ITEM":
      let items = [...state.items];
      items[action.payload.index] = { ...action.payload.updatedItem };
      return {
        ...state,
        items: items
      };
    case "DELETE ITEM":
      let items2 = state.items.filter(
        (item, index) => index != action.payload.index
      );
      return {
        ...state,
        items: items2
      };
    case "EDIT CLIENT":
      let clients = [...state.clients];
      clients[action.payload.index] = { ...action.payload.updatedClient };
      return {
        ...state,
        clients: clients
      };
    case "DELETE CLIENT":
      let clients2 = state.clients.filter(
        (client, index) => index != action.payload.index
      );
      return {
        ...state,
        clients: clients2
      };
    case "EDIT INVOICE":
      let invoices = [...state.invoices];
      invoices[action.payload.index] = { ...action.payload.updatedInvoice };
      return {
        ...state,
        invoices: invoices
      };
    case "DELETE INVOICE":
      let invoices2 = state.invoices.filter(
        (invoice, index) => index != action.payload.index
      );
      return {
        ...state,
        invoices: invoices2
      };
    case "SET USERNAME":
      return {
        ...state,
        userName: action.payload.name
      };
    case "SET USER IMAGEURL":
      return {
        ...state,
        userImageUrl: action.payload.url
      };
    case "SET COMPANY INFO":
      return {
        ...state,
        companyInfo: { ...action.payload.info }
      };
    case "SET LOGGEDIN":
      return {
        ...state,
        isLoggedIn: action.payload.value
      };
    default:
      return state;
  }
};

export default reducer;
