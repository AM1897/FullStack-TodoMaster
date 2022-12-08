import CreateTodo from "../CreateTodo";
import { render } from '@testing-library/react'

let getByTestId

beforeEach(() => {
    const component = render(<CreateTodo/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the words CreateTodos', () => {
    expect(getByTestId('header').textContent).toBe('CreateTodos')
})
