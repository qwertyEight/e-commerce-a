import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AllInboxIcon from "@material-ui/icons/AllInbox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  icon: {
    fontSize: 50,
  },
}));

export default function AllOrders() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <Paper className={classes.paper}>
        <AllInboxIcon className={classes.icon} color="primary" />
        <h1>All Orders</h1>
      </Paper>
    </Grid>
  );
}