import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Todo ID: ${id} 
    Title: ${title}
    Is Completed?: ${completed}
  `);
};

axios.get(url).then((response) => {
  const todo: Todo = response.data;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
}); 
 