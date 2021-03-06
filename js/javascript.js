// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

//Init Scrollspy
$('body').scrollspy({ target: '#main-nav' });

//add smooth scrolling
$('#main-nav a').on('click', function (e) {
    //check for a hash value
    if (this.hash !== '') {
        //prevent default behaviour
        e.preventDefault();

        //store hash
        const hash = this.hash;

        //animate smooth scroll
        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top,
            },
            900,
            function () {
                //add hash to url after scroll
                window.location.hash = hash;
            }
        );
    }
});