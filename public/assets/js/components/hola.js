'use strict';
const Hola = (update) => {

  const condicion = $('<div class=""></div>');
  const form = $('<form action="#"></form>');
  const input = $('<input id="hola" type="number" name="" value="">');
  const button = $('<button class="waves-effect waves-light btn" type="button" name="button">Registrarme</button>');
  const check = $('<input type="checkbox" class="filled-in" id="filled-in-box" />');
  const label = $('<label for="filled-in-box">Acepto los <span class = "green-text">Terminos y Condiciones</span></label>');

  form.append(input);
  form.append(check);
  form.append(label);
  form.append(button);
  condicion.append(form);

$( button ).prop( "disabled", true );

$(form).change(function() {
if(input.val().length === 9 && check.prop( "checked" ) == true){
  $( button ).prop( "disabled", false );

}else {
  $( button ).prop( "disabled", true );
}
})


button.on('click',(e) => {
  e.preventDefault();
  const phone = input.val();
  const terms = check.prop( "checked" ) == true;

  $.post('api/registerNumber/', {
    phone: phone,
    terms: terms
  },(respons) => {
    state.phone =respons.data;
    console.log(state.phone);
  //  console.log(respons);
  //  console.log(respons.success);
  //  console.log(respons.message);
    //console.log(respons.data.phone);


    if (respons.success == true) {
      alert(respons.message);
      //state.screen = respons.data.code;
      state.screen = "other";
      //console.log();
      update();
    }else {
      alert(respons.message);
    }
  },'json')

})
/*
$( input ).keypress(function() {
  var value = $( this ).val();
  console.log(value);
//  $( p ).text( value );
})
.keyup();
*/
return condicion;
}
