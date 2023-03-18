import './Comentario.css';

export const Comentario = ({ nome, comentario, data, foto, alt }) => {

    return(
        <div className='comentario'>
            <div className='img-container'>
                <img src={foto} alt={alt}/>
            </div>
            <div className='info-container'>
                <h2 className='nome'>{nome}</h2>
                <p>{comentario}</p>
                <span>{data}</span>
            </div>
        </div>
    )
}