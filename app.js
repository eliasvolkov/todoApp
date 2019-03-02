const form = document.querySelector('#task-form'),
      taskList = document.querySelector('.collection'),
      taskInput = document.querySelector('#task'),
      filter = document.querySelector('#filter'),
      clearBtn = document.querySelector('.clear-tasks');

(function init () {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    filter.addEventListener('keyup', filterTask);
    clearBtn.addEventListener('click', removeAll);


    function addTask (e) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        
        const linkRemove = document.createElement('a');
        linkRemove.className = 'delete-item secondary-content';
        linkRemove.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(linkRemove);
        taskList.appendChild(li);

        taskInput.value = '';
        
        e.preventDefault();
    }
    function removeTask (e) {
        if(e.target.parentElement.classList.contains('delete-item')){
            e.target.parentElement.parentElement.remove();
        }
    }
    function filterTask (e) {
        const text = e.target.value.toLowerCase();
        document.querySelectorAll(".collection-item").forEach(function(task) {
            const item = task.firstChild.textContent;
                if (item.toLowerCase().indexOf(text) != -1) {
                    task.style.display = "block";
                } else {
                    task.style.display = "none";
                }
  });
    }
    function removeAll (e) {
        taskList.innerHTML = '';
    }



}) ();
