import React, {Component} from 'react';
let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {quiz_position : quizData.quiz_questions[0].instruction_text};
  }
  render() {
    return <div className="QuizQuestion">{this.state.quiz_position}</div>
  }

}

export default Quiz;
