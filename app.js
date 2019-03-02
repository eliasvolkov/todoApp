const form = document.querySelector('#task-form'),
      taskList = document.querySelector('.collection'),
      taskInput = document.querySelector('#task'),
      filter = document.querySelector('#filter'),
      clearBtn = document.querySelector('.clear-tasks');

(function init () {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);


    function addTask (e) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        
        const linkRemove = document.createElement('a');
        linkRemove.className = 'delete-item secondary-content';
        linkRemove.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(linkRemove);
        taskList.appendChild(li);
        
        e.preventDefault();
    }
    function removeTask (e) {
        if(e.target.parentElement.classList.contains('delete-item')){
            e.target.parentElement.parentElement.remove();
        }
    }





}) ();
