import React, { useState } from 'react'
import './App.css'

// ADVICE SLIP JSON API URL
// https://api.adviceslip.com/

// FUNCTIONAL COMPONENT

const apiURL = 'https://api.adviceslip.com/advice'

export default function App2() {

    function componentDidMount() {
        // console.log('componentDidMount');
        fetchAdvice()
    }
    componentDidMount()

    const [advice, setAdvice] = useState('')

    async function fetchAdvice() {
        try {
            const res = await fetch(apiURL)
            const data = await res.json()

            const { advice } = data.slip
            // console.log(advice)
            setAdvice(advice)
        } catch (err) {
            console.log('Error fetch')
        }
    }

    return (
        <div className="container">
            <div className="card">
                <h1 className='heading'>{advice}</h1 >
                <button className='btn' onClick={fetchAdvice}>
                    <span>GIVE ME ADVICE</span>
                </button>
                <small>Wait for 5 seconds</small>
                <small>before calling new advice</small>
            </div>
        </div>
    )
}
