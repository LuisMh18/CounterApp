import { useFecth } from "../hooks/useFecth"
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const { data, isLoading, hasError, getFetch } = useFecth('https://api.breakingbadquotes.xyz/v1/quotes');

    // if(data != null){
    //     console.log("d::", data);
    // }
    const {quote, author} = !!data && data[0]; //validamos si la data es diferente a null accedemos a la posición para obtener los datos con(!!) la doble negación transformamos el null en undefined

    // console.log({quote, author});

    const getNewQuote = () => {
        getFetch();
    }

    return (
        <>
        <h1>BreakingBad Quotes</h1>
        <hr/>

        {
            (isLoading) ? <LoadingQuote /> : <Quote cita={quote} autor={author}/>
        }

        <button className="btn btn-primary" onClick={ getNewQuote } disabled={isLoading}>
            Next quote
        </button>


        </>
    )
}

