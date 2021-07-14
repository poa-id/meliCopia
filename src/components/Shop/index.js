import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products';
import Search from '../Search';
import './style.css'


function Shop() {
    const { id } = useParams();
    const [item, setItem] = useState(false);
    const [products, setProducts] = useState(false);

    useEffect(() => {
        if (item) { handleRequest() }
    }, [item])

    async function handleRequest() {
        const request = `https://api.mercadolibre.com/sites/${id}/search?q=${item}`;
        const getProduct = await fetch(request);
        const getJSON = await getProduct.json();
        setProducts(getJSON.results);
    }



    function callback(data) {
        setItem(data);
    }

    return (
        <section className="container">
            <div className="searchBar">
                <Search callback={callback} />
            </div>
            <container className='productBox'>
                <Products articles={products} />
            </container>
        </section>
    )
}

export default Shop;