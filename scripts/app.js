$(document).ready(function() {

        $('.collapse.in').prev('.panel-heading').addClass('active');
        $('#accordion, #bs-collapse')
                .on('show.bs.collapse', function (a) {
                    $(a.target).prev('.panel-heading').addClass('active');
                })
                .on('hide.bs.collapse', function (a) {
                    $(a.target).prev('.panel-heading').removeClass('active');
                });

        if (window.innerWidth > 600) {
            document.getElementById("next-1").addEventListener("click", function(){
                window.scrollTo(0,690);
            });
            document.getElementById("next-2").addEventListener("click", function(){
                window.scrollTo(0,740);
            });
            document.getElementById("next-3").addEventListener("click", function(){
                window.scrollTo(0,790);
            });
        }

        $('span.filename').css({"float": "right", "font-size": "12px"});
        $('span.action').addClass("btn");
        $('span.action').css({"background-color": "#000000", "float": "left"});

        $('#form-submit').submit(function(e) {
            var name    = document.getElementById('name-input');
            var email   = document.getElementById('email-input');
            var message = document.getElementById('comments-input');

            console.log("Sending form");

            if (!name.value || !email.value || !message.value) {
                console.log("Please fill out all required fields");
                return false;
            } else {
                $.ajax({
                    method: 'POST',
                    url: 'https://formspree.io/matthewvilhauer@gmail.com',
                    data: $('#custom-print-form').serialize(),
                    datatype: 'json'
                });

                e.preventDefault();
                $(this).get(0).reset();
                console.log("Message sent");
            }
        });

//        document.getElementById("form-submit").addEventListener("click", function(){
//            console.log("Form has been submitted.");
//            $('.custom-printing-page').remove();
//            window.scrollTo(0,0);
//            $('.HL-HomeContentBanner').append("<h1 class='thanks'>Thanks for your inquiry!</h1><h3>We&rsquo;re a small business, and we understand that daily life can be hectic. The best way to make sure the printing process goes smoothly is to be open and get in touch with any questions/comments/concerns you may have. Feel free to give a call at (415) 564-1000, or shoot an email to customs@sanfranpsycho.com.</h3>");
//        });

    });