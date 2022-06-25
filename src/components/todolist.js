import React from 'react';
import AddModal from './todolist/addModal';
import TitleContent from './todolist/titleContent';
import ListContent from './todolist/listContent';

function TodoList() {
  return (
    <div>
        <TitleContent/>
        <AddModal/>
        <ListContent/>
    </div>
  )
}

export default TodoList;