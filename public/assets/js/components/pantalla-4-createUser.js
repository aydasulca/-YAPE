'use strict';

const createUser= (update) => {
  const row = $('<div class="row"></div>');
  const content = $('<div class="col s12 p-top"></div>');
  const contentImg = $('<div class="col s12 center-align"></div>');
  const img = $('<img class="img-logo" src="assets/img/icons/lockone.png" alt="">');
  const title = $('<h5 class="center-align black-text">Crea tu Usuario Yape</h5>');
  const text = $(' <p class="center-align gris-text ">Ingresa un nombre, email y clave de usuario.</p>');
  const form = $('<form class ="" action="#"></form>');
  const contentInput =$('<div class=""></div>');
  const labelName= $('<label class ="img-label"><img class="icon" src="assets/img/icons/user.png"></label>');
  const name = $('<input class="" type="text" placeholder="nombre" name="" value="">');
  const labelEmail= $('<label class ="img-label"><img class="icon" src="assets/img/icons/message-gray.png"></label>');
  const email = $('<input class="" type="email" placeholder="correo@ejemplo.com" name="" value="">');
  const labelKey= $('<label class ="img-label"><img class="icon" src="assets/img/icons/lock.png"></label>');
  const  key = $('<input class="" type="password" placeholder="Ingresa clave de 6 digitos" name="" value="">');
  const contentButton = $('<div class = "col s12 center-align"></div>');
  const button = $('<button class="waves-effect waves-light background-button btn" type="button" name="button">CREAR CUENTA</button>');
  const mensaje =$('<p class="center-align gris-text text-small">Cuida esta clave como oro, es tú acseso a Yape</p>');

  row.append(content);
  contentImg.append(img);
  content.append(contentImg);
  content.append(title);
  content.append(text);
  content.append(form);
  form.append(contentInput);
  contentInput.append(labelName);
  contentInput.append(name);
  contentInput.append(labelEmail);
  contentInput.append(email);
  contentInput.append(labelKey);
  contentInput.append(key);
  contentButton.append(button);
  form.append(contentButton);
  form.append(mensaje);

  $( button ).prop( "disabled", true );

  $(form).change(function() {
  if(name.val() != "" && email.val() != "" && key.val().length === 6 ){
    $( button ).prop( "disabled", false );

  }else {
    $( button ).prop( "disabled", true );
  }
  })



  button.on('click',(e) => {
    e.preventDefault();

    $.post('api/createUser/', {
    phone:state.phone.phone,
    name:name.val(),
    email:email.val(),
    password:key.val()

  },(respons) => {
    state.name = respons.data.name;
    state.email = respons.data.email;
    state.password = respons.data.password;
    //console.log(respons);
    state.screen = "Screen-5";
    update();

},'json')

  })


return row;
}
