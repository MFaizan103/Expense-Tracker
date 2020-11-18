import React from "react";
import { Header } from "./components/Header";
import { AccountSummary } from "./components/AccountSummary";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";
import { Grid } from "@material-ui/core";
import firebase from "./firebase";

// COMPONENTS

function App() {
  const msg = firebase.messaging();
  msg.getToken().then((token) => console.log(token));

  return (
    <div>
      <Grid alignContent="center" container direction="column" spacing={5}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item xs={12} s={12} md={6} lg={6}>
          <AccountSummary />
        </Grid>
        <Grid item xs={12} s={12} md={6} lg={6}>
          <TransactionHistory />
        </Grid>
        <Grid item xs={12} s={12} md={6} lg={6}>
          <AddTransaction />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
