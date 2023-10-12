import { css } from "@css";
import Canva from "./components/Canvas";
import Box from "./components/Box";

function App() {
  return (
    <>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        })}
      >
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <h1
        className={css({
          textAlign: "center",
          fontSize: "4rem",
          fontWeight: "bold",
          color: "slate.500",
        })}
      >
        Vite + React
      </h1>
      <div className="card">
        <p
          className={css({
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "red.600",
          })}
        >
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p
        className={css({
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "slate.500",
        })}
      >
        Click on the Vite and React logos to learn more
      </p>
      <div
        className={css({
          height: "500px",
        })}
      >
        <Canva>
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canva>
      </div>
    </>
  );
}

export default App;
