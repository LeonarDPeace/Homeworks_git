import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaImagenes from './componentes/ListaImagenes'
import BarraBusqueda from './componentes/BarraBusqueda'

function App() {
  const [count, setCount] = useState(0)

  const [images, setImages] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  const controladorBtn = () => {
    const newCount = count + 1;
    setCount(newCount);

    const imageTitle = `Imagén #${newCount}`;

    const URL = "https://picsum.photos/200/300?random=";
    const imagenURL = `${URL}${newCount}`;
    setImages([...images, {url:imagenURL, title:imageTitle}])
  };

  const filteredImages = images.filter((image) =>
    image.title.includes(searchTitle)
  );

  return (
    <>
      <div>
        <h1>Parcial #1</h1>
        <button onClick={controladorBtn}>Agregar Imagén</button>
        <p>Numero de imagenes : {count}</p>
        <BarraBusqueda setSearchTitle={setSearchTitle}/>
        <ListaImagenes imagenes={filteredImages}/>
      </div>
    </>
  )
}

export default App