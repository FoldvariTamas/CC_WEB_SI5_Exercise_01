import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function One() {
  return <h1>Hey, I'm the one!</h1>
}

function List() {
  const [questions, setData] = useState([])
  const [oneQuestion, setOneQuestion] = useState({})
  const [arrLength, setArrlength] = useState(0)

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
      setArrlength(data.answers.length)
      console.log(data._id)
    })

    /// TO DO ///
    // id-t belevinni a route linkjébe
    // a linkből kihámozni az id-t
    // id alapján post fetch a servernek, bodyban az ID-val
    // a megfelelő endpoint a requestből kiveszi a id-t, és az adatbézisban megkeresi a megfelelő objektumot
    // az objektumot visszaküldeni json-ben
    // a fetch responsát megjeleníteni jsx-ben
    // window.open(`/one/${data._id}`)
  }

  function NewWindow() {
    return (
      <div>
        <p>{oneQuestion.questionTitle}</p>
        <p>{oneQuestion.questionDescription}</p>
        {arrLength !== 0 && oneQuestion.answers.map(x => <div><p>{x.name}</p><p>{x.text}</p></div>)}
      </div>
    )
  }
  
  return (
    <div>
      <ul onClick={e => openDetails(e)}>{questions.length !== 0 && questions.map(x => <li className={x.questionTitle}>{x.questionTitle}</li>)}</ul>
      <br></br>
      <div>
        <p>{oneQuestion.questionTitle}</p>
        <p>{oneQuestion.questionDescription}</p>
        {arrLength !== 0 && oneQuestion.answers.map(x => <div><p>{x.name}</p><p>{x.text}</p></div>)}
      </div>
    </div>
  )

}

export {List, One};