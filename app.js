var list=document.querySelector('#list');
var progressBar = document.querySelector('#progress-bar');
var li = document.getElementsByTagName("li");
var totalTask = li.length;
var numTaskDone = 0;

list.addEventListener('click', function(ev) {
  if(ev.target.tagName === "LI") {
    ev.target.classList.toggle('checked');
  }
  updateProgressBar();
}, false);

var modal = document.getElementById('modal');

window.onclick = function(ev) {
  if(ev.target == modal) {
    modal.style.display="none";
  }
}

var addButton = document.getElementById('addShape');
addButton.addEventListener('click', function() {
  modal.style.display="block";
});

function addList() {
  var input = document.getElementById('todo');
  var todo = document.createElement("li");
  var txt = document.createTextNode(input.value);

  todo.appendChild(txt);
  list.appendChild(todo);
  input.value = "";
  updateProgressBar();
  modal.style.display="none";
}

function updateProgressBar() {
  list=document.querySelector('#list');
  li = document.getElementsByTagName("li");

  totalTask = li.length;
  numTaskDone=document.getElementsByClassName("checked").length;
  progressBar.style.width = numTaskDone/totalTask*90 + "%";
  progressBar.innerHTML = numTaskDone + " / " + totalTask + " done";
}
