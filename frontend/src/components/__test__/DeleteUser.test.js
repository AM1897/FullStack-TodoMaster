import DeleteTodo from "../DeleteTodo";
import {fireEvent, render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<DeleteTodo/>)
    getByTestId = component.getByTestId
})

test('Check that name that does not exist in DB gets correct response from DB', () => {
    const removeButton = getByTestId('remove')
    const response = getByTestId('response')



    fireEvent.click(removeButton)

    setTimeout: () => {expect(getByTestId(response).textContent).toBe('User with name: "Christoffer" don\'t exist in database!'), 500}

})

