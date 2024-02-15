import './App.css';
import { useState } from 'react';
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import { decnumber,incnumber } from './actions/Action';

function App() {
  const [count, setcount] = useState(0)
  const [sendcount,setSendcount] = useState(0);

  const mystate = useSelector((state) => state.changenumber);
  const dispatch = useDispatch();

  const handleInputChange =(e)=>{
    setcount(parseInt(e.target.value))
  }

  const handleButtonClick =()=>{
    setSendcount(parseInt(count));

  }
  return (
    <>
    <div>
    <input
          type="text"
          id="nameInput"
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Display Name</button>
    </div>
    <div className='inccontainer'>
    <div className='increment'>
      <button onClick={() => dispatch(decnumber(sendcount))}>
        -
      </button>
      <h4>
        {mystate}
      </h4>
      <button onClick={() => dispatch(incnumber(sendcount))}>
        +
      </button>
      </div>
    </div>
    
    </>
  );
}

export default App;
