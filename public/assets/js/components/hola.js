'use strict';

const Hola = (update) => {

  const condicion = $('<div class=""></div>');
  const form = $('  <form action="#"></form>')
  const input = $('<input id="hola" type="number" name="" value="">');
  const button = $('<button class="waves-effect waves-light btn" type="button" name="button">Registrarme</button>');
  const check = $('<input type="checkbox" class="filled-in" id="filled-in-box"  />')
  const label = $('<label for="filled-in-box">Acepto los <span class = "green-text">Terminos y Condiciones</span></label>')

  form.append(input);
  form.append(check);
  form.append(label)
  form.append(button);
  condicion.append(form);

$( button ).prop( "disabled", true );
// $( check ).prop( "checked" );

$(form).change(function() {
console.log(check.prop( "checked" ));
//$( button ).prop( "disabled", false );
if(input.val().length === 9 && check.prop( "checked" ) == true){
  $( button ).prop( "disabled", false );

}else {
  $( button ).prop( "disabled", true );
}
})


/*
  //console.log(input.val().length);
})
*/
//console.log($( check ).prop( "checked" ));
/*
$(check).change(function(){
  $( button ).prop( "disabled", false );
});
*/
/*
button.on('click',(e) => {
  alert($('input:checkbox:checked').val());
  alert($("#hola").val());
})
*/
/*
   */
/*
button.on('click',(e) => {
  //alert($('input:checkbox:checked').val());
  //console.log($('input:checkbox:checked').val());
  console.log($("#hola").val());
  $("#hola").val();
})
*/

/*
   e.preventDefault();
   state.screen = "other";
   update();
})
*/
  /*
  input.on('keyup', (e) => {

  $.post('api/registerNumber', {
    phone: phone,
    terms:"true"
  },(respons) => {
    console.log(respons);
    //return data.code;
  },'json')

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
return condicion;
}
