import logo from './logo.svg';
import './App.css';
import liff from '@line/liff';

function liffApi() {
  liff.init({ liffId: "1655990007-5q3g5j7z" })
    .then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      }
      console.log(liff.getDecodedIDToken().email)
    })
    .catch((err) => {
      console.log(err);
    });
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <div className="App-link" onClick={liffApi()}>

        </div>
      </header>
    </div>
  );
}

export default App;
