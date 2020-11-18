import {
  Fab,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Tooltip } from "@material-ui/core";

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const handleAmountChange = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const onSubmitAdd = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: new Date().getTime(),
      description: description,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setAmount("");
    setDescription("");
  };
  const onSubmitMinus = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: new Date().getTime(),
      description: description,
      amount: -amount,
    };

    addTransaction(newTransaction);
    setAmount("");
    setDescription("");
  };

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h6">ADD TRANSACTION</Typography>
          <FormControl
            required={true}
            onSubmit={onSubmitAdd && onSubmitMinus}
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="description">Description</InputLabel>
            <OutlinedInput
              id="description"
              onChange={handleDescriptionChange}
              value={description}
              labelWidth={60}
              type="text"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            required={true}
            onSubmit={onSubmitAdd && onSubmitMinus}
            fullWidth
            variant="outlined"
          >
            <InputLabel htmlFor="amount">Rs. Amount</InputLabel>
            <OutlinedInput
              id="amount"
              onChange={handleAmountChange}
              value={amount}
              type="number"
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid justify="flex-end" item container spacing={2}>
          <Tooltip title="Add Income" aria-label="Income">
            <Fab className="pd" onClick={onSubmitAdd} color="primary">
              <AddIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Add Expense" aria-label="Expense">
            <Fab className="pd" onClick={onSubmitMinus} color="secondary">
              <RemoveIcon />
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};
