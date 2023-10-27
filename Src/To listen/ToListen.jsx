import { useState, useEffect } from "react";
import "./ToListen.css"

export default function ToListen() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [count, setCount] = useState(0);
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(listaLocalStorage || []);
    const [id, setId] = useState(1);
    document.title = `Lista k-pop`

    useEffect(() => {
     localStorage.setItem ("Lista", JSON.stringify(lista)) ;
    if(count <= 0) {
        documento.title = `LISTA K-POP`;
    } else if (count == 1) {
        document.title = `SUA LISTA TEM ${count} MUSICAS`;
    } else if (count > 1){
        document.title = `SUA LISTA TEM ${count} MUSICAS`;
    }
}, [lista, count]);
    
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
            atividade: atividade,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
        setCount(count + 1);
    };

    const remover = (id) => {
        setLista(lista.filter((ativ) => ativ.id !== id));
        setCount(count - 1);
    }

    return(
        <div className = "container">
            <h1>Lista de Musicas Ver. Kpop</h1>
            <form onSubmit = {salvar}>
                <input type ="text"
                    value = {atividade}
                    onChange ={(e) => {setAtividade(e.target.value)}} />
                    <button>ADD</button>
            </form>
            {lista.map((ativ) => 
              <ul key = {ativ.id}>
                <li>
                    <p>{ativ.atividade}</p>
                    <button onClick={() => remover(ativ.id)}>REMOVE</button>
                </li>
            </ul>
            )}
        </div>
    );
}