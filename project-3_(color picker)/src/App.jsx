import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  // console.log("sourabh");
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button colorVal="red" setColor={setColor} />
          <Button colorVal="blue" setColor={setColor} />
          <Button colorVal="pink" setColor={setColor} />
          <Button colorVal="purple" setColor={setColor} />
          <Button colorVal="grey" setColor={setColor} />
        </div>
      </div>
    </div>
  );
};

export default App;
