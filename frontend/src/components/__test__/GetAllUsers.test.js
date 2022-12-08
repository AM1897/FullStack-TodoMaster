import GetAllTodo from "../GetAllTodo";
import {render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<GetAllTodo/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the word GetAllTodo', () => {
    expect(getByTestId('header').textContent).toBe('GetAllTodo')
})