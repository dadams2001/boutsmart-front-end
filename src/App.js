import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [flaskGreeting, setFlaskGreeting] = useState("");

  useEffect(()=>{
    try {
      axios({
        method: "GET",
        url: process.env.REACT_APP_API_URL
      }).then((response)=>{
        const res=response.data
      setFlaskGreeting(res.flaskMessage);
      })
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
