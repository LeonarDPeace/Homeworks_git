import BinaryTree from './BinaryTree';
import arbol from './data.js'

const App = () => { return (
    <div>
      <BinaryTree initialRoot={arbol} />
    </div>
  )
};

export default App;