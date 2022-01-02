// import logo from './logo.svg';
import './App.css';
import myImage from './imageInSrc.jpg'

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
          <h1 className="title red">Imoleayo Adebanjo</h1>

          <div><img src={myImage} alt='foodimage' width='400' height='400'/></div>

          <div><img src="/imageInPublic.jpg" alt='foodimage'/></div>
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
