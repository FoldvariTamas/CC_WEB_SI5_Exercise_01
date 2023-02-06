import React, { useState } from 'react';

function QuestionFrom() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [labelText, setLabelText] = useState("");

  function inputFunction(e, func) {
    func(e.target.value);
  }

  async function submitFunction(e) {
    e.preventDefault()

    const response = await fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        questionTitle: title,
        questionDescription: desc,
        answers: [{
          name: name,
          text: text
        }]
      })
    });
    const data = await response.json();
    setLabelText(data.message)
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
  <input onClick={e => submitFunction(e)} type="submit" value="Submit" />
  <label>{labelText}</label>
</form>
}

export default QuestionFrom
