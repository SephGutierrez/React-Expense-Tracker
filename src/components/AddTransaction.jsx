import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  h3: {
    fontSize: 32,
    textAlign: 'center',
  }
})

export const AddTransaction = () => {

  const {addTransaction} = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.h3}>Add new Transaction</Typography>
      <hr />
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense , positive - income)
            </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
          </div>
          <button className="btn">Add Transaction</button>
        </form>
    </>
  )
}
