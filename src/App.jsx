import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"
import { useCatWords } from "./hooks/useCatWords"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import './App.css'

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })
    const { threeFirstWords } = useCatWords({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (


        <main>

            <h1>App de Gatitos</h1>

            <button onClick={handleClick}> Recargar </button>


            <section>

                {fact && (


                    <SwitchTransition>
                        <CSSTransition classNames="fade" key={fact} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
                            <p>{fact}</p>
                        </CSSTransition>
                    </SwitchTransition>

                )}

                {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
                
            </section>

            <h2> {threeFirstWords} </h2>
        </main>

    )
}