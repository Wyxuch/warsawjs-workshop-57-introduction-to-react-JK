import Tile from "./Tile";
import {useEffect, useState} from "react";

const Game = ({ bombs, board, restart }) => {
    const [lost, setLost] = useState(false)
    const [won, setWon] = useState(false)
    const [revealed, setRevealed] = useState([])
    const [taggedBombs, setTaggedBombs] = useState(0)
    const [flags, setFlags] = useState(0)

    if(taggedBombs === bombs && !won) {
        setWon(true)
    }

    useEffect(() => {
        setRevealed([])
        setTaggedBombs(0)
        setFlags(0)
    }, [restart])

    useEffect(() => {
        setLost(false)
        setWon(false)
    }, [board])

    return (
        <div className={`game ${!board.length && 'hidden'}`}>
            <div className={'top'}>
                <div className={'topCounter'}>{('000' + flags).substr(-3)}</div>
                <button className={`smileyWrapper ${lost && 'lost'} ${won && 'won'}`}></button>
                <div className={'topCounter'}>{('000' + bombs).substr(-3)}</div>
            </div>
            <div className={'main'}>
                {board.map((row) => (
                    <div className={'row'}>
                        {row.map((column) => (
                            <Tile
                                data={column}
                                lost={lost}
                                won={won}
                                setLost={setLost}
                                setRevealed={setRevealed}
                                revealed={revealed}
                                restart={restart}
                                setTaggedBombs={setTaggedBombs}
                                taggedBombs={taggedBombs}
                                flags={flags}
                                setFlags={setFlags}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Game;