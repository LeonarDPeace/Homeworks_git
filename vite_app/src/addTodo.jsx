import React, {useState} from "react";
import { useAddTodoMutation } from './services/todosApi';

const AddTodo = () => {
    const [addTodo] =useAddTodoMutation();
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTodo({title, completed: false});
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Agregar Todo</button>
        </form>
    );
};

export default AddTodo;