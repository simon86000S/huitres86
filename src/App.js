import "./App.css";
import Huitres from "./components/Huitres/Huitres";
import Delivery from "./components/Delivery/Delivery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const store = configureStore({ history });
  return (
    <div className="App">
      <Provider store={store}>
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/huitre" element={<Huitres></Huitres>}>
            {" "}
          </Route>
          <Route path="/delivery" element={<Delivery></Delivery>}>
            {" "}
          </Route>
        </Routes>
      </Router>
      </Provider> 
    </div>
  );
}

export default App;
