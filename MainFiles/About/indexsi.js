      let fom = document.forms;
       var ar = JSON.parse(localStorage.getItem('user')) || [];

  fom[0].addEventListener("submit",( )=>{
    event.preventDefault();
    let email = event.target[0].value;
    let pass = event.target[1].value;
    if(/^[a-zA-Z0-9]+@[a-zA-z0-9]+\.[a-zA-z]{2,4}$/.test(email) &&  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass))
    {
      let obj ={
      usemail : email,
      usepas : pass
           };
        ar.push(obj);
        localStorage.setItem('user', JSON.stringify(ar));
        alert("Sign Up Successfully");
        window.location.assign("index.html")
     }
    else{
      alert("Enter Valid Email Address or Password")
    }
  });
  console.log(ar);