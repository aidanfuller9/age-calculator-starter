$(".calculatebutton").click(function() {
  let name = $(".name").val();
  let year = $(".year").val();
  let current_year = new Date().getFullYear() 
  var age = current_year - year; 
  $(".message").append(`<p>Hello ${name}, you are ${age} years old.  </p>`);
}); 
