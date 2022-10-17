import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [flaskGreeting, setFlaskGreeting] = useState("");

  useEffect(()=>{
    console.log(process.env.REACT_APP_API_URL + "/hello");
    try {
      fetch(process.env.REACT_APP_API_URL + "/hello").then((res)=>{
        res.json().then((data) => {
          console.log(data)
          // setFlaskGreeting(data)
        })
      });
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
        </p>
        <p>
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
