const Se= (update) => {
  const form = $('<form action="#"></form>');
  const input = $('<input id="hola" type="number" name="" value="">');
  //const button = $('<button class="waves-effect waves-light btn" type="button" name="button">Registrarme</button>');

  form.append(input);
  //form.append(button);
  //console.log(input.val());
  //console.log(state.phone.code);

  /*
  $.post('api/resendCode/', {
    phone:state.phone.phone,
  }, (respons) => {
    // console.log(respons.data);
    if (respons.success == true) {

    }
    setInterval(function(){ console.log(respons.data.code.gen()); }, 3000);

  }, 'json')

  */
  $( input).keyup(function() {
    //alert( "Handler for .keyup() called." );
    if (input.val() == state.phone.code) {
      state.screen = "hola";
      update();
    }
  });
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
