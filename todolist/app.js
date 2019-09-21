(function() {
  let taskInput = document.getElementById('taskInput');
  let taskList = document.getElementById('taskList');

  taskForm.addEventListener('submit', function(event) {
    var txt = taskInput.value;
    taskInput.value = '';
    if (txt == '') {
      var enter = prompt('Введите текст, строка пустая');
      if (enter == '' || enter == null) {
        alert('Внимание, ну пусто же!');
        taskInput.value = '';
      }
      taskInput.value = enter;
    } else {
      taskList.innerHTML =
        taskList.innerHTML +
        '<div>' +
        txt +
        '<span class="removeBtn"></span></div><br/><hr class="line"/>';

      taskList.addEventListener('click', e => {
        e.preventDefault();
        const removeBtn = e.target;
        if (removeBtn.nodeName.toLowerCase() === 'span') {
          removeBtn.parentNode.remove();
          var ln = document.querySelector('.line');
          ln.remove();
        }
      });
    }
    event.preventDefault();
  });
})();
