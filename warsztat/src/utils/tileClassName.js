export  const tileClassName = (data, open, clicked, flagged, lost) => {
    let res = '';

    if(data.hasBomb) {
        (clicked) ? res += 'bomb red' : res += 'bomb'
    } else {
        switch (data.adjacentBombs) {
            case 1:
                res += 'one'
                break;
            case 2:
                res += 'two'
                break;
            case 3:
                res += 'three'
                break;
            case 4:
                res += 'four'
                break;
            case 5:
                res += 'five'
                break;
            case 6:
                res += 'six'
                break;
            case 7:
                res += 'seven'
                break;
            case 8:
                res += 'eight'
                break;
            case 9:
                res += 'nine'
                break;
            default:
                res += ''
        }
    }

    (!open && flagged) && (res += ' flag ');

    (open || lost) && (res += ' open ');

    return res
}