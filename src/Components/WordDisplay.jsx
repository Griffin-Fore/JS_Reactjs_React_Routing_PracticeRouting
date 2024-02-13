import { useParams } from "react-router-dom"

const WordDisplay = () => {
    const { word } = useParams()

    return (
        <div>
            <h1>The word is: {word}</h1>
        </div>
    )
}

export default WordDisplay;