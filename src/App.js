import {GlobalStyle} from "./style";
import Header from "./components/Header/Header";
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <div className="dell">
      </div>
    </Provider>
  );
}

export default App;
