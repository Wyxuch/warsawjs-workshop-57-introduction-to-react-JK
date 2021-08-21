import {calcBoard} from "../utils/calcBoard";

const Navigation = ({ set, rows, columns, bombs }) => {
    const minRows = 3;
    const minColumns = 9;
    const minBombs = 1;

    const handleRowsChange = (e) => {
        (e.target.value >= minRows) && set(parseInt(e.target.value), 'rows')
    }

    const handleColumnsChange = (e) => {
        (e.target.value >= minColumns) && set(parseInt(e.target.value), 'columns')
    }

    const handleBombsChange = (e) => {
        const tilesCount = columns * rows;
        (e.target.value >= minBombs && e.target.value < tilesCount) && set(parseInt(e.target.value), 'bombs')
    }

    const handleStart = () => {
        set(calcBoard(rows, columns, bombs), 'board')
    }

    return (
        <div className={'navigation'}>
            <div>
                <label htmlFor={'rows'}>Rows</label>
                <input type="number" id={'rows'} value={rows} onChange={e => handleRowsChange(e)}/>
            </div>
            <div>
                <label htmlFor={'columns'}>Columns</label>
                <input type="number" id={'columns'} value={columns} onChange={e => handleColumnsChange(e)}/>
            </div>
            <div>
                <label htmlFor={'bombs'}>Bombs</label>
                <input type="number" id={'bombs'} value={bombs} onChange={e => handleBombsChange(e)}/>
            </div>
            <button onClick={handleStart}>Start</button>
        </div>
    )
};

export default Navigation;