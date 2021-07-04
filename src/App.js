import './App.css';
import Contain from './Contain';
function App() {
  return (
    <>
    <div className="top_box">
        <img src="http://recsonbhadra.ac.in/assets/img/Name11.png" alt="no" />
        <h6 style={{color:'white'}}>An AICTE Approved Government Engineering College, Affiliated to AKTU Lucknow</h6>
    </div>
    <div className="top_box_two">
      <button ><a href="http://recsonbhadra.ac.in/">🏠 HOME</a></button>
    </div>
    <Contain/>
    </>
  );
}

export default App;
