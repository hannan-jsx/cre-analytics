import RenderToast from "@/components/Core/RenderToast";
import { formRegEx, formRegExReplacer } from "@/config/apiUrl";
import { currency, fileNames } from "@/data/constants";
import { fedexServiceCodes, upsServiceCodes } from "@/data/data";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import { isMobilePhone } from "validator";

export const apiHeader = (token, isFormData) => {
  if (token && !isFormData) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    };
  }
  if (token && isFormData) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
        "ngrok-skip-browser-warning": "69420",
      },
    };
  }
  if (!token && !isFormData) {
    return {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
    };
  }

  if (!token && isFormData) {
    return {
      headers: {
        "Content-Type": "multipart/form-data",
        "ngrok-skip-browser-warning": "69420",
      },
    };
  }
};

export const thousandToK = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num < 900) {
    return num;
  }
};

export const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

//TODO:
export const interpolateString = (str, valueObj) => {
  if (typeof str !== "string") {
    return "";
  }
  for (let key in valueObj) {
    return str.replace(`{${key}}`, valueObj[key]);
  }
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const CreateFormData = (data) => {
  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

export const ReturnFormatedNumber = (number) => {
  let newNumber = number?.slice(2);
  newNumber = newNumber?.replace(/(\d{3})(\d{3})(\d{4})/, "($1) - $2 $3");
  return newNumber;
};

export const falsyArray = [
  null,
  undefined,
  "",
  0,
  false,
  NaN,
  "null",
  "undefined",
  "false",
  "0",
  "NaN",
];

export const formatMessageDate = (date) => {
  const messageDate = moment(date);
  const now = moment();

  if (messageDate.isSame(now, "minute")) {
    // If the date is exactly now, show the current time, e.g., 'HH:mm A'
    return now.format("HH:mm A");
  } else if (messageDate.isSame(now, "day")) {
    // If the date is today, use fromNow()
    return messageDate.fromNow();
  } else if (messageDate.isSame(now.subtract(1, "day"), "day")) {
    // If the date is yesterday, use fromNow()
    return messageDate.fromNow();
  } else {
    // Otherwise, show the date in a standard format, e.g., 'MM/DD/YYYY'
    return messageDate.format("MM/DD/YYYY");
  }
};

export const formatDate = (date) => {
  const formdatedDate = moment(date);
  return formdatedDate.format("MM/DD/YYYY");
};

export function stripAllHtmlTags(input) {
  return input?.replace(/<[^>]*>?/gm, "");
}

const options = {
  onDownloadProgress: (progressEvent) => {
    const { loaded, total } = progressEvent;
  },
};
export function downloadFileFromUrl(fileUrl, filename) {
  axios
    .get(fileUrl, {
      responseType: "blob",
      ...options,
    })
    .then(function (response) {
      const url = window.URL.createObjectURL(
        new Blob([response.data], {
          type: response.headers["content-type"],
        })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
    })
    .catch((e) => {});
}

export const scrollToTop = (topVal = 0) => {
  window.scrollTo({
    top: topVal,
    behavior: "smooth",
  });
};

export const formatNumber = (num) => {
  if (num % 1 === 0) {
    return `${num?.toLocaleString()}`;
  } else {
    return `${num?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
};

export const bytesToMB = (bytes) => {
  return bytes / (1024 * 1024);
};

export async function convertImageFile(file) {
  if (typeof window !== "undefined") {
    const heic2any = require("heic2any");
    if (file?.type === "image/heic") {
      try {
        const convertedBlob = await heic2any({
          blob: file,
          toType: "image/jpeg",
        });
        return new File(
          [convertedBlob],
          file.name.replace(/\.heic$/i, ".jpg"),
          {
            type: "image/jpeg",
            lastModified: Date.now(),
          }
        );
      } catch (error) {
        console.error("Error converting HEIC to JPEG:", error);
        throw error;
      }
    } else if (file?.type === "image/webp") {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = URL.createObjectURL(file);
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        return new Promise((resolve) => {
          canvas.toBlob((blob) => {
            const convertedFile = new File(
              [blob],
              file.name.replace(/\.webp$/i, ".jpg"),
              {
                type: "image/jpeg",
                lastModified: Date.now(),
              }
            );
            resolve(convertedFile);
          }, "image/jpeg");
        });
      } catch (error) {
        console.error("Error converting WebP to JPEG:", error);
        throw error;
      }
    }
    return file;
  }
}
export const handleConvertImages = async (files) => {
  // return files;
  const temp = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (typeof file === "string") {
      temp.push(file);
    } else {
      const image = await convertImageFile(file);
      temp.push(image);
    }
  }
  return temp;
};

export const validateUrl = (url) => {
  const urlRegex =
    /^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return urlRegex.test(url);
};

export const RemoveComma = (value) => {
  // Remove commas and convert to a number
  const numberValue = value.replace(/,/g, "");
  return numberValue;
};

export const quillValidateHandler = (
  params,
  toastMessage = "Please fill the home cms field!"
) => {
  let flag = true;
  for (let key in params) {
    const parsedHTML = new DOMParser().parseFromString(
      params[key],
      "text/html"
    );
    const plainText = parsedHTML.body.textContent || "";
    if (plainText?.trim() === "") {
      toast.error(toastMessage);
      flag = false;
      break;
    }
  }
  return flag;
};

export const validateDate = (date) => {
  if (!date) return null; // Return null if date is falsy

  // Check if date is a moment object and has a $d property
  if (date?.$d) {
    return moment(date.$d).format(); // Format if $d exists
  } else {
    return moment(date).format(); // Assume date is a valid input for moment
  }
};
export const calculateRaiseGoalPercentage = (raisedAmount, goalAmount) => {
  return (raisedAmount * 100) / goalAmount;
};
export const validateProductLinks = (links) => {
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    for (let linkKey in link) {
      if (!link[linkKey]) {
        toast.error(`${linkKey} cannot be empty for link ${i + 1}`);
        return false;
      }
    }
  }
  return true;
};
export const getYearRange = (previousYear) => {
  const yearOptions = [];
  const currentYear = new Date().getFullYear();
  const yearRange = currentYear - previousYear;
  for (let i = 0; i < yearRange + 1; i++) {
    yearOptions.push({
      label: previousYear + i,
      value: previousYear + i,
    });
  }
  return yearOptions;
};
export const getId = (obj, key) => {
  return obj?.[key]?._id || obj?.[key];
};

export const formatAmount = (amount) => {
  const formattedAmount = formatNumber(amount);
  return `${currency} ${formattedAmount}`;
};
export const getUserName = (user) => {
  if (!user) return "N/A";
  return (user?.firstName || "") + " " + (user?.lastName || "");
};
export const camelCaseToLower = (str) => {
  return str.replace(formRegEx, formRegExReplacer).toLowerCase();
};
export const replaceHyphen = (str) => {
  return str.replace(/-/g, " ");
};
export const transformManagerPayload = (payload) => {
  const { documents, driversLicenseDocument, ...rest } = payload;
  const allDocuments = [];
  for (let key in driversLicenseDocument) {
    const obj = {
      name: `driving-license-${key}`,
      document: driversLicenseDocument[key],
    };
    allDocuments.push(obj);
  }
  for (let i = 0; i < documents.length; i++) {
    const obj = {
      name: `w9-form`,
      document: documents[i],
    };
    allDocuments.push(obj);
  }
  return { ...rest, documents: allDocuments };
};

export const snakeCaseToLower = (str) => {
  return str
    .split("_")
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
    .join(" ");
};
export const validateCreateUser = (data) => {
  for (const key in data) {
    if (!data[key]) {
      RenderToast({
        type: "error",
        message: `${camelCaseToLower(key)} is required`,
      });
      return false;
    }
    if (key === "email" && !validateEmail(data[key])) {
      RenderToast({
        type: "error",
        message: `Please enter correct email`,
      });
      return false;
    }
    if (key === "phoneNo" && data[key] && !isMobilePhone(data[key])) {
      RenderToast({
        type: "error",
        message: `Please enter correct phone number`,
      });
      return false;
    }
    if (key === "documents") {
      for (let innerKey in data[key]) {
        if (!data[key][innerKey]) {
          RenderToast({
            type: "error",
            message: `${replaceHyphen(fileNames[innerKey])} is required`,
          });
          return false;
        }
      }
    }
    if (key === "password" && data[key].length < 8) {
      RenderToast({
        type: "error",
        message: `Password must be at least 8 characters`,
      });
      return false;
    }
  }
  if (data?.password !== data?.confirmPassword) {
    RenderToast({
      type: "error",
      message: `Passwords do not match`,
    });
    return false;
  }
  return true;
};
export const getShipmentLabel = (service) => {
  switch (service?.service) {
    case "ups":
      return upsServiceCodes[service?.serviceCode];
    case "fedex":
      return fedexServiceCodes[service?.serviceCode];
    default:
      return service?.serviceCode;
  }
};
export const validateShipmentPackages = (packages) => {
  for (let i = 0; i < packages.length; i++) {
    const pack = packages[i];
    for (let key in pack) {
      if (!pack[key]) {
        RenderToast({
          type: "error",
          message: `${camelCaseToLower(key)} is required at position ${i + 1}`,
        });
        return false;
      }
    }
  }
  return true;
};
export const sortChildCategories = (categories) => {
  return categories?.map((item) => {
    return {
      ...item,
      sup: item?.sup
        ?.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, {
            sensitivity: "base",
          })
        )
        ?.map((sub) => {
          return {
            ...sub,
            sub: sub?.sub
              ?.sort((a, b) =>
                a.name.localeCompare(b.name, undefined, {
                  sensitivity: "base",
                })
              )
              ?.map((subChild) => {
                return {
                  ...subChild,
                  child: subChild?.child?.sort((a, b) =>
                    a.name.localeCompare(b.name, undefined, {
                      sensitivity: "base",
                    })
                  ),
                };
              }),
          };
        }),
    };
  });
};
