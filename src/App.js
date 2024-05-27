import logo from './logo.svg';
import './App.css';
import Todo_input from './components/Todo_input';
import Todo_list from './components/Todo_list';
import { useEffect, useState } from 'react';

function App() {
  const getLocalItem=()=>{
    let lists = localStorage.getItem('lists')
    if(lists){
      return JSON.parse(localStorage.getItem('lists'))
    }
    else{
      return [];
    }
  }
  const [todoList,setTodoList] = useState(getLocalItem)
    let addList = (inputTask) =>{
        setTodoList([...todoList,inputTask])
    }
    useEffect(()=>{
      localStorage.setItem('lists',JSON.stringify(todoList))
    },[todoList]);

    const deleteItem = (key) =>{
      let newList = [...todoList]
      newList.splice(key,1)
      setTodoList([...newList])
    }
  return (
    <div className='App'>
      <div>
        <Todo_input addList={addList} />
        <h1>To-Do List</h1><hr />
        {
          todoList.map((listItem,i)=>{
            return(
              <Todo_list key={i} index={i} item={listItem} deleteItem={deleteItem} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
