import {Todo} from './types.js';
import {getAllTodos, createTodo, updateTodo, deleteTodo, getTodoById} from './api.js';

const todoList = document.getElementById('todoList') as HTMLUListElement;
const todoTitle = document.getElementById('todoTitle') as HTMLInputElement;
const addBtn = document.getElementById('addBtn') as HTMLButtonElement;


async function loadTodos() {
    try{
        const todos = await getAllTodos();
        displayTodos(todos);
    }
    catch (error) {
        console.error('Error loading todos:', error);
        alert('cannot load todos, please try again later');
    }
}

function displayTodos(todos: Todo[]) {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });
}

function createTodoElement(todo: Todo): HTMLLIElement {
      const li = document.createElement('li');
      li.className = 'todo-item';
      if (todo.isCompleted) {
          li.classList.add('completed');
      }

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'todo-checkbox';
      checkbox.checked = todo.isCompleted;
      checkbox.addEventListener('change', () =>
  toggleTodo(todo));


        const span = document.createElement('span');
      span.className = 'todo-text';
      span.textContent = todo.title;

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'todo-delete';
      deleteBtn.textContent = 'delete';
      deleteBtn.addEventListener('click', () =>
  removeTodo(todo.id));

       li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);

      return li;
}

 async function addTodo() {
      const title = todoTitle.value.trim();

      if (!title) {
          alert('please enter a todo title');
          return;
      }

      try {
          const newTodo = await createTodo({
              title: title,
              isCompleted: false
          });

         
          todoTitle.value = '';

        
          await loadTodos();
      } catch (error) {
          console.error('add new todo failed:', error);
          alert('failed to add todo, please try again later');
      }
  }



   async function toggleTodo(todo: Todo) {
      try {
          const updatedTodo = {
              ...todo,
              isCompleted: !todo.isCompleted
          };

          await updateTodo(todo.id, updatedTodo);
          await loadTodos();
      } catch (error) {
          console.error('failed to update:', error);
          alert('failed to update todo, please try again later');
      }
  }


 async function removeTodo(id: number) {
      if (!confirm('確定要刪除這個待辦事項嗎？')) {
          return;
      }

      try {
          await deleteTodo(id);
          await loadTodos();
      } catch (error) {
          console.error('failed to delete:', error);
          alert('failed to delete todo, please try again later');
      }
  }


  addBtn.addEventListener('click', addTodo);
  todoTitle.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTodo();
      }
  });



  window.addEventListener('DOMContentLoaded', () => {
      loadTodos();
  });
