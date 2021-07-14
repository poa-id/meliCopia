import React from 'react';
import Article from '../Article';

function Products({ articles }) {

    return (
        <div className="articleBox">
            {!articles ? (
                <p className="placeholder" >Buscá el producto que quieras!</p>) : (
                articles.map((article) => {
                    const { title, thumbnail, price, permalink, id } = article;
                    return (
                        <Article
                            title={title}
                            thumbnail={thumbnail}
                            price={price}
                            permalink={permalink}
                            key={id}
                        />
                    )
                }))}
        </div>
    )
}
export default Products;