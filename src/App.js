import React, {useState, useEffect} from 'react';
import {FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import {VscDebugRestart} from "react-icons/vsc";
import Counter from './components/Counter';

function App() {
  const audio = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav");
  
  const [br, setBr] =useState({
    name: "break",
    minute: 5,
    second: 0
  });
  const [session, setSession] =useState({
    name: "session",
    minute: 25,
    second: 0});
  const [remainder, setRemainder] =useState({
    name: "session",
    minute: 25,
    second: 0});
  
  const [play, setPlay]=useState(false);
 
  useEffect(() => {
    play && showTime(remainder, setRemainder);
    }, [play, remainder, setRemainder]);

  const showTime=(r, setR)=>{
    
    setTimeout(() => {
      if(r.second<3 && r.minute===0){
        console.log("end");
        reset(r.name);
        audio.play();

      }
      else if(r.second===0){
        setR(remain=>{
          return({
            ...remain,
            minute: remain.minute-1,
            second: 59
          })
        })          
      }
      else{
        setR((remain)=>{
          return({
            ...remain,
            second: remain.second -1
          })
        });
      }}, 1000);
  }
  

  const reset=(name)=>{
    if(name === "break"){
      setRemainder({...session});
    }
    else {
      setRemainder({...br});
    }
  }
  
  const handleClick = (e) =>{
    e.preventDefault();
    setPlay(play =>!play);
    setRemainder({...session});
  }
  const handleRestart = (e) =>{
    e.preventDefault();
    console.log(br);
    console.log(session);
    if (play===false){
      setSession({
        name: "session",
        minute: 25,
        second: 0
      });
      setBr({
        name:"break",
        minute: 5,
        second: 0
      });

    } 
  }
  const formatSecond=(s)=>{
    if(s===60){
      return "00";
    }
    else if(s <10){
      return `0${s}`;
    }
    else{
      return s;
    }
  }

  return (
    <div className="App">
      <h1 className="title">25 + 5 CLOCK</h1>
      <div className="setTime">
        <Counter name="Break Length" count={br} setCount={setBr} play={play} />
        <Counter name="Session Length" count={session} setCount={setSession} play={play} />
      </div>
      <div className={remainder.minute<=1 ? "break red": "break normal"}>
        <h3>Break</h3>
        <h1>{!play ?`${session.minute} : `+formatSecond(session.second) : `${remainder.minute} : `+formatSecond(remainder.second)}</h1>
      </div>
      <div className="controler">
        <div className="icon c" onClick={handleClick}><FaPlayCircle size={25}/></div>
        <div className="icon c" onClick={handleClick}><FaPauseCircle size={25} /></div>
        <div className="icon c" onClick={handleRestart}><VscDebugRestart size={25} /></div>

      </div>
      
      <p>by Thi Huyen Hoang</p>
      
    </div>
  );
}

export default App;
