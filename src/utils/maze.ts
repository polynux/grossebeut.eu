export type Cell = {
  visited: boolean;
  walls: {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
  };
};

export default class Maze {
  grid: Cell[][];
  stack: { row: number; col: number }[];
  rows: number;
  cols: number;

  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.grid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        visited: false,
        walls: { top: true, right: true, bottom: true, left: true }
      }))
    );
    this.stack = [];
  }

  generateMaze() {
    let current = this.grid[0][0];
    current.visited = true;
    this.stack.push({ row: 0, col: 0 });

    while (this.stack.length > 0) {
      const { row, col } = this.stack.pop()!;
      current = this.grid[row][col];
      const neighbors = this.getUnvisitedNeighbors(row, col);

      if (neighbors.length > 0) {
        this.stack.push({ row, col });
        const { row: nextRow, col: nextCol } = neighbors[Math.floor(Math.random() * neighbors.length)];
        this.removeWalls(current, this.grid[nextRow][nextCol], row - nextRow, col - nextCol);
        this.grid[nextRow][nextCol].visited = true;
        this.stack.push({ row: nextRow, col: nextCol });
      }
    }
  }

  getUnvisitedNeighbors(row: number, col: number): { row: number; col: number }[] {
    const neighbors: { row: number; col: number }[] = [];
    if (row > 0 && !this.grid[row - 1][col].visited) neighbors.push({ row: row - 1, col });
    if (row < this.rows - 1 && !this.grid[row + 1][col].visited) neighbors.push({ row: row + 1, col });
    if (col > 0 && !this.grid[row][col - 1].visited) neighbors.push({ row, col: col - 1 });
    if (col < this.cols - 1 && !this.grid[row][col + 1].visited) neighbors.push({ row, col: col + 1 });
    return neighbors;
  }

  removeWalls(current: Cell, next: Cell, rowDiff: number, colDiff: number) {
    if (rowDiff === 1) {
      current.walls.top = false;
      next.walls.bottom = false;
    } else if (rowDiff === -1) {
      current.walls.bottom = false;
      next.walls.top = false;
    }
    if (colDiff === 1) {
      current.walls.left = false;
      next.walls.right = false;
    } else if (colDiff === -1) {
      current.walls.right = false;
      next.walls.left = false;
    }
  }
}
