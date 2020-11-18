import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "./../context/GlobalState";
import { Grid, List, Typography } from "@material-ui/core";

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <Grid container direction="column" spacing={2}>
      <Typography variant="h6">TRANSACTION HISTORY</Typography>
      <Grid item>
        <List className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
