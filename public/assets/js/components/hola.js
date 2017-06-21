'use strict';
const SearchItem = (update) => {
  const title1 = $('<p class="f">Paga a quien quieras desde donde quieras, sin usar efectivo</p>');
  const con = $('<div class="col"></div>');
  const input = $('<input type="text" name="" value="">');
  const button = $('<button class="waves-effect waves-light btn" type="button" name="button">Registrarme</button>');
  const check = $('<input type="checkbox" class="filled-in" id="filled-in-box"  />')
const label = $('<label for="filled-in-box">Acepto los <span class = "green-text">Terminos y Condiciones</span></label>')
  //const check = $('<input type="checkbox" id="test5">')

  con.append(input);
  con.append(check);
  con.append(label);
 con.append(button);
 /*
  input.on('keyup', (e) => {
  });
})
  */
  const phone = input.val();
   console.log(phone);

  $.post('api/registerNumber', {
    phone: "980080992",
    terms:"true"
  },(respons) => {
    console.log(respons);
    //return data.code;
  },'json')


  button.on('click',(e) => {

    e.preventDefault();
    state.screen = "other";
    update();


})



  return con;
  //return title1;
}
