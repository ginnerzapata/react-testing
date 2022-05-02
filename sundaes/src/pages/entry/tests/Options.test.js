import { render, screen } from "@testing-library/react"
import { Options } from "../Options"

test("Displays images for each scoop from the server", async () => {
    render(<Options optionType="scoops" />)
    
    //find images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i })
    expect(scoopImages).toHaveLength(2)

    //confirm alt text of images
    const altText = scoopImages.map(element => element.alt)
    expect(altText).toEqual(["chocolate scoop", "vanilla scoop"])
})

test("Displays image for each tooping from the server", async () => {
    render(<Options optionType="toppings" />)

    const toppingImages = await screen.findAllByRole("img", { name: /topping$/i })
    expect(toppingImages).toHaveLength(3)

    const altText = toppingImages.map(element => element.alt)
    expect(altText).toEqual(["Cherries topping", "M&Ms topping", "Hot fudge topping"])
})