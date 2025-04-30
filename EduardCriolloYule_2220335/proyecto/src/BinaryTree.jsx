import './BinaryTree.css';
import TreeNode from './TreeNode';
import React, { useState } from 'react';
import { useEffect } from 'react';

// Recorridos
function inorder(node, res = []) {
    if (!node) return res;
    inorder(node.izquierda, res);
    res.push(node.valor);
    inorder(node.derecha, res);
    return res;
}

function preorder(node, res = []) {
    if (!node) return res;
    res.push(node.valor);
    preorder(node.izquierda, res);
    preorder(node.derecha, res);
    return res;
}

function postorder(node, res = []) {
    if (!node) return res;
    postorder(node.izquierda, res);
    postorder(node.derecha, res);
    res.push(node.valor);
    return res;
}

// Buscar valor
function contains(node, value) {
    if (!node) return false;
    if (node.valor === value) return true;
    return contains(node.izquierda, value) || contains(node.derecha, value);
}

const BinaryTree = ({ initialRoot }) => {
    const [tree, setTree] = useState(initialRoot);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        // Mostrar recorridos en consola
        console.log('Inorder:', inorder(tree, []));
        console.log('Preorder:', preorder(tree, []));
        console.log('Postorder:', postorder(tree, []));
    }, [tree]);

    const insertNode = (current, side) => {
        if (!current[side]) {
            current[side] = {
                valor: Math.floor(Math.random() * 100),
                izquierda: null,
                derecha: null
            };
            setTree({ ...tree });
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const num = parseInt(searchValue, 10);
        if (isNaN(num)) {
            setSearchResult('Por favor ingresa un número válido');
            return;
        }
        setSearchResult(contains(tree, num) ? `Sí, el árbol contiene ${num}` : `No, el árbol no contiene ${num}`);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0
        }}>
            <form onSubmit={handleSearch} style={{ marginTop: '40px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                    type="number"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    placeholder="Número a buscar"
                />
                <button type="submit">Buscar</button>
            </form>
            {searchResult && <div style={{ marginTop: '10px' }}>{searchResult}</div>}
            <div className="tree" style={{ marginTop: '40px' }}>
                <TreeNode node={tree} onInsert={insertNode} />
            </div>
        </div>
    );
};

export default BinaryTree;