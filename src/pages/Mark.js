import React from 'react';
import { Link } from 'react-router-dom';

function Mark({score}) {
  return (
    <div style={{padding:'5rem 0'}}>
        <div className='text-center'>
            <h2>Score Holding</h2><hr/>
            <h5 className='mt-4'>Maximum Marks:-10</h5>
            <h4 className='my-2'>Obtained Marks:-{score}</h4>
            <Link to={'/home'} style={{textDecoration:'none'}}>
                <labe className='btn btn-outline-success my-5'>Home</labe>
            </Link>
        </div>
    </div>
  )
}

export default Mark