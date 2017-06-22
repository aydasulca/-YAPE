'use strict';

const usarYape= (update) => {
  const row = $('<div class="row background-button heigth flex-center"></div>');
  const content = $('<div class="col s12"></div>');
  const contentImg = $('<div class="col s12 center-align"></div>');
  const img = $('<img class="img-logo" src="assets/img/icons/check.png" alt="">');
  const text = $(' <p class="center-align mora-text">¡Bien!</p>');
  const text1 = $(' <p class="center-align mora-text">Ahora puedes usar Yape</p>');

  row.append(content);
  content.append(contentImg);
  contentImg.append(img);
  content.append(text);
  content.append(text1);

  setTimeout(function(){
    state.screen = "Screen-6";
    update();
  }, 3000);

return row;
}
