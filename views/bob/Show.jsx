import React from 'react'

function Show({index}) {
    console.log(index)
    index = Number(index)
    console.log(index)
    return (
        <div>
            {/* <h1>Show View</h1> */}
            <p>{index} Monkeys Jumping On The Bed</p>
            {index > 0 && (
                <a href={`/${index - 1}`}>One Fell Down and Broke His Crown</a>
                )}
                <p>{100 - index} Dead Monkey Layin' On The Ground </p>
            {index == 0 && (
                <a href='/99'>Start Over</a>
            )}
        </div>
    )
}


export default Show;