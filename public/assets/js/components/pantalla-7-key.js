'use strict';

const Key= (update) => {
  const row = $('<div class="row heigth flex-center"></div>');
  const content = $('<div class="col s12 p-top"></div>');
  const contentImg = $('<div class="col s12 center-align"></div>');
  const img = $('<img class="img-logo" src="assets/img/icons/bcp-logo.png" alt="">');
  const title = $('<h5 class="center-align black-text">Ingresa la clave de tu tarjeta</h5>');
  const text = $(' <p class="center-align gris-text ">Tarjeta ****<span class="black-text">'+state.phone.phone.slice(-4)+'</span></p>');
  const form = $('<form class ="p-top" action="#"></form>');
  const contentInput =$('<div class=""></div>');
  const input = $('<input class="" type="number" name="" value="">');
  const labelInput= $('<label class ="img-label"><img class="icon" src="assets/img/icons/lock.png"></label>');
  const contentButton = $('<div class = "col s12 center-align"></div>');
  const button = $('<button class="waves-effect waves-light background-button btn" type="button" name="button">REGISTRAR</button>');


  row.append(content);
  contentImg.append(img);
  content.append(contentImg);
  content.append(title);
  content.append(text);
  content.append(form);
  form.append(contentInput);
  contentInput.append(labelInput);
  contentInput.append(input);
  contentInput.append(contentButton);
  contentButton.append(button);

  $( button ).prop( "disabled", true );


return row;
}
