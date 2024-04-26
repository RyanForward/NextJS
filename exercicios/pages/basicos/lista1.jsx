export default function listagem() {
    return(
        <div>
            {lista()}
        </div>
    )
}

function lista(total = 20){
    const listaArray = []
    for(let i = 1; i <= total; i++){
        listaArray.push(<span>{i},</span>)
    }
    return listaArray
}