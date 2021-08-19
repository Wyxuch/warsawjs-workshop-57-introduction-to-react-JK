const Navigation = () => {
    return (
        <div className={'navigation'}>
            <div>
                <label htmlFor={'rows'}>Rows</label>
                <input type="number" id={'rows'}/>
            </div>
            <div>
                <label htmlFor={'columns'}>Columns</label>
                <input type="number" id={'columns'}/>
            </div>
            <div>
                <label htmlFor={'bombs'}>Bombs</label>
                <input type="number" id={'bombs'}/>
            </div>
            <button>Start</button>
            <button>Reset</button>
        </div>
    )
};

export default Navigation;