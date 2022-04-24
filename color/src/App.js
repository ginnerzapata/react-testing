import './App.css';
import React, {useState} from 'react'

function App() {
  const [currentColor, setCurrentColor] = useState('red')
  const [disabled, setDisabled] = useState(false)
  const nextColor = currentColor === 'red' ? 'blue' : 'red'
  return (
    <div>
      <button disabled={disabled} onClick={() => setCurrentColor(nextColor)} style={{background: currentColor}}>Change to {nextColor}</button>
      <label htmlFor="disable-button-checkbox">
        Disable button
        <input id='disable-button-checkbox' checked={disabled} type="checkbox" onChange={e => setDisabled(e.target.checked)}/></label>
    </div>
  )
}

export default App;
