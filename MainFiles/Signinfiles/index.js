let fom = document.forms;
  var ar = JSON.parse(localStorage.getItem('user')) || [];
  fom[0].addEventListener("submit",( )=>{
    event.preventDefault();
    let email = event.target[0].value;
    let pass = event.target[1].value;
  if(/^[a-zA-Z0-9]+@[a-zA-z0-9]+\.[a-zA-z]{2,4}$/.test(email) &&  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass))
  {
      var isMatched = false;
      for (var i = 0; i < ar.length; i++)
       {
        if (email === ar[i].usemail && pass === ar[i].usepas) {
          isMatched = true;
          break;
        }
        else if(email!==ar[i].usemail && pass === ar[i].usepas)
        {
          document.getElementById('email').style.border = "2px solid red";
          alert("email not valid");
        }
        else if(email===ar[i].usemail && pass !== ar[i].usepas){
           document.getElementById('password').style.border="2px solid red";
           alert("password not valid");
        }
        else{
          alert(" User not Registered! \n SignUp");
        }
      }
      if (isMatched) {
          window.location.href = 'todo.html';
          target[0].value='';
          target[1].value='';
         } 
      }
    else{
      alert("Enter Valid Email Address or Password")
    }
  });
