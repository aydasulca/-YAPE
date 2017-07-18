'use strict';

const toRegister = (update) => {
  const container = $('<div class="carousel-container"></div>');
  const row = $('<div class="row center-block"></div>');
  const content = $('<div class="col s12"></div>');
  const carousel = $('<div class="carousel carousel-slider center col s10 offset-s1" data-indicators="true"></div>');
  const contentCarousel1 = $('<div class="carousel-item"></div>');
  const img1 = $('<img class="img-carousel" src="assets/img/icons/icon-people.png" alt="">');
  const title1 = $('<h2 class="black-text">Paga a tus amigos</h2>');
  const text1 = $('<p class="gris-text">Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');
  const contentCarousel2 = $('<div class="carousel-item"></div>');
  const img2 = $('<img class="img-carousel" src="assets/img/icons/happy-person.png" alt="">');
  const title2= $('<h2 class="black-text font-title">Sin un número de cuenta</h2>');
  const text2 = $(' <p class="gris-text">Elige a quién pagar desde tu lista de contactos.</p>');
  const contentCarousel3 = $('<div class="carousel-item"></div>');
  const img3 = $('<img class="img-carousel" src="assets/img/icons/group-people.png" alt="">');
  const title3= $('<h2 class="black-text">Gratis y Seguro</h2>');
  const text3 = $(' <p class="gris-text">La transferencia es inmediata y gratuita de una cuenta a otra.</p>');
  const contentButton = $('<div class=" col s12 center-align"></div>');
  const button = $('<button class="waves-effect waves-light btn background-button btn-white" type="button" name="button">Registrarme</button>');

  container.append(row);
  row.append(content);
  content.append(carousel);
  contentButton.append(button);
  content.append(contentButton);
  carousel.append(contentCarousel1);
  contentCarousel1.append(img1);
  contentCarousel1.append(title1);
  contentCarousel1.append(text1);
  carousel.append(contentCarousel2);
  contentCarousel2.append(img2);
  contentCarousel2.append(title2);
  contentCarousel2.append(text2);
  carousel.append(contentCarousel3);
  contentCarousel3.append(img3);
  contentCarousel3.append(title3);
  contentCarousel3.append(text3);

  $( _ => {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  });

  button.on('click',(e) => {
    e.preventDefault();
    state.screen = "Screen-2";
    update();
  });

  return container;
}
