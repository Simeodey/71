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
      <div className="container is-fullhd">
        <div>
          <Doc title = "Terms and Conditions" content = {text} ></Doc>
        </div>
      </div>
    </div>
  );
}

export default App;
