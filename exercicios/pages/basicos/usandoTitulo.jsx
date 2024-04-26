import Titulo from '../../components/Titulo.jsx'

export default function usandoTitulo(){
    return(
        <div>
            <Titulo 
                principal = "Página de Cadastros"
                secundario = "Incluir, alterar e excluir coisas"
            />
             <Titulo 
                principal = "Página de Login"
                secundario = "Informe email e senha"
                pequeno = {true}
            />
        </div>
    )
}