import { css } from "@css";
import Canva from "./components/Canvas";
import { maze } from "./main";
import Maze3D from "./components/Maze3D";

function App() {
  return (
    <>
      <div
        className={css({
          height: "100vh",
        })}
      >
        <Canva>
          <Maze3D maze={maze} />
          <></>
        </Canva>
      </div>
    </>
  );
}

export default App;
