import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decnumber, incnumber } from './actions/Action';

function App() {
  const [count, setCount] = useState(0);
  const [sendCount, setSendCount] = useState(0);

  const myState = useSelector((state) => state.changenumber);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setCount(parseInt(e.target.value));
  };

  const handleButtonClick = () => {
    setSendCount(parseInt(count));
  };

  return (
    <>
      <div className='container'>
        <h1>Enter number</h1>
        <div className='input-wrapper'>
          <input
            type='text'
            id='nameInput'
            onChange={handleInputChange}
            value={count}
          />
          <button onClick={handleButtonClick}>Click to save Count</button>
        </div>
      </div>

      <div className='container'>
        <div className='inccontainer'>
          <div className='increment'>
            <button onClick={() => dispatch(decnumber(sendCount))}>-</button>
            <h4>{myState}</h4>
            <button onClick={() => dispatch(incnumber(sendCount))}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
