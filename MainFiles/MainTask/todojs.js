function btn1(){
    var divs = document.getElementById('tasks');
     divs.style.display="block";
    }
 function btn2(){
      var divs = document.getElementById('tasks');
      divs.style.display="none";
   }

    let divs = document.getElementById('tasks');
    let inp2 = document.getElementById('inp');
    let taskDescriptionInput = document.getElementById('taskDescriptionInput');
    let taskDateInput = document.getElementById('taskDateInput');

    let inp3 = [];

    function btn3(){
    if(inp2.value.length==0)
    {
      alert("Kindly Enter Task Name!!!!") 
    }
    else
    {
       var newdiv = document.createElement("div");
       newdiv.setAttribute("id","newdiv");

       var div2 = document.createElement("h3");
       div2.innerText="Task Name :"+inp2.value;

       var div3 = document.createElement("h3");
       div3.innerText ="Description :"+taskDescriptionInput.value; 

       var div4 = document.createElement("h3");
       div4.innerText ="Date :"+taskDateInput.value;
      
       var div1 = document.createElement("div");
       div1.setAttribute("id","delete");
       var del = document.createElement("i");
       del.setAttribute("class","fa fa-trash-o");
       div1.appendChild(del);
       div1.setAttribute("onclick","removeTask(this)")

      newdiv.appendChild(div2)
      newdiv.appendChild(div3)
      newdiv.appendChild(div4)
      newdiv.appendChild(div1)

      container.appendChild(newdiv)
      inp2.value = "";
      taskDescriptionInput.value = "";
      taskDateInput.value = "";
      divs.style.display="none";
    }
  }

  function removeTask(div){
      var li = div.parentNode;
      li.parentNode.removeChild(li);
      alert("task completed");
  }
  function ColorC()
  { 
    let org = document.querySelector("#logo");
    org.style.backgroundColor="rgb(255, 69, 0,0.7)";
    org.style.border="1px solid black";

    let Org = document.querySelector('#body');
    Org.style.backgroundColor="rgb(0, 0, 0,0.7)";


    let Con = document.querySelector("#container");
    Con.style.backgroundColor="rgb(255, 69, 0,0.8)";

    let task = document.querySelector("#tasks");
    task.style.backgroundColor="rgb(255, 69, 0,0.2)";
    task.style.border="1px solid white";

    let taskC = document.querySelector("#taskcontent");
    taskC.style.backgroundColor="rgb(128, 128, 128,0.8)";

    let buttons = document.getElementsByTagName("button");
    for(let i=0; i<buttons.length;i++)
    {
    buttons[i].style.backgroundColor="white";
    buttons[i].style.color="rgb(255, 69, 0,0.8)";
    buttons[i].style.outline="1px solid black";
    }
  }