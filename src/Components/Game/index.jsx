import React, { useState, useRef, useEffect } from 'react'
import { COLOR_NUMBER } from '../../constant'
import InitGrid from '../../Functions/InitGrid'
import ChangeGrid from '../../Functions/ChangeGrid'

function Game() {
    const tableRef = useRef(null)
    const [matrix, setMatrix] = useState(InitGrid())
    const [status, setStatus] = useState(true)
    const [score, setScore] = useState(0)

    useEffect(() => {
        tableRef.current.focus()
    }, [])

    const Restart = () => {
        setMatrix(InitGrid())
        tableRef.current.focus()
        setStatus(true)
        setScore(0)
    }

    const updateGame = (e) => {
        e.preventDefault();
        if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "ArrowDown") {
            let newMatrix = undefined
            let newStatus = undefined
            let result = undefined
            let scoreToAdd = undefined
            switch (e.key) {
                case "ArrowRight":
                    result = ChangeGrid(matrix, "right")
                    newMatrix = result.matrix
                    newStatus = result.status
                    scoreToAdd = result.score
                    break;
                case "ArrowLeft":
                    result = ChangeGrid(matrix, "left")
                    newMatrix = result.matrix
                    newStatus = result.status
                    scoreToAdd = result.score
                    break;
                case "ArrowUp":
                    result = ChangeGrid(matrix, "up")
                    newMatrix = result.matrix
                    newStatus = result.status
                    scoreToAdd = result.score
                    break;
                case "ArrowDown":
                    result = ChangeGrid(matrix, "down")
                    newMatrix = result.matrix
                    newStatus = result.status
                    scoreToAdd = result.score
                    break;
                default:
                    break;
            }
            setMatrix(newMatrix)
            setStatus(newStatus)
            setScore(score + scoreToAdd)
            if (!newStatus) tableRef.current.blur()
        }
    }

    return (
        <div>
            <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: "15px",
                gap: '10px'
            }}>
                <span 
                style={{
                    backgroundColor: '#bbada0',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '17px',
                    padding: '5px'
                }}>
                    Score: {score}
                </span>
            </div>
            <div
            style={{
                position: "relative"
            }}>
                <div
                onKeyDown={updateGame}
                ref={tableRef}
                tabIndex={-1}
                style={{
                    outline: 'none'
                }}>
                    <table 
                    width="480px" 
                    height="480px" 
                    style={{
                        border: "none",
                        borderSpacing: "15px 15px",
                        borderCollapse: "separate",
                        backgroundColor: "#bbada0",
                        borderRadius: "5px",
                    }}>
                        <tbody>
                            {matrix.map((row, index) => {
                                return (
                                <tr key={`row-${index}`}>
                                    {row.map((cell, index) => {
                                        if (cell === null) cell = 'empty'
                                        return (
                                            <td key={`cell-${index}`} style={{
                                                width: "100px",
                                                height: "100px",
                                                color: COLOR_NUMBER[cell].color,
                                                backgroundColor: COLOR_NUMBER[cell].backgroundColor,
                                                margin: "10px",
                                                textAlign: 'center',
                                                borderRadius: "5px",
                                            }}>
                                                <span style={{
                                                    fontWeight: 600,
                                                    fontSize: '48px'
                                                }}>
                                                    {(cell !== 'empty') && cell}
                                                </span>
                                            </td>
                                        )
                                    })}
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div 
                style={{
                    position: "absolute",
                    display: (status) ? 'none' : 'flex',
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: "rgba(238, 228, 218, 0.5)",
                    zIndex: 100,
                    animation: "fade-in 800ms ease 1200ms",
                    animationFillMode: "both"
                }}>
                    <span 
                    style={{
                        fontSize: "60px",
                        fontWeight: "bold",
                    }}>
                        Game over!
                    </span>
                    <button 
                    style={{
                        backgroundColor: '#bbada0',
                        borderRadius: '5px',
                        border: 'none',
                        fontSize: '17px',
                        cursor: 'pointer',
                        padding: '5px'
                    }}
                    onClick={Restart}>
                        Restart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Game
