import { useCounter, useFetch } from "../hook/index";
import { LoadingQuote, Quote } from "../03-examples";



export const Leyout = () => {

    // const numberApi = 1;
    const {incremet, counter} = useCounter(1)

    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const {author, quote} = !!data && data[0]; 

    console.log(data)



  return (
    <>    
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            isLoading
            ? (
                <LoadingQuote />
            ) 
            : (
                <Quote author={author} quote={quote} />
            )
                            
        } 


        <button className="btn btn-primary" 
        disabled = {isLoading}
        onClick={ () => incremet() }>
            Next quote
        </button>
    </>
  )
}
