import { useEffect, useState } from "react";
import "./App.css";
import Doc from "./Doc";

function App(){
 const [text,setText] = useState("");

  useEffect(()=>{
    fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
    .then(response=>response.text())
    .then(text=>{
      setText(text);
    })
    .catch(console.error)  },[]);
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <Doc title = "Terms and Conditions" content = {text} ></Doc>
        </div>
      </div>
    </div>
  );
}

export default App;
