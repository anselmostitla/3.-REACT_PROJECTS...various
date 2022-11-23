import {React, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
// import { UserCard } from "./Greeting";
// import Product, {NavBar} from "./Product";
// import { Button } from "./button";
// import { TaskCard } from "./Task";
// import { Saludar } from "./Saludar";
// import { Button } from "./button";
// import { Posts } from "./Post";
// import {VscBug} from "react-icons/vsc"

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  let [mensaje, setMensaje] = useState("");
  useEffect(function(){
    console.log("render")
  },[])

  let [counter, setCounter] = useState(0)

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)}/>
      <button onClick={()=>{
        console.log(mensaje)
      }}>
        Save
      </button>
      <hr/>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>
        Incrementar
      </button>
    </div>
  )
}

root.render(
  <>
    <Counter/>
    {/* <Counter></Counter> */}
  </>
);
