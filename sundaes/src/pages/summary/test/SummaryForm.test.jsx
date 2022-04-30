import { render, screen, fireEvent } from "@testing-library/react"
import {SummaryForm} from "../SummaryForm"

test("Checkbox disables/enables button", () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole("checkbox", { name: "I agree to Terms and Conditions" })
    const button = screen.getByRole("button", { name: "Confirm order" })

    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()

    //first click enables button
    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
    expect(button).toBeEnabled()

    //second click disables button
    fireEvent.click(checkbox)

    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()

})