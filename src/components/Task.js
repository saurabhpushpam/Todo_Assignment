import React, { useState } from 'react';
import '../App.css'

const Task = () => {
  const [initial, setInitial] = useState('');
  const [data, setData] = useState([]);
  const [completed, setCompleted] = useState([]);

  const getInput = (event) => {
    setInitial(event.target.value);
  };

  const getData = () => {
    if (initial.trim() !== '') {
      setData([...data, initial]);
      setCompleted([...completed, false]);
      setInitial('');
    }
  };

  const deleteTask = (index) => {
    const newData = data.filter((_, id) => id !== index);
    const newCompleted = completed.filter((_, id) => id !== index);
    setData(newData);
    setCompleted(newCompleted);
  };

  const deleteAllTasks = () => {
    setData([]);
    setCompleted([]);
  };

  const toggleCompleted = (index) => {
    const newCompleted = completed.map((item, id) => (id === index ? !item : item));
    setCompleted(newCompleted);
  };

  return (
    <>
      <div className='container'>
        <div className='inputTask'>
          <input
            type='text'
            placeholder='Enter Your Task'
            value={initial}
            onChange={getInput}
          />
          <button onClick={getData}>Add</button>
          <button className='dltall' onClick={deleteAllTasks}>Delete All</button>

        </div>
        {data.map((curVal, index) => (
          <div key={index} className='taskData'>
            <div className='toggle'
              onClick={() => toggleCompleted(index)}
            >
              {completed[index] ? '✔️' : ''}
            </div>
            <p
              style={{
                textDecoration: completed[index] ? 'line-through' : 'none',
                display: 'inline-block',
              }}
            >
              {curVal}
            </p>
            <button className='dltbtn' onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Task;
