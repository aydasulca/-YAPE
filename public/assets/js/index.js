'use strict';

const render = (root) => {
  const wrapper = $('<div class="wrapper"></div>');
  root.append(wrapper);
  wrapper.append(Header());
  wrapper.append(Search());

}

$( _ => {
  const root = $(".root");
  render(root);

})
/*
$.post('api/registerNumber', {
  phone:"957303269",
  terms:"true"
},(respons) => {
  console.log(respons);
},'json')
*/
