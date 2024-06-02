import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: color }}
            >
              Default
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
          </div>
        </div>
        <h1 className="bg-green-600 text-center text-4xl px-4 py-4 rounded-full">Background Color Changer</h1>
      </div>
    </>
  );
}

export default App;