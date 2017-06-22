'use strict';

const registerCard= (update) => {
  const row = $('<div class="row heigth flex-center"></div>');
  const content = $('<div class="col s12 p-top"></div>');
  const contentImg = $('<div class="col s12 center-align"></div>');
  const img = $('<img class="img-logo" src="assets/img/icons/bcp-logo.png" alt="">');
  const title = $('<h5 class="center-align black-text">Registra tu tarjeta débito BCP</h5>');
  const text = $(' <p class="center-align gris-text">Por ahora solo aceptamos cuentas de ahorro y/o corrientes en soles</p>');
  const form = $('<form class ="p-top" action="#"></form>');
  const contentInput =$('<div class="col s12"></div>');
  const inputCard = $('<input class="" type="number" name="" value="">');
  const labelInput= $('<label class ="img-label"><img class="icon" src="assets/img/icons/card.png"></label>');
  const contentInput2= $('<div class="col s12"></div>');
  const textInput= $(' <p class="center-align font10px gris-text col s6">Fecha de Vencimiento</p>');
  const inputMes = $('<input class="col s2" type="number" name="" value="">');
  const p = $(' <p class="center-align gris-text col s1"> / </p>');
  const inputA = $('<input class="col s2" type="number" name="" value="">');
  const contentButton = $('<div class = "col s12 center-align"></div>');
  const button = $('<button class="waves-effect waves-light background-button btn" type="button" name="button">CREAR CUENTA</button>');


  row.append(content);
  contentImg.append(img);
  content.append(contentImg);
  content.append(title);
  content.append(text);
  content.append(form);
  form.append(contentInput);
  contentInput.append(labelInput);
  contentInput.append(inputCard);
  form.append(contentInput2);
  contentInput2.append(textInput);
  contentInput2.append(inputMes);
  contentInput2.append(p);
  contentInput2.append(inputA);
  form.append(contentButton);
  contentButton.append(button);

  $( button ).prop( "disabled", true );

  $(form).change(function() {
  if(inputCard.val().length === 16 && inputMes.val() <= 12 && inputMes.val() >= 1 && inputA.val() >= 17 && inputA.val() <= 24 ){
    $( button ).prop( "disabled", false );

  }else {
    $( button ).prop( "disabled", true );
  }
  })

  button.on('click',(e) => {
    e.preventDefault();

    $.post('api/registerCard/', {
    phone:state.phone.phone,
    cardNumber:inputCard.val(),
    cardMonth:inputMes.val(),
    cardYear:inputA.val(),
    cardPassword:state.password

  },(respons) => {

    console.log(respons);

    state.screen = "Screen-7";
    update();


},'json')

  })

return row;
}
