export const calcBoard = (rows, columns, bombs) => {
    const totalTilesCount = rows * columns;
    let bombIndexes = new Set()

    while(bombIndexes.size < bombs) {
        bombIndexes.add(Math.floor(Math.random() * totalTilesCount))
    }

    let tiles = [...Array(rows)].map((row, rowIndex) => {
        return [...Array(columns)].map((column, columnIndex) => {
            const tileIndex = (rowIndex * columns) + columnIndex;

            return {
                index: tileIndex,
                hasBomb: bombIndexes.has(tileIndex),
            }
        })
    })

    tiles = tiles.map((row, rowIndex) => {
        return row.map((column, columnIndex) => {
            let adjacentBombs = 0;
            let openOnTiles = [];

            const rowsToCheck = [rowIndex -1, rowIndex, rowIndex +1]
            const columnsToCheck = [columnIndex -1, columnIndex, columnIndex +1]

            rowsToCheck.forEach(r => {
                if(tiles[r]) {
                    columnsToCheck.forEach(c => {
                        if(tiles[r][c] && !(r === rowIndex && c === columnIndex)) {
                            tiles[r][c].hasBomb && adjacentBombs++
                        }
                        openOnTiles.push(JSON.stringify([r, c]))
                    })
                }
            })

            return {
                ...column,
                adjacentBombs: adjacentBombs,
                openOnTiles: openOnTiles,
                coordinates: JSON.stringify([rowIndex, columnIndex])
            }
        })
    })

    return tiles;
}