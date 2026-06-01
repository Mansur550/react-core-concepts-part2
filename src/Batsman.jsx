import { useState } from 'react'

export default function Batsman() {

    const [runs, setRuns] = useState(0)

    const handleSingle = () => {
        const newRuns = runs + 1;
        setRuns(newRuns);
    }

    const handleFour = () => {
        const newRuns = runs + 4;
        setRuns(newRuns);
    }

    const handleSix = () => {
        const newRuns = runs + 6;
        setRuns(newRuns);
    }

    return (
        <div>
            <h3>Player: Bangladesh</h3>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>

        </div>
    )
}