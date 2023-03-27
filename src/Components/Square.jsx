function Square({value, OnMohanClick}) {
    return (
        <button className="square"onClick={OnMohanClick} >
            {value}
        </button>
    )
}


export default Square;