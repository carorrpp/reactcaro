import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import QuestionCard from "../../components/QuestionCard";
import Button from "../../components/button"

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game () {
    const [loading,setLoading]= useState(true);
    const[questions, setQuestions]=useState([]);
    const[selectedAnswers,setSelectedAnswers]=useState([])
    const[result,setResult]=useState(0)
    const[mostrarResultado, setMostrarResultado]=useState(false)

    function calcularResultado(){
        const respuestasCorrectas=selectedAnswers.filter((respuesta)=>respuesta.valorOpcion===true)
        setResult(respuestasCorrectas.length  )
        setMostrarResultado(true)
    }

    useEffect(()=>{
        fetch(API_URL)
        .then(response=> response.json())
        .then(data=>setQuestions(data))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
        },[] )

    return(
        <div className="container">
            <section className="section">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="is-active">
                            <Link to="/game">Juego</Link>
                        </li>
                    </ul>
                </nav>

                {
                loading &&
                <div>"Cargando..."</div> 
}
{
    !loading&&(
        <form>
            {
questions.map((pregunta)=>{
    return <QuestionCard key={pregunta.id} 
    preguntaActual={pregunta} 
    selectedAnswers={selectedAnswers}
    setSelectedAnswers={setSelectedAnswers}
    mostrarResultado={mostrarResultado}
    />

})
            }
        </form>
    
    )}
    
<div className="level-right">
{
    mostrarResultado &&
    <p>{result}/{`${questions.length}`}</p>

}
    <Button disabled=
    {
        selectedAnswers?.length !== questions?.length
    } 
    onClick={()=>calcularResultado()} text="Validar" > </Button>
    </div>
  </section>
</div>
)}
export default Game;    