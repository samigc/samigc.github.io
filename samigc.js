import React from 'react';
import ReactDOM from 'react-dom';
import { Typography, List, ListItem } from '@material-ui/core';

const App = () => {
  return (
    <div className="container">
      <Typography variant="h1" component="h1">
        My Webpage
      </Typography>
      <List>
        <ListItem>My Curriculum</ListItem>
        <ListItem>/my portfolio</ListItem>
      </List>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
