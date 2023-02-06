import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function List() {
  const [questions, setData] = useState([])

  useEffect(() => {
    console.log("Useeffect")
    fetch('http://localhost:3001/list')
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setData(data))
  },[])

  function openDetails(e) {
    console.log(e.target.className)
  }
  
  return (
    <div>
      <ul onClick={e => openDetails(e)}>{questions.length !== 0 && questions.map(x => <li className={x.questionTitle}>{x.questionTitle}</li>)}</ul>
    </div>
  )

}

export default List;