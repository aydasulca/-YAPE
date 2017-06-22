'use strict';

const registerNumber = (update) => {
  const row = $('<div class="row"></div>');
  const content = $('<div class="col s12 p-top"></div>');
  const contentImg = $('<div class="col s12 center-align"></div>');
  const img = $('<img class="img-logo" src="assets/img/icons/phone.png" alt="">');
  const title = $('<h5 class="center-align black-text">Para comenzar validemos tu número</h5>');
  const text = $(' <p class="center-align gris-text ">Recibirás un SMS con un código de validación.</p>');
  const form = $('<form class ="p-top" action="#"></form>');
  const contentInput =$('<div class=""></div>');
  const input = $('<input class="" type="number" name="" value="">');
  const labelInput= $('<label class =""><img class="label-input" src="assets/img/icons/phoneandnumber.png"></label>');
  const checkbox = $('<input type="checkbox" class="filled-in" id="filled-in-box" />');
  const label = $('<label for="filled-in-box">Acepto los <span class = "green-text">Terminos y Condiciones</span></label>');
  const contentButton = $('<div class = "col s12 center-align"></div>');
  const button = $('<button class="waves-effect waves-light background-button btn" type="button" name="button">continuar</button>');

  row.append(content);
  contentImg.append(img);
  content.append(contentImg);
  content.append(title);
  content.append(text);
  content.append(form);
  form.append(contentInput);
  contentInput.append(labelInput);
  contentInput.append(input);
  form.append(checkbox);
  form.append(label);
  contentButton.append(button);
  form.append(contentButton);


$( button ).prop( "disabled", true );

$(form).change(function() {
if(input.val().length === 9 && checkbox.prop( "checked" ) == true){
  $( button ).prop( "disabled", false );

}else {
  $( button ).prop( "disabled", true );
}
})


button.on('click',(e) => {
  e.preventDefault();
  const phone = input.val();
  const terms = checkbox.prop( "checked" ) == true;

  $.post('api/registerNumber/', {
    phone: phone,
    terms: terms
  },(respons) => {
    state.phone =respons.data;
    console.log(state.phone);
    if (respons.success == true) {
      alert(respons.message);
      state.screen = "Screen-3";
      update();
    }else {
      alert(respons.message);
    }
  },'json')

})

return row;
}
