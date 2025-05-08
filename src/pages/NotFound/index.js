import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Core/Button";
import classes from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.mainContainer}>
      <div>
        <h2>404 - PAGE NOT FOUND</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Button
          label={"Go to Home"}
          onClick={() => navigate("/")}
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default NotFound;
