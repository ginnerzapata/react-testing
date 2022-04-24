import {render, screen, fireEvent} from '@testing-library/react'
import App from './App'

test('Button has correct inital color', () => {
  render(<App/>)

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  //expects the background to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  //click button
  fireEvent.click(colorButton)

  //expects the background to be blue
  expect(colorButton).toHaveStyle({backgroundColor:'blue'})

  //expects the button to say Change to red

  expect(colorButton.textContent).toBe('Change to red')

})

test('button disabled on checkbox checked', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox')
  expect(button).toBeEnabled()

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})