import TodoList from "./Components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css'
// import Card from './Components/Card';
import CreateTask from "./Modal/CreateTask";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<TodoList/>}/>
      </Routes>
    </Router>
    {/* <TodoList/> */}
    <CreateTask/>
    {/* <Card/> */}
    </>
  );
}

export default App;
