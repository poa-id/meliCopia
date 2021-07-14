function Article(props) {
    const { title, thumbnail, price, permalink } = props;
    return (
        <div className="article">
            <a className='link' href={permalink} alt={title}>
                <img className='thumbnail' src={thumbnail} alt={title} />
                <div className='box'>
                    <label className='precio'>$ {price}</label>
                    <h4 className='titulo'>{title}</h4>
                </div>
            </a>
        </div>
    );
}

export default Article;