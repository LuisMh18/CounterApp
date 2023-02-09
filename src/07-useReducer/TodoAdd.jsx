import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ agregarCategoria }) => {

// const [inputValue, setInputValue] = useState('');

// const onInputChange = ({ target }) => {
//     setInputValue(target.value);
    
// }


 const { description, onInputChange, onResetForm } = useForm({
    description:''
 });

 const onNewTodo = (event) => {
    event.preventDefault();
    const value = description.trim();
    if(value == ""){ return; }
    //setInputValue('');
    onResetForm();
    const obj = {
        id: new Date().getTime() * 3,
        description: value,
        done:false
    }
    agregarCategoria(obj);
 }


  return (
    <>
      <form onSubmit={ onNewTodo }>
        <input type="text" className="form-control" placeholder="¿Qué hay que hacer?" name="description" value={ description } onChange={ onInputChange } />
        <button type="submit" className="btn btn-outline-primary mt-2">Agregar</button>
      </form>
    </>
  )
}
