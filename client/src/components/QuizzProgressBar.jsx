import PropTypes from "prop-types";
import "../styles/QuizzProgressBar.css";
import tick from "../assets/icons/WhiteTickbox.png";

function QuizzProgressBar({ quizz, questionIndex }) {
  function extractTopics(quizzObject) {
    return quizz ? quizzObject.map((question) => question.topic) : [];
  }

  //  fix :  quizzObject.forEach((question) => topics.push(question.topic));

  return (
    <ul className="progress-bar">
      {extractTopics(quizz).map((topic, index) => (
        <li key={topic}>
          <figure className={index <= questionIndex ? "question-answered" : ""}>
            <div>
              {index < questionIndex && <img src={tick} alt="ticked" />}
            </div>
            <figcaption>{topic}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

QuizzProgressBar.propTypes = {
  quizz: PropTypes.string.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default QuizzProgressBar;
