const Se= (update) => {
  const form = $('<form action="#"></form>');
  const input = $('<input id="hola" type="number" name="" value="">');
  const button = $('<button class="waves-effect waves-light btn" type="button" name="button">Registrarme</button>');

  form.append(input);
  form.append(button);

  button.on('click',(e) => {
    e.preventDefault();
    
    $.post('api/resendCode/', {
      phone:state.phone.phone,
    }, (respons) => {
      console.log(respons);
      console.log(input.val());
      console.log(state.phone.code);

      if (input.val() == state.phone.code) {
        state.screen = "hola";
        update();
      }

    }, 'json')
})
return form;
}
