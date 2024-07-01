

// import React, { useState } from 'react';
// import '../App.css';

// const Toodo = () => {
//   const [task, setTask] = useState('');
//   const [description, setDescription] = useState('');
//   const [data, setData] = useState([]);
//   const [completed, setCompleted] = useState([]);

//   const getTaskInput = (event) => {
//     setTask(event.target.value);
//   };

//   const getDescriptionInput = (event) => {
//     setDescription(event.target.value);
//   };

//   const addTask = () => {
//     if (task.trim() !== '' && description.trim() !== '') {
//       setData([...data, { task, description }]);
//       setCompleted([...completed, false]);
//       setTask('');
//       setDescription('');
//     }
//   };

//   const deleteTask = (index) => {
//     const newData = data.filter((_, id) => id !== index);
//     const newCompleted = completed.filter((_, id) => id !== index);
//     setData(newData);
//     setCompleted(newCompleted);
//   };

//   const deleteAllTasks = () => {
//     setData([]);
//     setCompleted([]);
//   };

//   const toggleCompleted = (index) => {
//     const newCompleted = completed.map((item, id) => (id === index ? !item : item));
//     setCompleted(newCompleted);
//   };

//   return (
//     <>
//       <div className='container'>
//         <div className='inputTask'>
//           <input
//             type='text'
//             placeholder='Enter Task Name'
//             value={task}
//             onChange={getTaskInput}
//           />
//           <input
//             type='text'
//             placeholder='Enter Description'
//             value={description}
//             onChange={getDescriptionInput}
//           />
//           <button onClick={addTask} className='addbtn'>Add</button>
//         </div>
//         <button className='dltall' onClick={deleteAllTasks}>Delete All</button>
//         {/* </div> */}
//         {data.map((curVal, index) => (
//           <div key={index} className='taskData'>
//             <div className='toggle' onClick={() => toggleCompleted(index)}>
//               {completed[index] ? '✔️' : ''}
//             </div>
//             <p
//               style={{
//                 textDecoration: completed[index] ? 'line-through' : 'none',
//                 display: 'inline-block',
//               }}
//             >
//               <strong>Task:</strong> {curVal.task} <br />
//               <strong>Description:</strong> {curVal.description}
//             </p>
//             <button className='dltbtn' onClick={() => deleteTask(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Toodo;



import React, { useState } from 'react';
import '../App.css';

const Task = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);
  const [completed, setCompleted] = useState([]);

  const getTaskInput = (event) => {
    setTask(event.target.value);
  };

  const getDescriptionInput = (event) => {
    setDescription(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '' && description.trim() !== '') {
      setData([...data, { task, description }]);
      setCompleted([...completed, false]);
      setTask('');
      setDescription('');
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
            placeholder='Enter Task Name'
            value={task}
            onChange={getTaskInput}
          />
          <input
            type='text'
            placeholder='Enter Description'
            value={description}
            onChange={getDescriptionInput}
          />
          <button onClick={addTask} className='addbtn'>Add</button>
        </div>
        {data.length > 0 && (
          <button className='dltall' onClick={deleteAllTasks}>Delete All</button>
        )}
        {data.map((curVal, index) => (
          <div className='task'>
            <div key={index} className='taskData'>
              <div className='toggle' onClick={() => toggleCompleted(index)}>
                {completed[index] ? '✔️' : ''}
              </div>
              <p
                style={{
                  textDecoration: completed[index] ? 'line-through' : 'none',
                  display: 'inline-block',
                }}
              >
                {/* <strong>Task:</strong> {curVal.task} <br /> */}
                <strong>{curVal.task} </strong> <br />
                {curVal.description}
              </p>
              <button className='dltbtn' onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Task;
