import React from 'react'
import './Landingpage.css'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div>
        <div id="Landid">
            <div className='container w-50' style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'15rem 0'}}>
                <h1 className='text-center'><b>Crazy Quizapalooza</b></h1>
                <Link to="/home" style={{textDecoration:'none',width:'100%'}} className='text-center'>
                    <label className='btn btn-outline-success my-3'>Start Quiz</label>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Landingpage