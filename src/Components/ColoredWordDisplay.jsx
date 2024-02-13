import { useParams } from "react-router-dom"

const ColoredWordDisplay = () => {
    const { word, wordColor,  backgroundColor } = useParams()

    return (
        <div>
            <h1 style={{backgroundColor: backgroundColor, color: wordColor}}>The word is: {word}</h1>
        </div>
    )
}

export default ColoredWordDisplay;