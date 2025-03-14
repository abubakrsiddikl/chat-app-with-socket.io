import LeftSide from "./components/Home/LeftSide/LeftSide";
import Logout from "./components/Home/LeftSide/Logout";
import RightSide from "./components/Home/RightSide/RightSide";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Logout></Logout>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div>
    </>
  );
}

export default App;
