import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import MerchDashboard from './Components/MerchDashboard/MerchDashboard.js';

function App() {
  const [flaskGreeting, setFlaskGreeting] = useState("");

  useEffect(()=>{
    try {
      fetch(process.env.REACT_APP_API_URL)
      .then((response)=> response.json())
      .then((data)=>setFlaskGreeting(data.flaskMessage));
    } catch (err) {
      console.log(err);
    }
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello from react!
         <br/>
          {flaskGreeting}
        </p>
        <MerchDashboard />
      </header>
    </div>
  );
}

export default App;
