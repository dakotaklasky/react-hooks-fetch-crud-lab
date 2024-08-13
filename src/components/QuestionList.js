import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions,setQuestions}) {

  function onDelete(deletedQuestion){
    const updatedQuestions = questions.filter((question) =>{
      return question.id !== deletedQuestion.id
    })
    setQuestions(updatedQuestions)
  }

  function onAnswerChange(updatedQuestion){
    const updatedQuestions = questions.map((question) =>{
      if(question.id ===updatedQuestion.id){
        return updatedQuestion
      } else{
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  const questionsArray = questions.map(q =>{
    return <QuestionItem key={q.id} question={q} onDelete={onDelete}></QuestionItem>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsArray}</ul>
    </section>
  );
}

export default QuestionList;
