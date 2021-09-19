const Controller = ({ coordinates, setCoordinates, dimensions, direction, setDirection}) => {

  const maxX = dimensions.width - 1;
  
  const maxY = dimensions.height - 1;

  const turnRight = () => {
    switch (direction) {
      case 'right':
        setDirection('down');
        break;
      case 'down':
        setDirection('left');
        break;
      case 'left':
        setDirection('up');
        break;
      case 'up':
        setDirection('right');
        break;
    }
  }

  const moveForward = () => {
    if (direction === 'right' && coordinates.x < maxX) {
      setCoordinates({ ...coordinates, x: coordinates.x + 1 });
    } else if (direction === 'down' && coordinates.y < maxY) {
      setCoordinates({ ...coordinates, y: coordinates.y + 1 });
    } else if (direction === 'left' && coordinates.x > 0) {
      setCoordinates({ ...coordinates, x: coordinates.x - 1 });
    } else if (direction === 'up' && coordinates.y > 0) {
      setCoordinates({ ...coordinates, y: coordinates.y - 1 });
    } else {
      turnRight();
    }
  }

    return (
      <div>
        <button onClick={turnRight}>Turn right</button>
        <button onClick={moveForward}>Move forward</button>
      </div>
    )
}

export default Controller;