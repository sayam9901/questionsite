import { MathJax } from "better-react-mathjax";
import React from "react";
import { useEffect, useState } from "react";
import "./hero.css";
import Button from 'react-bootstrap/Button';

function Hero() {
  const [question, setQuestion] = useState([]);
  const URL =
    "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_2";

  function handleCurve() {
    let url =
      "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_901";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestion(data);
      });
  }
  function handleBinomial() {
    let url =
      "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=BinomialTheorem_901";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestion(data);
      });
  }
  function handleDifferential() {
    let url =
      "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=DifferentialCalculus2_901";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestion(data);
      });
  }

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestion(data);
      });
  }, []);
  return (
    <div>
      <h1 className="headline">select the question catogories</h1>
      <Button variant="secondary"  onClick={handleCurve}>AreaUnderTheCurve</Button>{' '}
      <Button variant="secondary"  onClick={handleBinomial}>BinomialTheorem</Button>{' '}
      <Button variant="secondary"   onClick={handleDifferential}>DifferentialCalculus</Button>{' '}
      <MathJax className="question-box">
        {question.map((question) => (
          <div key= {question.QuestionID} className="question">{question.Question}
          </div>
        ))}
        </MathJax>
    </div>
  );
}

export default Hero;
