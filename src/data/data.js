export const managerTabOptions = [
  {
    label: "District Managers",
    value: "active",
  },
  {
    label: "District Managers Registration",
    value: "registration-pending",
  },
  {
    label: "Inactive",
    value: "system-deactivated",
  },
];
export const agentTabOptions = [
  {
    label: "Sales Agents",
    value: "active",
  },
  {
    label: "Agent Registration",
    value: "registration-pending",
  },
  {
    label: "Inactive",
    value: "system-deactivated",
  },
];
export const customerTabOptions = [
  {
    label: "Assigned Customers",
    value: "active",
  },
  {
    label: "Unassigned Customers",
    value: "unassigned",
  },
  {
    label: "Customer Registration",
    value: "registration-pending",
  },
  {
    label: "Inactive",
    value: "system-deactivated",
  },
];
export const categoryStatusOptions = [
  {
    label: "Active",
    value: true,
  },
  {
    label: "Inactive",
    value: false,
  },
];
export const orderStatusOptions = [
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "In Progress",
    value: "in-progress",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
];
export const orderTableHeaders = [
  {
    label: "Order Id",
    value: "orderId",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Customer",
    value: "customer",

    headerStyle: {
      width: "20%",
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Order Date",
    value: "createdAt",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  // {
  //   label: "Delivery Date",
  //   value: "deliveryDate",
  //   headerStyle: {
  //     textAlign: "left",
  //   },
  //   dataStyle: {
  //     textAlign: "left",
  //   },
  // },
  {
    label: "Status",
    value: "status",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Supplier Name",
    value: "supplier",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "",
    value: "actions",
  },
];
export const supplierHeaders = [
  {
    label: "Supplier",
    value: "supplier",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Contact Number",
    value: "phoneNo",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Shipping Address",
    value: "address",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Product Amount",
    value: "productAmount",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Shipment Amount",
    value: "shipmentAmount",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
];
export const orderDetailHeaders = [
  {
    value: "orderId",
    label: "Order ID",
  },
  {
    value: "completionDate",
    label: "Completion Date",
  },
  {
    value: "createdAt",
    label: "Order Date",
  },
  {
    value: "status",
    label: "Order Status",
  },
];

export const productsHeaders = [
  {
    value: "sku",
    label: "SKU ID",
  },
  {
    value: "name",
    label: "Product Name",
  },
  {
    value: "quantity",
    label: "Quantity",
  },
  {
    value: "price",
    label: "Price",
  },
  {
    value: "total",
    label: "Total",
  },
];
export const customerOrderHeaders = [
  {
    label: "Order Id",
    value: "orderId",
    headerStyle: { textAlign: "center" },
    dataStyle: { textAlign: "center" },
  },
  {
    label: "Total Products",
    value: "products",
    headerStyle: { textAlign: "center" },
    dataStyle: { textAlign: "center" },
  },
  {
    label: "Order Date",
    value: "createdAt",
    headerStyle: { textAlign: "center" },
    dataStyle: { textAlign: "center" },
  },
  {
    label: "Total Amount",
    value: "totalAmount",
    headerStyle: { textAlign: "center" },
    dataStyle: { textAlign: "center" },
  },
];
export const shipmentStatusOptions = [
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Shipped",
    value: "shipped",
  },
  {
    label: "Delivered",
    value: "delivered",
  },
];
export const shipmentTableHeaders = [
  {
    label: "Order ID",
    value: "orderId",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Customer",
    value: "customer",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Ordered On",
    value: "orderDate",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Delivered On",
    value: "deliveryDate",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Shipment Amount",
    value: "shipmentAmount",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Status",
    value: "status",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "Product Quantity",
    value: "quantity",
    headerStyle: {
      textAlign: "left",
    },
    dataStyle: {
      textAlign: "left",
    },
  },
  {
    label: "",
    value: "actions",
  },
];
export const upsServiceCodes = {
  "01": "UPS Next Day Air",
  "02": "UPS 2nd Day Air",
  "03": "UPS Ground",
  "07": "UPS Worldwide Express",
  "08": "UPS Worldwide Expedited",
  11: "UPS Standard",
  12: "UPS 3 Day Select",
  13: "UPS Next Day Air Saver",
  14: "UPS Next Day Air Early",
  54: "UPS Worldwide Express Plus",
  65: "UPS Worldwide Saver",
};
export const fedexServiceCodes = {
  "01": "FedEx Priority Overnight",
  "03": "FedEx 2Day",
  "05": "FedEx Express Saver",
  "06": "FedEx Standard Overnight",
  13: "FedEx First Overnight",
  16: "FedEx First Overnight Freight",
  20: "FedEx International Economy",
  21: "FedEx International Priority",
  70: "FedEx 1Day Freight",
  80: "FedEx 2Day Freight",
  82: "FedEx 3Day Freight",
  92: "FedEx Ground",
};
export const shipmentDetailsHeaders = [
  {
    label: "Shipment ID",
    value: "shipmentId",
  },
  {
    label: "Shipment Service",
    value: "service",
  },
  {
    label: "Shipment Service Code",
    value: "serviceCode",
  },
  {
    label: "Price",
    value: "price",
  },
  {
    label: "Shipment Cost",
    value: "shipmentCost",
  },
  {
    label: "Status",
    value: "status",
  },
];
export const shipmentTrackingHeaders = [
  {
    label: "Tracking Number",
    value: "trackingNumber",
  },
  {
    label: "Shipment Label",
    value: "shippingLabel",
  },
  {
    label: "Actions",
    value: "actions",
  },
];
