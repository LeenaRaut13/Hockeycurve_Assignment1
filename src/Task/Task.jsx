import {useState} from 'react';
import './task.css';

const Task = () => {
    
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addItem = () => {
        if (title && description) {
          setItems([...items, { title, description }]);
          setTitle('');
          setDescription('');
        }
      };
    
      const deleteItem = (index) => {
        const newItems = items.filter((item, i) => i !== index);
        setItems(newItems);
      };
    
    return(
        <>
            <h1>Title and Description List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          className='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          className='description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='button' onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
        </>
    );
}

export default Task;