import './App.css';
import React, {useState} from 'react'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1")
}

function App() {
  const [currentColor, setCurrentColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)
  const nextColor = currentColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'
  return (
    <div>
      <button disabled={disabled} onClick={() => setCurrentColor(nextColor)} style={{background: disabled?"gray":currentColor}}>Change to {replaceCamelWithSpaces(nextColor)}</button>
      <label htmlFor="disable-button-checkbox">
        Disable button
        <input id='disable-button-checkbox' checked={disabled} type="checkbox" onChange={e => setDisabled(e.target.checked)}/></label>
    </div>
  )
}

export default App;
