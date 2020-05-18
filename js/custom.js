/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v1.0.2
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */

/*----------- CUSTOM JS SCRIPTS -----------*/
(function($) {
  'use strict';
  $(function() {
    // Code here executes When the DOM is loaded...

  });
  $(window).on('load', function() {
    // Code here executes When the page is loaded
    let contentTitle = document.querySelector("#content-title");
    contentTitle.textContent = `Yo soy Juan Henao diseñador UX/UI y desarrollador web`;

    let contentDescription = document.querySelector("#content-description");
    contentDescription.innerHTML = `
    Soy un programador independiente con sede en Colombia y he estado construyendo apps webs notables durante años, 
    tengo habilidades en Análisis de requisitos de software, Trabajo en equipo rápido, responsable y organizado.
    <span class="content-description-span">"Me gusta tomar problemas y convertirlos en diseños de interfaz simples, hermosos y funcionales”</span>  .  Mis funciones consisten en 
    Fabricar soluciones dinámicas, tengo conocimientos en Ruby, Ruby on Rails, Javascript, ReactJs ,Html ,Css 
    tengo habilidades en Illustrator, After effects, Cinema 4d , Photoshop entre otros programas.
    En mis tiempos libres me gusta la edición, producción, animación musicalización de vídeos y todo lo relacionado 
    con elementos multimedia.
    `;

    let ingleInfoName = document.querySelector("#single-info-name");
    ingleInfoName.textContent = `Juan Henao Rendón`;

    let singleinfoEmail = document.querySelector("#single-info-email");
    singleinfoEmail.textContent = `juanhenao@webcreators.dev`;

    let singleInfoPhone = document.querySelector("#single-info-phone");
    singleInfoPhone.textContent = `3023929614`;

    let sectionTitle = document.querySelector("#section-title");
    sectionTitle.textContent = `Acerca de mi`;

    let singleInfoCity = document.querySelector("#single-info-city");
    singleInfoCity.textContent = `Envigado-Antioquia`;

    let whatMyClientsThinks = document.querySelector("#what-my-clients-thinks");
    whatMyClientsThinks.textContent = `Qué piensan mis clientes`;



  });
}(jQuery));




