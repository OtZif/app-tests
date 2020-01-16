import React, {Component} from 'react';
import './questionForm.scss'

class QuestionForm extends Component{

  displayData = [];
  state ={
    showData: this.displayData,
  }



  handleAddNewInput = () => {
    let key = (+new Date()).toString(10)
    this.displayData.push(
      <div key={key} className='new--answer'>
        <input type="checkbox" />
        <input type="text" placeholder="Enter new answer" />

      </div>
    );
    this.setState({
      showData: this.displayData,
    })
  }
 
  render() {
    const {item} = this.props;
    return(
      <form className='questionForm'>
        <input type="text" placeholder="Enter question" value={item.question}/>
        <div className='inputs--block'>
          {this.displayData.map(el=> el)}
          <input type='button' value='add answer' onClick = {this.handleAddNewInput} />
        </div>
        <div className='buttons--block'>
          <button className='save button'>SAVE</button>
          <button className='cancel button'>CANCEL</button>
        </div>  
      </form>
    )
  }
}

export default QuestionForm;