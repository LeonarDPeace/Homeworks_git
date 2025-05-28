import './BinaryTree.css';
import TreeNode from './TreeNode';
import React, { useState } from 'react';
import { useEffect } from 'react';

const BinaryTree = ({ initialRoot }) => {
    const [tree, setTree] = useState(initialRoot);

    useEffect(() => {
        console.log(tree)
    }, [tree])

    const insertNode = (current, side) => {
        console.log("Mensaje de aprobacion", current, side)
        if (!current[side]) {
            current[side] = {
                valor: Math.floor(Math.random() * 100),
                izquierda: null,
                derecha: null
            };
            setTree({ ...tree });
        }
    };

    return (
        <div className="tree">
            <TreeNode node={tree} onInsert={insertNode} />
        </div>
    );
};

export default BinaryTree;