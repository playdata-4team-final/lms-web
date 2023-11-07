
import { Provider } from 'react-redux';
import './App.css';
import store from "./components/global/app/store";
import GlobalRoutes from "./components/global/routes/GlobalRoutes";
import Login from "./components/pages/login/Login";

const App = () => {
  return (
      <Provider store={store}>
        <GlobalRoutes/>
      </Provider>
  );
}


export default App;
