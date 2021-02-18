import React from 'react';
import Button from "./components/Button";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button label="button A" color="red"/>
      <Button label="button B" color="green"/>
      <Button label="button C" color="yellow"/>
      <Button label="button D" color="blue"/>
      <Paragraph title="this is the title" content="this is the content"/>
    </div>
  );
}

export default App;
