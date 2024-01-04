import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar onReset={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <AddItem />
      <List />
    </>
  );
};

export default App;
