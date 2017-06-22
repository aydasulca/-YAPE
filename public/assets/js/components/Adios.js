const Se= (update) => {
  const form = $('<form action="#"></form>');
  const input = $('<input id="hola" type="number" name="" value="">');

  form.append(input);
/*
  $( input).keyup(function() {
    if (input.val() == state.phone.code) {
      state.screen = "hola";
      update();
    }
  });
*/
  $.post('api/resendCode/', {
    phone:state.phone.phone,
  }, (respons) => {
    // console.log(respons.data);
    setInterval(function(){ console.log(respons.data); }, 4000);

  }, 'json')


  /*
$(input).change(function() {
  console.log(input.val());
})
*/
/*
$( input ).keypress(function() {
  var value = $( this ).val();
  console.log(value);
//  $( p ).text( value );
})
.keyup();
*/
return form;
}
