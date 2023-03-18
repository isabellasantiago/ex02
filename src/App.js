import './App.css';
import { Cartao } from './Cartao/Cartao';
import { Comentario } from './Comentario/Comentario';
import { Lista } from './Lista/Lista';

const comentarios = [
  {
    img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    nome: 'Carlos Mendes',
    data: new Date(),
    comentario: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet magni, ipsum eveniet, alias odit quasi placeat rerum molestiae explicabo natus, facilis vel? Ipsam voluptatibus, vel dolores ut reprehenderit animi."
  },
  {
    img: 'https://images.unsplash.com/photo-1519763421920-f2d769e01a37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=729&q=80',
    nome: 'Ana Carolina',
    data: new Date(),
    comentario: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet magni, ipsum eveniet, alias odit quasi placeat rerum molestiae explicabo natus, facilis vel? Ipsam voluptatibus, vel dolores ut reprehenderit animi."
  },
  {
    img: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    nome: 'Larissa Trucefatos',
    data: new Date(),
    comentario: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet magni, ipsum eveniet, alias odit quasi placeat rerum molestiae explicabo natus, facilis vel? Ipsam voluptatibus, vel dolores ut reprehenderit animi."
  }
]

function App() {
  const estiloComentarios = comentarios.map((comment) => {
    const { img, nome, data, comentario} = comment;

    return(
      <Cartao>
        <Comentario 
          nome={nome}
          foto={img}
          data={data.toLocaleTimeString({language: 'en-US'})}
          alt="imagem de perfil"
          comentario={comentario}
        />
      </Cartao>
    )
  })
  return (
    <div className='App'>
      <Lista>
        {estiloComentarios}
      </Lista>
    </div>
  );
}

export default App;
