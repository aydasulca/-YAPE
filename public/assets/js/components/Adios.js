const Se= (update) => {
  const form = $('<form action="#"></form>');
  const input = $('<input id="hola" type="number" name="" value="">');
  const button = $('<button class="waves-effect waves-light btn" type="button" name="button">Registrarme</button>');

  form.append(input);
  form.append(button);

  button.on('click',(e) => {
    e.preventDefault();
    //const phonw = input.val();
    //const phond = respons.data.phone;
    //console.log(respons.data.phone);
    $.post('api/resendCode/', {
      phone:"980080990",
    }, (respons) => {
      console.log(respons);
      console.log(respons.data.code);
      //console.log(phone);
    }, 'json')
})
return form;
}
/*
$.post('api/resendCode/', {
  //phone:respons.data.phone
  phone:"980080990",
}, (respons) => {
  console.log(respons);
  //console.log(phone);
}, 'json')
*/
