function Card() {
    const width = 170
    const height = width * 1.4
    
    return (
    <div className="bg-white opacity-100 rounded-xl p-2 pb-4 outline-2 outline-slate-400 grid grid-cols-[auto_1fr_auto]"
    style={{
        width: `${width}px`,
        height: `${height}px`
    }}>
        <p className="card-text spade">8</p>
        <div></div>
        <p className="card-text spade transform-[scale(1,_-1)]">8</p>
    </div>
    )
}

export default Card