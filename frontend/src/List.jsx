import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function One() {
  return <h1>Hey, I'm the one!</h1>
}

function List() {
  const [questions, setData] = useState([])
  const [oneQuestion, setOneQuestion] = useState({})

  useEffect(() => {
    console.log("Useeffect")
    fetch('http://localhost:3001/list')
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setData(data))
  },[])

  function openDetails(e) {
    //console.log(e.target.className)
    fetch(`http://localhost:3001/list/one`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.className
      })})
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => {
      setOneQuestion(data)
      console.log(data)
    })

    // window.open("/one")
  }
  
  return (
    <div>
      <ul onClick={e => openDetails(e)}>{questions.length !== 0 && questions.map(x => <li className={x.questionTitle}>{x.questionTitle}</li>)}</ul>
      <br></br>
      <div>
        <p>{oneQuestion.questionTitle}</p>
        <p>{oneQuestion.questionDescription}</p>
{/*         <p>{oneQuestion.answers.name}</p><br></br>
        <p>{oneQuestion.answers.text}</p> */}
      </div>
    </div>
  )

}

export {List, One};