import React from 'react'
import Game from '../Game/index.jsx'

function Main() {
    return (
        <div style={{
            backgroundColor: "#faf8ef",
            height: '100vh',
            padding: '2% 20%'
        }}>
            <div style={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Game />
            </div>
        </div>
    )
}

export default Main
