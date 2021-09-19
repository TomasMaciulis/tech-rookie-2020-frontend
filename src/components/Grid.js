import Cell from "./Cell";

const Grid = ( {width, length, direction, coordinates} ) => {
    return (
        <table>
          <tbody>
            {[...Array(width).keys()].map( (y) => {
              return (
                <tr id = {y}>
                {[...Array(length).keys()].map( (x) => {
                  if (x === coordinates.x && y === coordinates.y) {
                    return <Cell x = {x} y = {y} direction = {direction} />
                  } else {
                    return <Cell x = {x} y = {y} />
                  }
                })}
                </tr>
              )
            })}
          </tbody>
        </table>
      );
}

export default Grid;