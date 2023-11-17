import { useParams } from "react-router-dom";

export default function Detalhe(){
    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));
    
    
    return(
    <div>
        <h1>{ id }</h1>
    </div>
   );
}