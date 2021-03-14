import React, { useState, useEffect } from 'react';
import { Container, Grow } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { getLists } from './actions/lists';
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Lists from "./Components/Lists/Lists";

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLists());
  }, [currentId, dispatch])


  return (
    <Container maxWidth="lg">
      <Header />
      <Grow in>
        <Container>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Lists setCurrentId={setCurrentId} />
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
