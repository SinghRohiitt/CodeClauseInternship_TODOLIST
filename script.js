const todoList = [];
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = '';
  
    todoList.forEach((todoObject, index) => {
      const { name, dueDate } = todoObject;
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button">Delete</button> 
      `;
      todoListHTML += html;
    });
  
    document.querySelector('.todo-list')
      .innerHTML = todoListHTML;
  
    document.querySelectorAll('.delete-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });
      });
  }
  
  document.querySelector('.add-button')
    .addEventListener('click', () => {
      addTodo();
    });
  
  function addTodo() {
    const inputElement = document.querySelector('.name');
    const name = inputElement.value;
  
    const dateInputElement = document.querySelector('.due-date');
    const dueDate = dateInputElement.value;
  
    todoList.push({
      //name: name,
      //dueDate: dueDate,
      name,
      dueDate
    });
  
    inputElement.value = '';
  
    renderTodoList();
  }