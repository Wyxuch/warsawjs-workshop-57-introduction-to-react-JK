const Game = () => {
    return (
        <div className={'game'}>
            <div className={'top'}>
                <div className={'topCounter'}>092</div>
                <button className={'smileyWrapper'}></button>
                <div className={'topCounter'}>001</div>
            </div>
            <div className={'main'}>
                <div className={'row'}>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                </div>
                <div className={'row'}>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile'}></div>
                    <div className={'tile flag'}></div>
                    <div className={'tile open bomb'}></div>
                </div>
                <div className={'row'}>
                    <div className={'tile open one'}></div>
                    <div className={'tile open two'}></div>
                    <div className={'tile open three'}></div>
                    <div className={'tile open four'}></div>
                    <div className={'tile open five'}></div>
                    <div className={'tile open six'}></div>
                    <div className={'tile open seven'}></div>
                    <div className={'tile open eight'}></div>
                </div>
            </div>
        </div>
    )
}

export default Game;