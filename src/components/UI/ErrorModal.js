import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./Error.module.css";

const ErrorModal = (props) => {
  return (
    <div onClick={props.onConfirm}>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
