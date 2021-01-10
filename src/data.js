export const clients = [
  {
    name: "ross",
    phone: "1234567891",
    email: "ross@gmail.com",
    gstin: "123456789012345",
    pan: "1234567890",
    address: "pb",
    country: "India",
    state: "New Delhi",
    city: "Delhi",
    pinCode: "110026"
  }
];
export const items = [
  {
    name: "pen",
    description: "stationary",
    unit: "2",
    quantity: "6",
    unitPrice: "1",
    discount: "0",
    tax: "0"
  }
];
export const invoices = [
  {
    client: { ...clients[0] },
    invoiceNumber: "1",
    invoiceDate: "2020-01-08",
    poDate: "2020-03-08",
    paymentTerms: "On Receipt",
    dueDate: "2020-01-08",
    items: [
      {
        name: "pen",
        quantity: "5",
        price: "2",
        discount: "0",
        tax: "0",
        description: "stationary"
      }
    ],
    notes: "very urgent",
    termsConditions: ""
  }
];
