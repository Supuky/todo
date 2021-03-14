import React, { useState, useEffect } from "react";
import { TextField, IconButton, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";
import { createList, updateList } from "../../actions/lists";

// GET THE CURRENT ID

const Form = ({ currentId, setCurrentId }) => {
  const [listData, setListData] = useState({ list: "" });
  const list = useSelector((state) => currentId ? state.lists.find((p) => p._id === currentId) : null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if(list) setListData(list);
  }, [list])
  
  const handleSubmit = (e) => {
    // ページ遷移をなくす
    e.preventDefault();
    
    if (currentId) {
      // update時、_idが存在している既にtodolistが存在しているとき
      dispatch(updateList(currentId, listData));
    } else {
      // dbへtodolistを送る
      dispatch(createList(listData));
    }
    // setCurrentId をnullにしないといけない
    setCurrentId(null);
    // addボタンを押したあと空の文字列にする
    setListData({ list: "" })
  };


  return (
    <Grid>
      <form className={classes.form} onSubmit={handleSubmit} autoComplete="off" noValidate >
        <TextField 
          className={classes.list__input}
          inputProps={{className: classes.input__under__line}}
          InputLabelProps={{className: classes.input__label}}
          name="list"  
          label="Add List"
          value={listData.list}
          onChange={(e) => setListData({ ...listData, list: e.target.value })}
        />
        <IconButton className={classes.add__button} type="submit"  >
          <AddIcon fontSize="large"/>
        </IconButton>
      </form>
    </Grid>
  );
};

export default Form;
