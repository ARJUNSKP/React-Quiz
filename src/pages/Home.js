import React, { useState } from "react";
import './Home.css'
import Question from "../components/Question";
import Mark from "./Mark";

function Home() {
  const [qushid,setQushid]=useState(true)
  const [score,setScore]=useState(0)
  return (
    <div id="homeid" style={{padding:'1rem 0',borderRadius:'2rem'}}>
      <div className='bar container bg-warning text-center,' style={{display:'flex',justifyContent:"center",alignItems:'center',borderRadius:'2rem',marginTop:'3rem'}}>
        <div className="">
          {qushid?<Question setQushid={setQushid} setScore={setScore} score={score}/>:<Mark score={score}/>}
        </div>
      </div>
    </div>
  );
}

export default Home;
