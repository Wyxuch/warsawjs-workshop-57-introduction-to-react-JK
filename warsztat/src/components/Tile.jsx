import {useEffect, useState} from 'react'
import {propagate} from "../utils/propagate";
import {tileClassName} from "../utils/tileClassName";

const Tile = ({ data, lost, setLost, won, revealed, setRevealed, restart = 0, taggedBombs, setTaggedBombs, flags, setFlags }) => {
    const [open, setOpen] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [flagged, setFlagged] = useState(false)

    const handleClick = () => {
        if(!flagged) {
            if (won || lost) {
                return
            }
            setOpen(true)
            setClicked(true)

            data.hasBomb && setLost(true)

            if(!data.hasBomb && !data.adjacentBombs){
                setRevealed([...revealed, data.coordinates])
            }
        }
    }

    const handleContextmenu = (e) => {
        e.preventDefault()
        if (!open) {
            setFlagged(!flagged)

            if (flagged) {
                console.log('here')
                setFlags(flags - 1)
                data.hasBomb && setTaggedBombs(taggedBombs - 1)
            }

            if(!flagged) {
                setFlags(flags + 1)
                data.hasBomb && setTaggedBombs(taggedBombs + 1)
            }
        }
    }

    const className = () => {
        return tileClassName(data, open, clicked, flagged, lost);
    }

    useEffect(() => {
        setOpen(false)
        setClicked(false)
        setFlagged(false)
    }, [restart])

    useEffect(() => {
        propagate(open, setOpen, revealed, setRevealed, data)
    }, [revealed, data, open, setRevealed])

    return (
        <div className={`tile ${className()}`} onContextMenu={e => handleContextmenu(e)} onClick={handleClick}></div>
    )
}

export default Tile;