import React from 'react'
import './ExpenseItem.css';
function ExpenseItem(props) {
  const date1=props.date.toLocaleString('en-US',{date1:'long'});
  

  return (
    <div className='container'>
        <div className='expen'>
           <div>{date1}</div>
            </div>
        <div className='expen-description'>
            <h1>{props.title}</h1>
        </div>
        <div className='price'>
            {props.amount}/RS
        </div>
    </div>
  )
}

export default ExpenseItem