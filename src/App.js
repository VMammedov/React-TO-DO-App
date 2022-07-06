import logo from './logo.svg';
import './App.css';
import MainComponent from './Components/MainComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='me-5'>
        <h1 className='display-5'>TO-DO APP</h1><span className='text-muted'>by Vusal</span>
      </div>
      <MainComponent />
    </div>
  );
}

export default App;
