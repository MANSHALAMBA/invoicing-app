import { isNullOrUndefined } from "util";

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
export const dueDateCalc = (paymntTrms, invoiceDate) => {
  var parts = invoiceDate.split("-");
  var mineDate = new Date(parts[0], parts[1] - 1, parts[2]);
  switch (paymntTrms) {
    case "On Receipt":
      return invoiceDate;

    case "NET 7":
      return mineDate
        .addDays(7)
        .toISOString()
        .slice(0, 10);

    case "NET 15":
      return mineDate
        .addDays(15)
        .toISOString()
        .slice(0, 10);
    case "NET 30":
      return mineDate
        .addDays(30)
        .toISOString()
        .slice(0, 10);
    case "NET 45":
      return mineDate
        .addDays(45)
        .toISOString()
        .slice(0, 10);
    case "NET 60":
      return mineDate
        .addDays(60)
        .toISOString()
        .slice(0, 10);
    case "NET 90":
      return mineDate
        .addDays(90)
        .toISOString()
        .slice(0, 10);
    case "Specific Date":
      return invoiceDate;
    case "Hide Payment Terms":
      return invoiceDate;
    default:
      return invoiceDate;
  }
};

export const largestInvoiceNum = invoices => {
  let largestNum = invoices[0].invoiceNumber;
  invoices.forEach(invoice => {
    if (invoice.invoiceNumber > largestNum) largestNum = invoice.invoiceNumber;
  });
  return largestNum;
};

export const sanitizeFields = obj => {
  if (isNullOrUndefined(obj)) return;
  return {
    client: obj.client,
    invoiceNumber: obj.invoiceNumber,
    invoiceDate: obj.invoiceDate,
    dueDate: obj.dueDate,
    items: [...obj.items]
  };
};

export const calcInvoiceStatus = (poDate, dueDate) => {
  if (poDate.trim() != "") {
    return "Paid";
  }

  var parts = dueDate.split("-");
  var mineDate = new Date(parts[0], parts[1] - 1, parts[2]);

  if (mineDate >= new Date()) return "Outstanding";
  return "Overdue";
};

export const defaultInvoiceCurrInput = {
  client: {},
  invoiceNumber: "",
  invoiceDate: "",
  poDate: "",
  paymentTerms: "",
  dueDate: "",
  items: [
    {
      name: "",
      quantity: "",
      price: "",
      discount: "",
      tax: "",
      description: ""
    }
  ],
  notes: "",
  termsConditions: ""
};
