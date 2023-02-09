import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
        <ul className="list-group">

        {
            todos.map( value => (
                <TodoItem key={value.id} value={ value } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo } />
            ))
        }
        
        </ul>
    </>
  )
}
