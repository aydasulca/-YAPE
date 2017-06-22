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

}

const state = {
 screen:"welcome",
 phone: null,
 name: null,
}


$( _ => {
  const root = $(".root");
  render(root);

})
