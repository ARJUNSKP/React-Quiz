import React from "react";
import "./Question.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import {useNavigate} from 'react-router-dom'
function Question({setQushid,setScore,score}) {
  const [questions, setQuestion] = useState();
  const [indexno, setindexNo] = useState(0);
  const [flags, setFlags] = useState('');
  const [buttonid,setButtonid]=useState('');
  const [status,setStatus]=useState(true)
  // const navigate = useNavigate();


  const nextQus = () => {
    if (indexno + 1 <= questions.length - 1) {
      setStatus(true)
      setindexNo(indexno + 1);
      setFlags('')
      setButtonid('')
    } else {
      // navigate('/mark', {replace: true});
      setQushid(false)
      setindexNo(0);

    }
  };
  const chuckAns = (indexValue, e) => {
    console.log(status)
    if(status==true){
      console.log(score)
        setButtonid(e.target.id);
      if (indexValue == questions[indexno].answer) {
        setScore(score+1)
        console.log(score)
        setFlags('correct');
        setStatus(false)
        console.log("yes");
      } else {
        console.log("not");
        setFlags('notCorrect')
        setStatus(false)
      }
    }
  };

  const questionApi = async () => {
    const Responce = await axios("/db.json");
    setQuestion(Responce.data["quiz"]);
  };
  useEffect(() => {
    questionApi();
  }, []);
  console.log(questions);
  return (
    <div>
      {questions ? (
        <div>
          <h2 className="qus text-start mt-5 px-2">
            {indexno + 1 + ")." + questions[indexno].question}
          </h2>
          <div id="optionlist">
            <div id="optiondiv">
              <div
                style={{ backgroundColor: buttonid=='A'?(flags==="correct" ? "Green" : flags==='notCorrect'? "red" :""):"" }}
                type="button"
                id='A'
                onClick={(e) => chuckAns(questions[indexno].options[0], e)}
              >
                {questions[indexno].options[0]}
              </div>
              <div
                style={{ backgroundColor: buttonid=='B'?(flags=="correct" ? "Green" : flags=='notCorrect'? "red" :""):""  }}
                type="button"
                id="B"
                onClick={(e) => chuckAns(questions[indexno].options[1], e)}
              >
                {questions[indexno].options[1]}
              </div>
              <div
                style={{ backgroundColor: buttonid=='C'?(flags=="correct" ? "Green" : flags=='notCorrect'? "red" :""):"" }}
                type="button"
                id="C"
                onClick={(e) => chuckAns(questions[indexno].options[2], e)}
              >
                {questions[indexno].options[2]}
              </div>
              <div
                style={{ backgroundColor: buttonid=='D'?( flags=="correct" ? "Green" : flags=='notCorrect'? "red" :""):"" }}
                type="button"
                id="D"
                onClick={(e) => chuckAns(questions[indexno].options[3], e)}
              >
                {questions[indexno].options[3]}
              </div>
            </div>
          </div>
          <div className="my-3 text-end">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={nextQus}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <h1>nodata</h1>
      )}
    </div>
  );
}
export default Question;
