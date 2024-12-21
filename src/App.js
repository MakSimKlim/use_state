//import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Persone from './Persone';
import Item from './Item';
import Modal from './Modal';
import Tasklist from './tasklist/Tasklist';

function App() {
  return (
    <div className="App">
      <Counter/>  <hr/>
      <Persone/>  <hr/>
      <Item />    <hr/>
      <Modal/>    <hr/>      
      <Tasklist />
    </div>
  );
}

export default App;
