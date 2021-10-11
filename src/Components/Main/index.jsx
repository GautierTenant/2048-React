import React from 'react'
import Game from '../Game/index.jsx'

function Main() {
    return (
        <div style={{
            backgroundImage: `url(/img/background.jpg)`,
            height: '100vh',
            padding: '2% 20%'
        }}>
            <div style={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src="/img/teamwork.png" alt="teamwork Logo" width="220px" height="23px" style={{
                    marginBottom: "30px"
                }}/>
                <Game />
            </div>
        </div>
    )
}

export default Main
