import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="Container">
      <h1>Task Tracker</h1>

     {/* Number or boolean should be in curly braces*/ }
      <Header/>
    </div>
  );
}

//* Class component was used  but functional is more practicl
/* class App extends React.Component {
  render() {
    return <h1>Hello from Component class</h1>;
  }
} */

export default App;
