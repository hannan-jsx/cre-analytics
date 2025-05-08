import { useState } from "react";
import PropTypes from "prop-types";
import classes from "./input.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { numberRegEx, pointRegEx } from "@/data/regex";

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  type,
  label,
  label2, // sub label
  value, // input value
  setter, //setValue
  noBorder,
  placeholder,
  disabled,
  parentCustomStyle, //Main Div Inline Style
  customStyle, //Input Container inline Style
  inputStyle, //Input inline Style
  labelStyle, //Label inline Style
  error, // Show Error Boolean
  errorText, // Error Text
  leftIcon, // Icon For Input
  rightIcon,
  regexType,
  parentClass,
  labelOnTop = false,
  ...props
}) => {
  const [passToggle, setPassToggle] = useState(false);
  let inputContainerStyleObject = Object.assign(
    {},
    error && { border: `1px solid red ` },
    leftIcon && { paddingLeft: "50px" }
  );
  return (
    <>
      <div
        className={`${[
          classes.Container,
          labelOnTop ? classes.labelOnTop : "",
          parentClass,
        ].join(" ")}`}
        style={{ ...parentCustomStyle }}
      >
        {label && (
          <label
            htmlFor={`input${label}`}
            className={`${[
              classes.labelText,
              disabled && classes.disabled,
              labelOnTop ? classes.onTopLabel : "",
            ].join(" ")}`}
            style={{ ...labelStyle }}
          >
            {label} {label2 && label2}
          </label>
        )}
        <div
          className={`${[classes.inputPassContainer].join(" ")}`}
          style={{ ...customStyle }}
        >
          {leftIcon && <div className={classes.leftIconBox}>{leftIcon}</div>}
          <input
            value={value}
            // onKeyDown={(e) => {
            //   if (type == 'number') {
            //     return (
            //       ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
            //     );
            //   }
            // }}
            onChange={(e) => {
              if (regexType == "point") {
                if (pointRegEx.test(e?.target?.value)) {
                  setter(e?.target?.value);
                }
              } else if (regexType == "number" || type == "number") {
                setter(e?.target?.value?.replace(numberRegEx, ""));
              } else {
                setter(e.target.value);
              }
            }}
            disabled={disabled}
            placeholder={placeholder}
            type={passToggle == true ? "text" : type}
            id={`input${label}`}
            className={` ${[
              classes.inputBox,
              noBorder && classes.noBorder,
            ].join(" ")}`}
            style={{ ...inputContainerStyleObject, ...inputStyle }}
            onBlur={(e) => {
              setter(e.target.value?.trim());
            }}
            {...props}
          />
          {rightIcon && <div className={classes.rightIcon}>{rightIcon}</div>}

          {type == "password" && passToggle == false && (
            <VisibilityOffIcon
              className={classes.passwordIcon}
              onClick={(e) => setPassToggle(!passToggle)}
            />
          )}
          {type == "password" && passToggle && (
            <VisibilityIcon
              className={classes.passwordIcon}
              onClick={(e) => setPassToggle(!passToggle)}
            />
          )}
          {error && (
            <p
              className={`${[
                classes.errorText,
                type == "password" || rightIcon
                  ? classes.offsetLeftError
                  : undefined,
              ].join(" ")}`}
            >
              {errorText}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  setter: PropTypes.string,
  noBorder: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyle: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  label2: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "enter text",
  value: "",
  noBorder: false,
  disabled: false,
  error: false,
  errorText: "An error has occurred, check your details!",
};
