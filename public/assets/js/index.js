'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper"></div>');
	root.append(wrapper);
  wrapper.append(Header());
  //wrapper.append(Search());

  const update = (function(){
    render(root);
  })
  if (state.screen == "welcome") {
    wrapper.append(Search(update)); //LE PASO LA FUNCION UPDATE
  } else if (state.screen == "other-page") {
    wrapper.append(Hola(update));
  }

}

const state = {
 screen:"welcome"
}


$( _ => {
  const root = $(".root");
  render(root);

})



/*
const render = (root) => {
const wrapper = $('<div class="wrapper"></div>');
root.append(wrapper);
wrapper.append(Header());
wrapper.append(Search());

}
*/
/*
$.post('api/registerNumber', {
phone:"957303269",
terms:"true"
},(respons) => {
console.log(respons);
},'json')
*/
