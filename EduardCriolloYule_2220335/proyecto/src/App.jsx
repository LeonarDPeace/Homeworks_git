import BinaryTree from './BinaryTree';
import arbol from './data.js'

const App = () => { return (
    <div>
      <h1>Árbol Binario</h1>
      <BinaryTree initialRoot={arbol} />
    </div>
  )
};

export default App;