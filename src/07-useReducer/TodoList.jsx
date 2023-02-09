import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [] }) => {
  return (
    <>
        <ul className="list-group">

        {
            todos.map( value => (
                <TodoItem key={value.id} value={ value } />
            ))
        }
        
        </ul>
    </>
  )
}
