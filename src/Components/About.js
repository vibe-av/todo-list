import React from 'react'

export default function About() {
    let styleAb = {
        marginTop : '25vh'
    }
    return (
        <div className="jumbotron jumbotron-fluid m-4 text-center">
            <div className="container" style={styleAb}>
                <h1 className="display-4">KakAshi</h1>
                <p className="lead">This ToDo app you've summoned is provided tp you by KakAshi!</p>
            </div>
        </div>
    )
}
