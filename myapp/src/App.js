import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <Typography variant="h1" component="h1">
        My Webpage
      </Typography>
      <List>
        <ListItem>My Curriculum</ListItem>
        <ListItem>My portfolio</ListItem>
      </List>
    </div>
  );
}

export default App;
