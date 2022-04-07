import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from 'react';
import DisplayList from './components/DisplayList';
import InputForm from './components/InputForm';
import RequestHandler from './components/RequestHandler';
import axios from 'axios';

function App() {
  const words = ["hey", "who", "how"];

  const data = ["start"];

  const [ wordList, setWordList ] = useState(data);

  const [ fetchedData, setFetchedData ] = useState("");

  const [ counter, setCounter ] = useState(0);

  //const valuesArr = JSON.parse(fetchedData);

  const addTask = (userInput) => {
    let copy = [...wordList];
    copy = [...copy, userInput];
    console.log(copy);
    setWordList(copy);
  }

  const fetchData = () => {
    return axios
        .get("https://randomuser.me/api")
        .then(({ data }) => {
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        });
  };

  useEffect(() => {
    fetchData().then((data) => {
      setFetchedData(data);
      console.log("Data is Fetched.");
      console.log(data);
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {/*(<DisplayList words={words}/>
        <DisplayList words={wordList}/> */}
        <DisplayList words={wordList}/>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          >Increase counter</button>
          {counter}
        <pre>{fetchedData}</pre>
        <InputForm addTask={addTask}/>
      </header>

    </div>
  );
}

export default App;
