import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Transaction } from './Transaction';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  h3: {
    fontSize: 32,
    textAlign: 'center',
  }
})


export const TransactionList = () => {
  const classes = useStyles()

  const {transactions} = useContext(GlobalContext);


  return (
    <>
      <Typography className={classes.h3}>History</Typography>
      <hr />
      <ul className='list'>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
         ))}
         
      </ul>
    </>
  )
}
 