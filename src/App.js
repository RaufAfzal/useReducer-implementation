import Square from './Square';
import Input from './Input';
import './App.css';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <>
      <Square 
        colorValue={colorValue}
        hexValue = {hexValue}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue = {hexValue}
        setHexValue = {setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />    
    </>
  );
}

export default App;
