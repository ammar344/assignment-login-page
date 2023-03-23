function login(){
    event.preventDefault()
    const getName = document.getElementById('fullName').value
    const getEmail = document.getElementById('userEmail').value
    const getPassword = document.getElementById('userPassword').value
    if (!getName) {
        Toastify({
            text: "Please Enter Your Full Name",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #305e80, #097976)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
      }
       if (getEmail !== "ammar@gmail.com") {
        Toastify({
            text: "Please Enter Correct Email",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #305e80, #097976)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
      }
      if (getPassword !== "12345678") {
        Toastify({
            text: "Please Enter the Correct Password",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #305e80, #097976)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          return;
      }else{
      window.location.href ='homepage.html'
      
    }
    
}
