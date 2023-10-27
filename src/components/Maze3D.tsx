import Maze from '../utils/maze';

const Maze3D = ({ maze }: {maze: Maze}) => {
  const cellSize = 1;  // Define the size of each cell
  const wallHeight = 1;  // Define the height of the walls

  return (
    <>
      {maze.grid.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <group position={[cellIndex * cellSize, 0, rowIndex * cellSize]} key={cellIndex}>
            {cell.walls.top && (
              <mesh position={[0, wallHeight / 2, -cellSize / 2]} >
                <boxGeometry args={[cellSize, wallHeight, 0.1]} />
                <meshStandardMaterial color="blue" />
              </mesh>
            )}
            {cell.walls.right && (
              <mesh position={[cellSize / 2, wallHeight / 2, 0]} >
                <boxGeometry args={[0.1, wallHeight, cellSize]} />
                <meshStandardMaterial color="red" />
              </mesh>
            )}
            {/* Repeat for bottom and left walls if necessary */}
            {cell.walls.bottom && (
              <mesh position={[0, wallHeight / 2, cellSize / 2]} >
                <boxGeometry args={[cellSize, wallHeight, 0.1]} />
                <meshStandardMaterial color="green" />
              </mesh>
            )}
            {cell.walls.left && (
              <mesh position={[-cellSize / 2, wallHeight / 2, 0]} >
                <boxGeometry args={[0.1, wallHeight, cellSize]} />
                <meshStandardMaterial color="yellow" />
              </mesh>
            )}
          </group>
        ))
      )}
    </>
  );
};

export default Maze3D;

// Usage: <Maze3D maze={maze} />

