import { userPng } from "@/constant/imagePath";

export const sortOptions = [
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "oldest",
    label: "Oldest",
  },
];
export const currency = "$";
export const fraudDetectionTableHeaders = [
  {
    label: "",
    value: "sno",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Phone",
    value: "phone",
  },
  {
    label: "Flagged Amount",
    value: "flaggedAmount",
  },
  {
    label: "Flagged Reason",
    value: "flaggedReason",
  },
  {
    label: "Flagged Date",
    value: "flaggedDate",
  },
  {
    label: "Action",
    value: "action",
    dataStyle: {
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
    },
  },
];

export const verificationTableHeaders = [
  {
    label: "",
    value: "sno",
  },
  {
    label: "Verification ID",
    value: "verificationId",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Account Number",
    value: "accountNumber",
  },
  {
    label: "Verification Type",
    value: "verificationType",
  },
  {
    label: "Request Date",
    value: "requestDate",
  },
  {
    label: "Expiry Date",
    value: "expiryDate",
  },
  {
    label: "Action",
    value: "action",
    dataStyle: {
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
    },
  },
];
export const actionHistoryTableHeaders = [
  {
    label: "",
    value: "sno",
  },
  {
    label: "Date/Time",
    value: "createdAt",
  },
  {
    label: "Action Type",
    value: "actionType",
  },

  {
    label: "Affected User",
    value: "affectedUser",
  },
  {
    label: "Status",
    value: "status",
  },
  {
    label: "Action",
    value: "action",
    dataStyle: {
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
    },
  },
];
export const fileNames = {
  front: "driving-license-front",
  back: "driving-license-back",
  document: "w9-form",
};
export const customerFileNames = {
  front: "medical-license-front",
  back: "medical-license-back",
};
export const imageTypes = ["jpg", "jpeg", "png", "jfif", "webp"];
export const videoTypes = ["mp4", "webm", "ogg", "quicktime", "mov", "mpeg"];
export const driveLicenseTypes = ["png", "jpg", "jpeg", "pdf"];

export const ROLE = {
  ADMIN: "admin",
  STAFF: "staff",
  SALES_AGENT: "sales-agent",
  DISTRICT_MANAGER: "district-manager",
  CUSTOMER: "customer",
  SUPPLIER: "supplier",
};

export const ROLE_GROUP = {
  SUPPLIERS: "67a29221f1d6c6f786f925b8",
};
export const countryCodes = [
  { name: "United States", code: "US" },
  // { name: "Canada", code: "CA" },
  // { name: "Puerto Rico", code: "PR" },
  // { name: "United Kingdom", code: "GB" },
];
export const stateCodes = {
  // [countryCodes?.[0]?.code]: [
  //   {
  //     name: "Alberta",
  //     code: "AB",
  //   },
  //   {
  //     name: "British Columbia",
  //     code: "BC",
  //   },
  //   {
  //     name: "Manitoba",
  //     code: "MB",
  //   },
  //   {
  //     name: "New Brunswick",
  //     code: "NB",
  //   },
  //   {
  //     name: "Newfoundland and Labrador",
  //     code: "NL",
  //   },
  //   {
  //     name: "Northwest Territories",
  //     code: "NT",
  //   },
  //   {
  //     name: "Nova Scotia",
  //     code: "NS",
  //   },
  //   {
  //     name: "Nunavut",
  //     code: "NU",
  //   },
  //   {
  //     name: "Ontario",
  //     code: "ON",
  //   },
  //   {
  //     name: "Prince Edward Island",
  //     code: "PE",
  //   },
  //   {
  //     name: "Quebec",
  //     code: "QC",
  //   },
  //   {
  //     name: "Saskatchewan",
  //     code: "SK",
  //   },
  //   {
  //     name: "Yukon Territory",
  //     code: "YT",
  //   },
  // ],
  [countryCodes?.[0]?.code]: [
    {
      name: "Alabama",
      code: "AL",
    },
    {
      name: "Alaska",
      code: "AK",
    },
    {
      name: "American Samoa",
      code: "AS",
    },
    {
      name: "Arizona",
      code: "AZ",
    },
    {
      name: "Arkansas",
      code: "AR",
    },
    {
      name: "California",
      code: "CA",
    },
    {
      name: "Colorado",
      code: "CO",
    },
    {
      name: "Connecticut",
      code: "CT",
    },
    {
      name: "Delaware",
      code: "DE",
    },
    {
      name: "District Of Columbia",
      code: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      code: "FM",
    },
    {
      name: "Florida",
      code: "FL",
    },
    {
      name: "Georgia",
      code: "GA",
    },
    {
      name: "Guam",
      code: "GU",
    },
    {
      name: "Hawaii",
      code: "HI",
    },
    {
      name: "Idaho",
      code: "ID",
    },
    {
      name: "Illinois",
      code: "IL",
    },
    {
      name: "Indiana",
      code: "IN",
    },
    {
      name: "Iowa",
      code: "IA",
    },
    {
      name: "Kansas",
      code: "KS",
    },
    {
      name: "Kentucky",
      code: "KY",
    },
    {
      name: "Louisiana",
      code: "LA",
    },
    {
      name: "Maine",
      code: "ME",
    },
    {
      name: "Marshall Islands",
      code: "MH",
    },
    {
      name: "Maryland",
      code: "MD",
    },
    {
      name: "Massachusetts",
      code: "MA",
    },
    {
      name: "Michigan",
      code: "MI",
    },
    {
      name: "Minnesota",
      code: "MN",
    },
    {
      name: "Mississippi",
      code: "MS",
    },
    {
      name: "Missouri",
      code: "MO",
    },
    {
      name: "Montana",
      code: "MT",
    },
    {
      name: "Nebraska",
      code: "NE",
    },
    {
      name: "Nevada",
      code: "NV",
    },
    {
      name: "New Hampshire",
      code: "NH",
    },
    {
      name: "New Jersey",
      code: "NJ",
    },
    {
      name: "New Mexico",
      code: "NM",
    },
    {
      name: "New York",
      code: "NY",
    },
    {
      name: "North Carolina",
      code: "NC",
    },
    {
      name: "North Dakota",
      code: "ND",
    },
    {
      name: "Northern Mariana Islands",
      code: "MP",
    },
    {
      name: "Ohio",
      code: "OH",
    },
    {
      name: "Oklahoma",
      code: "OK",
    },
    {
      name: "Oregon",
      code: "OR",
    },
    {
      name: "Palau",
      code: "PW",
    },
    {
      name: "Pennsylvania",
      code: "PA",
    },
    {
      name: "Puerto Rico",
      code: "PR",
    },
    {
      name: "Rhode Island",
      code: "RI",
    },
    {
      name: "South Carolina",
      code: "SC",
    },
    {
      name: "South Dakota",
      code: "SD",
    },
    {
      name: "Tennessee",
      code: "TN",
    },
    {
      name: "Texas",
      code: "TX",
    },
    {
      name: "Utah",
      code: "UT",
    },
    {
      name: "Vermont",
      code: "VT",
    },
    {
      name: "Virgin Islands",
      code: "VI",
    },
    {
      name: "Virginia",
      code: "VA",
    },
    {
      name: "Washington",
      code: "WA",
    },
    {
      name: "West Virginia",
      code: "WV",
    },
    {
      name: "Wisconsin",
      code: "WI",
    },
    {
      name: "Wyoming",
      code: "WY",
    },
  ],
};
