import { render } from "@testing-library/react";
import { UserInputView } from "../views/UserInputView";

function renderUserInputView() {
    return render(<UserInputView/>)
}

describe("<UserInputView />", () => {
    test("should display a blank text field for user input", async() => {
        const userInputView = renderUserInputView()
        let userfield = userInputView.getByPlaceholderText("Enter Github username")

        expect(userfield).toBeInTheDocument()
        expect(userfield).toBeEmptyDOMElement()
    })
})


export { };
