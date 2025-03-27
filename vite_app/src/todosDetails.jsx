import React from 'react';
import { useGetTodoByIdQuery } from './services/todosApi';

export const TodosDetails = ({ id }) => {
    const { data: todo, error, isLoading } = useGetTodoByIdQuery(id);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error al cargar los datos</p>

    return (
        <div>
            <h3>{todo.title}</h3>
        </div>
    )
}