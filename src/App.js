import './App.css';
import Contain from './Contain';
import Name11 from './Name11.png'
// import ''
function App() {
  return (
    <>
    <div className="top_box">
        <img src={Name11} alt="no" />
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
