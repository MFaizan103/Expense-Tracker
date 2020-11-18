import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@material-ui/core";
import "./Transaction.css";

import DeleteIcon from "@material-ui/icons/Delete";

// import IconButton from "@material-ui/icons";

export const Transaction = ({ transaction }) => {
  const { id, description, amount } = transaction;
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount > 0 ? "+" : "-";
  return (
    <Paper variant="outlined">
      <ListItem
        alignItems="flex-start"
        className={amount > 0 ? "plus" : "minus"}
      >
        <ListItemText>{description}</ListItemText>

        <ListItemSecondaryAction>
          <IconButton
            onClick={() => deleteTransaction(id)}
            edge="start"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
        <ListItemText>
          Rs.{sign}
          {Math.abs(amount)}
        </ListItemText>
      </ListItem>
    </Paper>
  );
};
