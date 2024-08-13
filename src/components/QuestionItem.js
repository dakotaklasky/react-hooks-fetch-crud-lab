import React from "react";

function QuestionItem({ question, onDelete, onAnswerChange}) {
  const { id, prompt, answers, correctIndex } = question;

  let options

  if(answers !== undefined){
    options = answers.map((answer, index) => (
      <option key={index} value={index}>
        {answer}
      </option>
    ));
  }
  else{
    options = <option></option>
  }

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method:"DELETE",
    })
    .then(response => response.json())
    .then(() => onDelete(question))
  }

  function handleAnswerChange(event){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        "correctIndex": event.target.value
      })
    })
    .then(response => response.json())
    .then(() => onAnswerChange(question))
  }
  


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
