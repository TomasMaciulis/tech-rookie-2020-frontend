const Settings = ({ setDimensions, dimensions, coordinates, setCoordinates}) => {
  const divStyle = {
    width: '8em',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.5em'
  }

  const textStyle = {
    width: '4em',
  }

  const input = (id, value, onChange) => {
    return <input id = {id} type = 'number' min = '1' max = '25' style = {textStyle} value = {value} onChange = {onChange}/>
  }

  const updateWidth = (val) => {
    const width = Number.parseInt(val.target.value);

    setDimensions({ ...dimensions, width: width });

    if (coordinates.x > width - 1) {
      setCoordinates({ ...coordinates, x: width - 1 })
    }
  }

  const updateHeight = (val) => {
    const height = Number.parseInt(val.target.value);

    setDimensions({ ...dimensions, height: height });

    if (coordinates.y > height - 1) {
      setCoordinates({ ...coordinates, y: height - 1 })
    }
  }

  return (
    <div style = {divStyle}>
      {input('width', dimensions.width, updateWidth)}
      {input('height', dimensions.height, updateHeight)}
    </div>
  );
}

export default Settings;