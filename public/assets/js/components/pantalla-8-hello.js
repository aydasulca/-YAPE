'use strict';

const Hello= (update) => {
  const row = $('<div class="row margin mora"></div>');
  const content = $('<div class="col s12 padding"></div>');
  const img = $('<img id="img-yape" src="assets/img/yape.png" alt="">');


  row.append(content);
  content.append(img);

  setTimeout(function(){
    state.screen = "welcome";
    update();
  }, 2000);

return row;
}
