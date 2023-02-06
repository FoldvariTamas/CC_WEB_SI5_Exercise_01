import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';





function QuestionFrom() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function inputFunction(e, func) {
    func(e.target.value);
  }

  async function submitFunction() {
    // console.log(`${title} ${desc} ${name} ${text}`)
    await fetch('http://localhost:3001/',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(    {
        questionTitle: title,
        questionDescription: desc,
        answers: [{
            name: name,
            text: text
        }]
    })
    });
    setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, 1000)
  }

  return <form>
  <label>
    Title of the question:
    <input type="text" name="title" value={title} onChange={e => inputFunction(e, setTitle)} />
  </label><br/>
  <label>
    Description:
    <input type="text" name="desciption" value={desc} onChange={e => inputFunction(e, setDesc)} />
  </label><br/>
  <label>
    Name:
    <input type="text" name="name" value={name} onChange={e => inputFunction(e, setName)}/>
  </label><br/>
  <label>
    Text:
    <input type="text" name="text" value={text} onChange={e => inputFunction(e, setText)}/>
  </label>
  <input onClick={submitFunction} type="submit" value="Submit" />
  <button onClick={submitFunction}>SubmitButton</button>
</form>
}

export default QuestionFrom
