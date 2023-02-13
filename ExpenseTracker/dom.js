var forms=document.getElementById('form');
var lists=document.getElementById('list');
//Form submit 
forms.addEventListener('submit',addItem);
//delete Expense
lists.addEventListener('click', del);

function addItem(e){
    e.preventDefault();
    var newItem1 = document.getElementById('i1').value;
    var newItem2 = document.getElementById('i2').value;
    var newItem3 = document.getElementById('i3').value;
    var li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(`${newItem1}-${newItem2}-${newItem3}`));
    var Btn1 = document.createElement('button');
    var Btn2 = document.createElement('button');
     Btn1.className="btn btn-primary btn-sm float-right ";
     Btn2.className="btn btn-danger btn-sm float-right delete";
     Btn1.appendChild(document.createTextNode("Edit Expense"));
     Btn2.appendChild(document.createTextNode("Delete Expense"));
     li.appendChild(Btn2);
     li.appendChild(Btn1);
     lists.appendChild(li);
}
function del(e){
    if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        lists.removeChild(li);
      }
    }
}