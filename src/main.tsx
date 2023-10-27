import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Maze from './utils/maze.ts'
import * as THREE from 'three';

export const maze = new Maze(10, 10);
maze.generateMaze();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
