import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import List from "./List/List";
import useStyles from "./styles";

const Lists = ({ setCurrentId }) => {
  const lists = useSelector((state) => state.lists);
  const classes = useStyles();

  console.log(lists);

  return !lists.length ? (
    <CircularProgress />
  ) : (
      <Grid className={classes.lists} container  spacing={2}>
        {
            lists.map((list) => (
                <Grid  className={classes.item} key={list._id} item  >
                    <List list={list} setCurrentId={setCurrentId} />
                </Grid>
            ))
        }
      </Grid>
  );
};

export default Lists;
