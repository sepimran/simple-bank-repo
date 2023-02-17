document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;

    const passField = document.getElementById('password');
    const userPass = passField.value;

    if(userEmail === 'admin@gmail.com' && userPass === '1234'){
        window.location.href = "bank.html";
    }else if (userEmail === 'admin@gmail.com'){
        alert("password: 1234");
    }else if( userPass === '1234'){
        
        alert("email: admin@gmail.com");
    }else{
        alert("email: admin@gmail.com & password: 1234");
    }
});