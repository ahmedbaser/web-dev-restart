function loadTodos() {
 fetch('https://jsonplaceholder.typicode.com/users/1/todos')
 .then(res => res.json())
 .then(data =>  displayTodos(data))
}

function displayTodos(todos) {
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos) {
    //    create the child element  
      const todoDiv = document.createElement('div');
    // set innerText or  innerHTML  
      todoDiv.innerHTML = `
       <h3>title: ${todo.title}</h3>
       <p>userId: ${todo.userId}</p>
       <p>Is completed: ${todo.completed === true ? 'complete': 'not complete'}
      
      `;
    //   appendChild 
     todoContainer.appendChild(todoDiv);
    }
}

loadTodos();