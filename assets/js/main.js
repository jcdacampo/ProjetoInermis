$(document).ready(function() {
    //digitar
    new TypeIt('#slogan', {
        speed: 110,
        startDelay: 1200,
        autoStart: false
    })
    .type('We build <span>GAMES</span>.')
    .pause(1400)
    .delete(6)
    .type('the <span>FUTURE</span>.')
    .pause(1400)
    .delete(7)
    .type('are <span>INERMIS</span>.')

    //animar conforme o scroll
    AOS.init();

    
});