import {render, screen, fireEvent} from '@testing-library/react'
import App, { replaceCamelWithSpaces } from './App'

test('Button has correct inital color', () => {
  render(<App/>)

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})

  //expects the background to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  //click button
  fireEvent.click(colorButton)

  //expects the background to be blue
  expect(colorButton).toHaveStyle({backgroundColor:'MidnightBlue'})

  //expects the button to say Change to red

  expect(colorButton).toHaveTextContent('Change to Medium Violet Red')

})

test('button disa bled on checkbox checked', () => {
  render(<App/>)
  const button = screen.getByRole('button', {name: 'Change to Midnight Blue'})
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  expect(button).toBeEnabled()

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})

test('use web color gray', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: 'Change to Midnight Blue'})
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({backgroundColor: "gray"})
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({backgroundColor: "MediumVioletRed"})

})

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letter',  () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('works for one capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('works for multilple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})