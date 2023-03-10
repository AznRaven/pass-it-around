import React from 'react'

function Show({index}) {
    console.log(index)
    index = Number(index)
    console.log(index)
    return (
        <div>
            {/* <h1>Show View</h1> */}
            <p>{index} Bottles Of Beer On The Wall</p>
            <p>{index} Bottles Of Beer</p>
            {index > 0 && (
                <a href={`/${index - 1}`}>Take One Down. Pass It Around</a>
            )}
            {index == 0 && (
                <a href='/99'>Start Over</a>
            )}
        </div>
    )
}

export default Show;