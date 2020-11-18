import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";
import { Grid, Paper, Typography } from "@material-ui/core";
import "./AccountSummary.css";
import numeral from "numeral";

export const AccountSummary = () => {
  const { transactions } = useContext(GlobalContext);

  // Getting Every Transaction Amount
  const transactionAmount = transactions.map(
    (transaction) => transaction.amount
  );
  // Calculating Income:
  const income = transactionAmount
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc = acc + amount), 0);

  // Calculating Expense:
  const expense = transactionAmount
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => (acc = acc + amount), 0);
  // Calculating Balance
  const balance = transactionAmount.reduce(
    (acc, eachtransaction) => (acc = acc + eachtransaction),
    0
  );
  return (
    <Grid container justify="center" spacing={5} style={{marginTop:'60px'}}>
      <Grid item>
        <Paper elevation={3} className="paper balance">
          <Typography variant="h4">Balance</Typography>
          <Typography variant="h6">
            Rs.{numeral(balance).format("0,0")}
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={3} className="paper income">
          <Typography variant="h4">Income</Typography>
          <Typography variant="h6">
            Rs.{numeral(income).format("0,0")}
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={3} className="paper expense">
          <Typography variant="h4">Expense</Typography>
          <Typography variant="h6">
            Rs.{numeral(expense).format("0,0")}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
