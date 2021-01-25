import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import AddCategory  from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{
//no se hace asi
    //const categorias =['One Punch','Dragon Ball super','Samurai X','Naruto'];

const [categorias, setCategorias] = useState(['One Punch']);

// const handleAdd=()=>{
//     setCategorias(values =>[...values,'Naruto']); 
// }
    
    return <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias}/>
        <hr/>

        <ol>
            {
                categorias.map(
                    categoria => (<GifGrid 
                        key={categoria}
                        categoria={categoria} />)
                  )
            }
        </ol>
    </>;
};
export default  GifExpertApp;