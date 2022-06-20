import TodoWrapper from "./components/todo";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap"
import Test1 from "./components/ajax1/Test1";
import Post from "./components/post";
import Counter from "./components/counter";

function App() {
    return (
        <>
            {/*<button>Test Button</button>*/}
            {/*<TodoWrapper/>*/}
            <Counter/>
            <Counter/>
            <Counter/>
            <Post/>

        </>
    );
}

export default App;
