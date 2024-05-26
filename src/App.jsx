import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "./UserContext";
import Card from "./Card";
import TotalCart from "./TotalCart";
import { Provider } from "react-redux";
import store from "./reduxStore";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <DataProvider>
            <Card></Card>
            <TotalCart></TotalCart>
          </DataProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
