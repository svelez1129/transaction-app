import './App.css';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  function addNewTransaction() {
    return
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit = {addNewTransaction}>
        <div className = "basic">
          <input type= "text" 
                  placeholder = {'+200 new apple tv'}
                  value= {name}
                  onChange = {ev => setName(ev.target.value)}/>
          <input type= "datetime-local"
                 value = {datetime}
                 onChange = {ev => setDatetime(ev.target.value)}/>
        </div>
        <div className = "description"> 
          <input type= "text" 
                 placeholder = {'description'}
                 value = {description}
                 onChange = {ev => setDescription(ev.target.value)}/>
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className = "transactions">
        <div className = "transaction">
          <div className = "left">
            <div className = "name">Apple TV</div>
            <div className = "description">needed new tv for family</div>
          </div>
          <div className = "right">
            <div className = "price red">-$500</div>
            <div className = "datetime">2024-07-01 15:45</div>
          </div>
        </div>
        <div className = "transaction">
          <div className = "left">
            <div className = "name">Side hustle</div>
            <div className = "description">sold youtube tutorials</div>
          </div>
          <div className = "right">
            <div className = "price green">+$500</div>
            <div className = "datetime">2024-07-01 15:45</div>
          </div>
        </div>
        <div className = "transaction">
          <div className = "left">
            <div className = "name">iphone</div>
            <div className = "description">needed iphone</div>
          </div>
          <div className = "right">
            <div className = "price red">-$500</div>
            <div className = "datetime">2024-07-01 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

