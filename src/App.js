import { useState } from 'react';
import './App.css';
import colorData from "./components/ColorOrgonizer/color-data.json";
import Colorlist from './components/ColorOrgonizer/colorlist';


function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <div className="App">
    <Colorlist colors={colors} onRemoveColor={id => {
      const newColors = colors.filter(color => color.id !== id);
      setColors(newColors);
    }} />;
    </div>
  );
}

export default App;
