'use strict';

const resenCode= (update) => {

  const row = $('<div class="row"></div>');
  const content = $('<div class="col s12 p-top"></div>');
  const contentImg = $('<div class="col s12 center-align"></div>');
  const img = $('<img class="img-logo" src="assets/img/icons/message.png" alt="">');
  const title = $('<h5 class="center-align black-text">Ahora ingresa tu código</h5>');
  const text = $(' <p class="center-align gris-text ">Enviamos un SMS con el código de validación al número <span class="black-text">'+state.phone.phone+'</span></p>');
  const form = $('<form class ="p-top" action="#"></form>');
  const contentInput =$('<div class=""></div>');
  const input = $('<input class="" type="number" placeholder = "- - - - -" name="" value="">');
  const labelInput= $('<label class =""><img class="img-input" src="assets/img/icons/lock.png"></label>');
  const mensaje =$('<p class="center-align gris-text text-small">Reintentar en <span></span></p>');

  row.append(content);
  contentImg.append(img);
  content.append(contentImg);
  content.append(title);
  content.append(text);
  content.append(form);
  form.append(contentInput);
  contentInput.append(labelInput);
  contentInput.append(input);
  content.append(mensaje);



  form.append(input);
/*
  const reloj = $('<span class="counter">21</span>')
  const relojInterval = setInterval(_ => {
    const seg = ParseInt(reloj.html());
    if (seg -1 > 0) {
      reloj.html(seg-1);
    } else {
      $.post('api/resendCode',{
        phone: state.phone.phone,
      },(response) => {
        if (response.success) {
          reloj.html(21);
          state.phone.phone = response.data;
        }
      });
    }
  },1000);

  */
  $( input).keyup(function() {
    if (input.val() == state.phone.code) {
      state.screen = "Screen-4";
      /*clearInterval(relojInterval);*/
      update();
    }
  });

/*
  $.post('api/resendCode/', {
    phone:state.phone.phone,
  }, (respons) => {
     //console.log(state.phone);
     state.phone =respons;
    //state.phone=respons
    //setInterval(function(){ console.log(respons.data); }, 21000);

  }, 'json')

*/
return row;
}
