//some add-on jquery functions
$(document).ready(function(){
  $('#subform').on('submit', function(){

    var lname = $('#lname').val(),
    fname = $('#fname').val(),
    phone = $('#phone').val(),
    email = $('#email').val();

    var time = new Date();
    var t = time.getDate()  + "." + (time.getMonth()+1) + "." + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes();

    var client = {lname: lname, fname: fname, phone: phone, email: email, time: t};


    $.ajax({
      type: 'POST',
      url: '/',
      data: client,
      success: function(data){
        //relocate to the successfull registration page :)
        location.reload();
      }
    });
  });
});
