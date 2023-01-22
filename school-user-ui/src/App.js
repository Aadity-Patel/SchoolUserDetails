import './App.css';
import UserButton from './components/UserButton';

function App() {
  return (
    <div className="App">
      <UserButton buttonText={'Add a New User'} onClick = {() => console.log('Hello User!!!')} />
    </div>
  );
}

export default App;
