import PropTypes from "prop-types";

function QuizzProgressBar({ topic, questionIndex }) {
  return <p>{`progress bar ${topic} and ${questionIndex}`}</p>;
}

QuizzProgressBar.propTypes = {
  topic: PropTypes.string.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default QuizzProgressBar;
