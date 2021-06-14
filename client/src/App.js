import './App.css';
import store from './reducer/store';
import { Provider } from 'react-redux';
import TopNav from '../src/components/topNav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
     <TopNav/>

      </Provider>
    </div>
    )}
  


    export default App;






