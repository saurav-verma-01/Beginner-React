// import List from "./List";
// import MyName from "./MyName";
import "./App.css";
// import { TodoClass } from "./TodoClass";
import { DetailsClass } from "./DetailsClass";
import MyName from "./MyName";

const App = () => {
  return (
    <div className="app">
      {/* <h1>Todo List</h1> */}
      {/* <DetailsClass /> */}
      <MyName name="Saurav Verma" age={26}>
        <h3 className="green-text">
          I am Learing Frontend Development Using React and Javascript to get a
          Job and build a Career as a Developer.
        </h3>
      </MyName>
      <hr />
      <MyName name="Tushar Gautam" age={25}>
        <h3 className="purple-text">
          I am working in a big 4 consulting firm and learning skills to become
          a Analyst.
        </h3>
      </MyName>
      <hr />
      <DetailsClass name="Shubham" age={30}>
        <h3 className="red-text">I want to be a Villian.</h3>
      </DetailsClass>
    </div>
  );
};

export default App;
