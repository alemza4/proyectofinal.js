$(function(){
    $(".error-pass, .error-email").hide();
    $(".overlay").hide();
    $(".confirmation").hide();
  })
  
  function checkEmail(email) {
    let emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailReg.test(email);
  }
  
  function validateForm() {
    let countErrors = 0;
    let emailInput = $("input[type=email]");
    let passInput = $("input[type=password]");

    
    if(!checkEmail($(emailInput).val())) {
      $(".error-email").fadeIn();
      $(".email-msg").html("Por favor, compruebe su email");
      $(emailInput).addClass("warning");
      countErrors++;
    } else {
      $(emailInput).removeClass("warning");
    
    }
  
    if(passInput.val().length < 5) {
      $(".error-pass").fadeIn();
      $(".pass-msg").html("La contraseña debe al menos 5 caracteres");
      $(passInput).addClass("warning");
      countErrors++;
    } else {
      $(passInput).removeClass("warning");
    }
  
    setTimeout(function showErrorMsg() {
      $(".error-email, .error-pass").fadeOut();
    }, 2000)
  
    if(countErrors === 0) {
     
      window.location="./page/index.html";
    }
  }
 