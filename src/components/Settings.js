const Settings = ({ setDimensions, dimensions, coordinates, setCoordinates}) => {

  const minValue = 1;

  const maxValue = 25;

  const componentStyle = {
    width: '8em',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.5em'
  }

  const inputStyle = {
    width: '4em',
  }

  const input = (id, value, onChange) => {
    return <input id = {id} type = 'number' min = {minValue} max = {maxValue} style = {inputStyle} value = {value} onChange = {onChange}/>
  }

  const parseInput = (input) => {
    let value = Number.parseInt(input.target.value);

    if (!value || value < minValue) {
      value = minValue;
    } else if (value > maxValue) {
      value = maxValue;
    }

    return value;
  }

  const updateWidth = (input) => {
    const width = parseInput(input);

    setDimensions({ ...dimensions, width: width });

    if (coordinates.x > width - 1) {
      setCoordinates({ ...coordinates, x: width - 1 })
    }
  }

  const updateHeight = (input) => {
    const height = parseInput(input);

    setDimensions({ ...dimensions, height: height });
    
    if (coordinates.y > height - 1) {
      setCoordinates({ ...coordinates, y: height - 1 })
    }
  }

  return (
    <div style = {componentStyle}>
      {input('width', dimensions.width, updateWidth)}
      {input('height', dimensions.height, updateHeight)}
    </div>
  );
}

export default Settings;