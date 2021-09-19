import Arrow from './arrow.svg';

const Cell = ({x, y, direction}) => {
  
  const cellStyle = {
    border: '1px solid black',
    height: '3em',
    width : '3em',
  }

  const arrowStyle = {
    width : '3em',
    height: '2.7em',
  }

  if (direction) {
    return (
      <td id={`${x}-${y}`} style={cellStyle}>
        <img className={`arrow-${direction}`} src={Arrow} style={arrowStyle} alt="arrow" />
      </td>
    );
  }
  else {
    return ( <td id={`${x}-${y}`} style = {cellStyle} /> );
  }
}

export default Cell;