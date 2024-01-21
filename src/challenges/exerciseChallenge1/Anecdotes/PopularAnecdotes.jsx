export const PopularAnecdotes = ({winner, max}) => {
    return(
        <div>
            <h1> Anecdote with most votes </h1>
            <div>
                <p>{winner}</p>
                <p>has {max}</p>
            </div>
        </div>
    )
}