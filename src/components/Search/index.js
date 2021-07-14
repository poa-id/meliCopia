import { Link } from 'react-router-dom';
import { useState } from 'react';

function Search(props) {
    const [item, setItem] = useState("");
    function handleChange(e) {
        const { value } = e.target;
        setItem(value);
    }

    function handleEnter(e) {
        if (e.key == 'Enter') {
            handleCallback()
        }
    }

    function handleCallback() {
        props.callback(item);
        setItem("");
    }

    return (
        <>
            <Link to="/">
                <img src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png" alt="logo" className="logoSearch"></img>
            </Link>
            <input type="text" placeholder="Ingrese articulo a buscar" id="userInput" onChange={handleChange} onKeyPress={handleEnter} value={item}></input>
            <button onClick={handleCallback} className="boton">Buscar</button>
        </>
    )
}
export default Search;