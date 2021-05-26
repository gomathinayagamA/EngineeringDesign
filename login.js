    var loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click",verify);
    function verify()
    {
        var username = document.getElementById("username").value;
        var pass = document.getElementById("pass").value;
       if(username == "Abi" && pass =="123")
       {
        window.location.href = "addSite.html";
       }
       else
       {
           alert("Invalid username or password");
       }
    }
