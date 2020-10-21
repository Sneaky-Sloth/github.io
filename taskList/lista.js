let list = [];
let holder = document.getElementById("list");


function addTask() {
  let newTask = document.getElementById("pole1").value;
  console.log(newTask);
  list.push(newTask);
  holder.appendChild(makeLi(list));
}

function makeLi() {
  let item = document.createElement('li');
  item.appendChild(document.createTextNode(list[list.length-1]));
  let button = document.createElement('button');
  button.appendChild(document.createTextNode("Usuń"));
  button.setAttribute("class","hide");
  button.setAttribute("id","btn"+ (list.length-1));

  $(document).on('click','.hide', function() {
    $(this).parent().remove();    
  });
  item.appendChild(button);

  return item;
}

