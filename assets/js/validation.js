$( document ).ready(function() {
    $('input[name=name]').on('blur', function() {
      var input = $(this);
      var name_length = input.val().length;
      if(name_length >= 2 && name_length <= 15){
          input.removeClass("invalid").addClass("valid");
          input.next('.komunikat').text("Wprowadzono poprawną nazwę.").removeClass("blad").addClass("ok");
      }
      else{
          input.removeClass("valid").addClass("invalid");
          input.next('.komunikat').text("Nazwa musi mieć więcej niż 2 i mniej niż 25 znaków!").removeClass("ok").addClass("blad");
          
      }
  });
   
    $('input[name=number]').on('blur', function() {
      var input = $(this);
      var name_length = input.val().length;
      if(name_length >= 7 && name_length <= 15){
          input.removeClass("invalid").addClass("valid");
          input.next('.komunikat').text("Wprowadzono poprawny numer.").removeClass("blad").addClass("ok");
      }
      else{
          input.removeClass("valid").addClass("invalid");
          input.next('.komunikat').text("Wprowadź poprawny numer telefonu").removeClass("ok").addClass("blad");
          
      }
  });
//     $('input[checkbox]').on('blur', function() {
//       var input = $(this);
//       if(input.hasClass('checked')){
//           input.removeClass("invalid").addClass("valid");
//           input.next('.komunikat').text("Zgoda została zaznaczona").removeClass("blad").addClass("ok");
//       }
//       else{
//           input.removeClass("valid").addClass("invalid");
//           input.next('.komunikat').text("Proszę zaznaczyć zgodę na przetwarzanie").removeClass("ok").addClass("blad");
          
//       }
//   });

    $('textarea[name=content]').on('blur', function() {
      var input = $(this);
      var name_length = input.val().length;
      if(name_length >= 10 && name_length <= 500){
          input.removeClass("invalid").addClass("valid");
          input.next('.komunikat').text("Poprawnie uzupełniono wiadomość").removeClass("blad").addClass("ok");
      }
      else{
          input.removeClass("valid").addClass("invalid");
          input.next('.komunikat').text("Uzupełnij treść wiadomości (min. 10 znaków, max. 500 znaków).").removeClass("ok").addClass("blad");
          
      }
  });
  $('input[name=email]').on('blur', function() {
      var input = $(this);
      var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      var is_email = pattern.test(input.val());
      if(is_email){
          input.removeClass("invalid").addClass("valid");
          input.next('.komunikat').text("Poprawnie wprowadzono email.").removeClass("blad").addClass("ok");
      }
      else{
          input.removeClass("valid").addClass("invalid");
          input.next('.komunikat').text("Wprowadź poprawny email!").removeClass("ok").addClass("blad");
      }
  });

  $('button[name=send-button]').click(function(event){
    var name = $('input[name=name]');
    var email = $('input[name=email]');
    var phone = $('input[name=number]');
    var message = $('textarea[name=content]');
    
    if(name.hasClass('valid') && email.hasClass('valid') && phone.hasClass('valid') && message.hasClass('valid')){
        alert("Pomyślnie wysłano formularz.");	
    }
    else {
        event.preventDefault();
        alert("Uzupełnij poprawnie wszystkie pola!");	
    }
});
});  