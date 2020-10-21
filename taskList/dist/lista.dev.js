"use strict";

var list = [];
var holder = document.getElementById("list");

function addTask() {
  var newTask = document.getElementById("pole1").value;
  console.log(newTask);
  list.push(newTask);
  holder.appendChild(makeLi(list));
}

function makeLi() {
  var item = document.createElement('li');
  item.appendChild(document.createTextNode(list[list.length - 1]));
  var button = document.createElement('button');
  button.appendChild(document.createTextNode("Usuń"));
  button.setAttribute("class", "hide");
  button.setAttribute("id", "btn" + (list.length - 1));
  $(document).on('click', '.hide', function () {
    $(this).parent().remove();
  });
  item.appendChild(button);
  return item;
}