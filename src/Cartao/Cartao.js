import './Cartao.css';

export const Cartao = ({children}) => {
    return(
        <div className="cartao">
            <div className="comentario-container">
                {children}
            </div>
            <div className="btn-container">
                <button className="aprovar">Aprovar</button>
                <button className="reprovar">Não aprovar</button>
            </div>
        </div>
    )
}