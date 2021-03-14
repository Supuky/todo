import React from "react";
import { FormControlLabel,  FormGroup, IconButton, Paper } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { deleteList } from "../../../actions/lists";

const List = ({ list, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
 
  return (
    
      <Paper className={classes.paper}>
        <FormGroup className={classes.list} >
          <FormControlLabel
            control={<Checkbox color="default" />}
            label={list.list}
          />
          <div className={classes.buttons}>
            <IconButton 
              className={classes.edit__button}  
              onClick={() => setCurrentId(list._id)}  
            >
              <EditIcon/>
            </IconButton>
            <IconButton 
              className={classes.delete__button} 
              onClick={() => dispatch(deleteList(list._id))}
            >
              <DeleteIcon/>
            </IconButton>
          </div>
        </FormGroup>
      </Paper>
  );
};

export default List;
