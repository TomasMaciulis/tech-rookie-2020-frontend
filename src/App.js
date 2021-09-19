import './App.css';
import Controller from './Components/Controller';
import Grid from './Components/Grid';
import { useState } from 'react';
import Settings from './Settings';

function App() {

  const [dimensions, setDimensions] = useState({ width: 5, height: 5 })

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const [direction, setDirection] = useState('right');

  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2em',
    flexDirection: 'column',
  }

  return (
    <div style = {appStyle}>
      <Settings 
        setDimensions = {setDimensions}
        dimensions = {dimensions}
        coordinates = {coordinates}
        setCoordinates = {setCoordinates}
      />
      <Controller 
        coordinates = {coordinates}
        setCoordinates = {setCoordinates}
        dimensions = {dimensions}
        direction = {direction}
        setDirection = {setDirection}
      />
      <Grid
        length = {dimensions.width}
        width = {dimensions.height}
        coordinates = {coordinates}
        direction = {direction}
      />
    </div>
  );
}

export default App;
