
export const TodoItem = ({ value, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
            <span className={`cursorPointer align-self-center ${(value.done) ? 'text-decoration-line-through' : ''}`} onClick={ () => onToggleTodo(value.id) } >{ value.description }</span>
            <button className="btn btn-danger" onClick={ () => onDeleteTodo(value.id) }>Borrar</button>
        </li>
    </>
  )
}

