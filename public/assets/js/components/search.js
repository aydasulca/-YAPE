/*
'use strict';
const SearchItem = (update) => {
  const title1 = $('<p class="f">Paga a quien quieras desde donde quieras, sin usar efectivo</p>');
  const con = $('<div class="col"></div>');
  const input = $('<input type="text" name="" value="">');
  //const check = $('<input type="checkbox" id="test5">')

  con.append(input);

  input.on('keyup', (e) => {
  const phone = input.val();
   console.log(phone);

  $.post('api/registerNumber', {
    phone: phone,
    terms:"true"
  },(respons) => {
    console.log(respons);
    //return data.code;
  },'json')

  })






  return con;
  //return title1;
}

*/

const Search = (update) => {
  //const container = $('<div class="modal-container"></div>');
  const row = $('<div class="row"></div>');
  const content = $('<div class="col s12"></div>');
  const carocont = $('<div class="carousel carousel-slider center col s10 offset-s1" data-indicators="true"></div>');
  const caro1 = $('<div class="carousel-item"></div>');
  const img1 = $('<img class="img-carousel" src="assets/img/icons/icon-people.png" alt="">');
  const text1 = $('<h2 class="f">Paga a tus amigos</h2>');
  const title1 = $('<p class="f">Paga a quien quieras desde donde quieras, sin usar efectivo</p>');
  const caro2 = $('<div class="carousel-item"></div>');
  const img2 = $('<img class="img-carousel" src="assets/img/icons/happy-person.png" alt="">');
  const text2= $('<h2 class="f">Sin un numero de cuenta</h2>');
  const title2 = $(' <p class="f">Elige a quién pagar desde tu lista de contactos</p>');
  const caro3 = $('<div class="carousel-item"></div>');
  const img3 = $('<img class="img-carousel" src="assets/img/icons/group-people.png" alt="">');
  const text3= $('<h2 class="f">Gratis y Seguro</h2>');
  const title3 = $(' <p class="f">La transferencia es inmediata y gratuita de una cuenta a otra</p>');
  const button = $('<button class="waves-effect waves-light btn" type="button" name="button">Registrarme</button>');
  const containerNum = $('<div class="container-num"></div>');


  row.append(content);
  content.append(carocont);
  content.append(button);
  carocont.append(caro1);
  caro1.append(img1);
  caro1.append(text1);
  caro1.append(title1);
  carocont.append(caro2);
  caro2.append(img2);
  caro2.append(text2);
  caro2.append(title2);
  carocont.append(caro3);
  caro3.append(img3);
  caro3.append(text3);
  caro3.append(title3);

  $( _ => {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  });

  button.on('click',(e) => {

    e.preventDefault();
    state.screen = "other-page";
    update();

  });

/*
  button.on('click', (e) => {
    e.preventDefault();
    row.empty();
    row.append(SearchItem(update));
    //alert("hola");
  })
*/
  return row;
}
