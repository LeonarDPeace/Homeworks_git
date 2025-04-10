// src/pages/SongsPage.jsx
import React, { useState } from 'react';
import { LinkedList } from '../utils/LinkedList';
import { Stack } from '../components/stack';

const SongsPage = () => {
    const [playlist, setPlaylist] = useState(new LinkedList());

    const reclamosStack = new Stack();

    const addReclamoToStack = (reclamo) => {
        reclamosStack.push(reclamo);
    };

    const consultasQueue = new Queue();

    const addConsultaToQueue = (consulta) => {
        consultasQueue.enqueue(consulta);
    };

    const handleConsultaChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        consultasQueue.clear(); // Clear the queue before adding new selections
        selectedOptions.forEach(option => addConsultaToQueue(option));
    };

    const addClient = (event) => {
        event.preventDefault()

        const nombreCliente = event.target.nombreCliente_input.value
        const reclamoCliente = event.target.reclamos_select.value
        const consultaCliente = event.target.consultas_select_input.value
    
        event.target.reset()

        playlist.append({ nombreCliente, reclamoCliente, consultaCliente })

        setPlaylist(playlist);
    };

    return (
        <div className="text-center">
            <h1 className="mb-4">Songs Playlist</h1>
            
            <form onSubmit={addClient} className="mb-4">
                <div className="mb-3">
                    <label htmlFor="nombreCliente_input" className="form-label">Nombre del Cliente</label>
                    <input type="text" id="nombreCliente_input" name="nombreCliente_input" className="form-control" required />
                </div>
                <div className="mb-3">
                    <select
                        id="reclamos_select"
                        name="reclamos_select"
                        className="form-select"
                        onChange={(e) => addReclamoToStack(e.target.value)}
                    >
                        <option value="reclamo1">Reclamo 1</option>
                        <option value="reclamo2">Reclamo 2</option>
                        <option value="reclamo3">Reclamo 3</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="consultas_select_input" className="form-label">Consultas</label>
                    <select id="consultas_select_input" name="consultas_select_input" className="form-select" multiple>
                        <option value="consulta1">Consulta 1</option>
                        <option value="consulta2">Consulta 2</option>
                        <option value="consulta3">Consulta 3</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Añadir Cliente</button>
            </form>
        </div>
    );
};

export default SongsPage;