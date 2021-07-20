
import Home from "./components/Home"
import DetailProduct from "./components/DetailProduct"
import EditProduct from "./components/EditProduct"
import {Router} from "@reach/router"

function App() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <DetailProduct path="/:product_id" />
        <EditProduct path="/:product_id/edit" />
      </Router>
    </div>
  );
}

export default App;
