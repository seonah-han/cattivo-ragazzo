$(function() {


    let headerLoad = $.get("/header.html", function(data) {
        $('#header').html(data);
    });

    let footerLoad = $.get("/footer.html", function(data) {
        $('#footer').html(data);
    });

    let flashLoad = $.get("/flash.html", function(data) {
        $('#flash').html(data);
    });

    $.when(headerLoad, footerLoad, flashLoad)
        .done(function() {

            /*-----------------------WHAT HAPPENS---------------------------*/
            // $('#suit-selection').fullpage();
            /*======================================*/
            /*              NAVIGATION              */
            /*======================================*/
            $('#nav-mini').on("click", function() {
                $('#footer').toggleClass('display-toggle');
                $('.grid a').toggleClass('display-toggle');
                $('.nav-mobile').toggleClass('nav-toggle');
                $(this).toggleClass("nav-close");
                $('.content').toggleClass('stopscroll');
            });

            /*======================================*/
            /*              LOGO EFFECT             */
            /*======================================*/

            // let tl = new TimelineMax();
            // tl.pause();
            // tl.to('#letters-cattivo', 0.3, { x: -35 })
            //     .to('#letters-ragazzo', 0.3, { x: 35 }, '-=0.3')

            // $('#logo').mouseenter(function() {
            //     tl.play();
            // })
            // $('#logo').mouseleave(function() {
            //     tl.reverse();
            // })

            let tl1 = new TimelineMax();
            let tl2 = new TimelineMax();
            let cattivoArray = [$('#logo-letter-1'), $('#logo-letter-2'), $('#logo-letter-3'), $('#logo-letter-4'), $('#logo-letter-5'), $('#logo-letter-6'), $('#logo-letter-7')];
            let raggazoArray = [$('#logo-letter-8'), $('#logo-letter-9'), $('#logo-letter-10'), $('#logo-letter-11'), $('#logo-letter-12'), $('#logo-letter-13'), $('#logo-letter-14')];


            let maxDistance = -100;
            let distanceBtw = maxDistance / 7;
            let duration = 0.3;
            // let minusDuration = '-' + String(duration);
            let timeBtw = '-=.27';
            tl1.pause();
            tl2.pause();
            tl1.to('#logo-letter-1', duration, { x: distanceBtw * 7, ease: Power3.easeOut })
                .to('#logo-letter-2', duration, { x: distanceBtw * 6, ease: Power3.easeOut }, timeBtw)
                .to('#logo-letter-3', duration, { x: distanceBtw * 5, ease: Power3.easeOut }, timeBtw)
                .to('#logo-letter-4', duration, { x: distanceBtw * 4, ease: Power3.easeOut }, timeBtw)
                .to('#logo-letter-5', duration, { x: distanceBtw * 3, ease: Power3.easeOut }, timeBtw)
                .to('#logo-letter-6', duration, { x: distanceBtw * 2, ease: Power3.easeOut }, timeBtw)
                .to('#logo-letter-7', duration, { x: distanceBtw * 1, ease: Power3.easeOut }, timeBtw)

            tl2.to('#logo-letter-14', duration, { x: -distanceBtw * 7, ease: Power3.easeOut })
                .to('#logo-letter-13', duration, { x: -distanceBtw * 6, ease: Power3.easeOut }, timeBtw)
                .to('#logo-letter-12', duration, { x: -distanceBtw * 5, ease: Power3.easeOut }, timeBtw)
                .to('#logo-letter-11', duration, { x: -distanceBtw * 4, ease: Power3.easeOut }, timeBtw)
                .to('#logo-letter-10', duration, { x: -distanceBtw * 3, ease: Power3.easeOut }, timeBtw)
                .to('#logo-letter-9', duration, { x: -distanceBtw * 2, ease: Power3.easeOut }, timeBtw)
                .to('#logo-letter-8', duration, { x: -distanceBtw * 1, ease: Power3.easeOut }, timeBtw)


            $('#logo').mouseenter(function() {
                tl1.play();
                tl2.play();
            })
            $('#logo').mouseleave(function() {
                tl1.reverse();
                tl2.reverse();
            })



            /*======================================*/
            /*              FLASH ANIMATION         */
            /*======================================*/

            if ($('body.play-flash').length > 0) {

                $('#header').css("background", "rgba(20, 21, 19,0.3)");
                $('#header *').css("background", "transparent");
                $('.line01').css("background", 'white');
                $('.line02').css("background", 'white');
                $('.line03').css("background", 'white');
                $('.nav-mobile').css("background", 'var(--headerbg)')

                // ==========================================================================
                if (sessionStorage.getItem('playFlash') === null) {
                    console.log('flash animation playing');

                    let tlFlash = new TimelineMax();
                    let distanceSeperated = 10;
                    let cattivoArray = [$('#l1'), $('#l2'), $('#l3'), $('#l4'), $('#l5'), $('#l6'), $('#l7')];

                    let raggazoArray = [$('#l8'), $('#l9'), $('#l10'), $('#l11'), $('#l12'), $('#l13'), $('#l14')]
                    raggazoArray.reverse();

                    // tlFlash.pause();
                    tlFlash.set("#header", { css: { 'opacity': '0' } });
                    tlFlash.set('#footer', { css: { 'display': 'none' } });
                    tlFlash.set('#flash', { css: { 'display': 'block' } });

                    tlFlash.fromTo("#head-outline", 5, { drawSVG: '0%' }, { drawSVG: "100%" })
                    tlFlash.to("#head-fill", 4, { fillOpacity: 1, ease: Power0.easeNone })

                        .staggerFromTo(cattivoArray, 3, { x: 30 }, { fillOpacity: 1, x: -40, ease: Power3.easeOut }, 0.4, '-=3.8')
                        .staggerFromTo(raggazoArray, 3, { x: -30 }, { fillOpacity: 1, x: 40, ease: Power3.easeOut }, 0.4, '-=5.3')

                        .to('#flash', 2.5, { opacity: 0 }, '-=1')
                        .fromTo('#header', 0.7, { opacity: 0, y: -20 }, { opacity: 1, y: 0 }, '-=1')

                        .set('#flash', { css: { 'display': 'none' } })

                        .set('#footer', { css: { 'display': 'block' } }, '+=2');


                    sessionStorage.setItem('playFlash', 'false');

                } else {
                    console.log('flash animation skipped');
                }
            }


            /*======================================*/
            /*              FOOTER BUTTON           */
            /*======================================*/


            let plusButton = $('#plus-button'),
                pressButton = $('#press-button'),
                eventButton = $('#event-button'),
                shopButton = $('#shop-button'),
                buttonArray = [shopButton, eventButton, pressButton],
                plusIcon = $('#plus-icon'),
                plusCircle = $('#plus-circle'),
                isClicked = false;

            TweenLite.set(pressButton, { transformOrigin: '50% 50%' })
            TweenLite.set(shopButton, { transformOrigin: '50% 50%' })
            TweenLite.set(eventButton, { transformOrigin: '50% 50%' })
            TweenLite.set(plusIcon, { transformOrigin: '50% 50%', x: -1, y: -1 })
            TweenLite.set(plusCircle, { transformOrigin: '50% 50%', scale: 0.8 })
            // TweenLite.set(pressButton, {transformOrigin:'50% 50%'})



            plusButton.on("click", function() {

                if (!isClicked) {
                    let tlFooterBtn = new TimelineMax();
                    tlFooterBtn.to(plusIcon, 0.2, { transformOrigin: '50% 50%', rotation: 45 })
                        .to(plusCircle, 0.8, { scale: 1, ease: Elastic.easeOut.config(1, 0.75) }, '-=0.2')
                        .staggerFromTo(buttonArray, 0.2, { y: 200, opacity: 0 }, { scale: 1, y: 0, opacity: 1 }, 0.1, '-=0.7')
                    // window.alert("hello")

                } else {
                    TweenMax.to(plusIcon, 0.2, { rotation: 0 })
                    TweenMax.to(plusCircle, 0.8, { scale: 0.8, ease: Elastic.easeOut.config(1, 0.75) })
                    TweenMax.to(shopButton, 0.25, { scale: 0.9, y: 200, opacity: 0 })
                    TweenMax.to(eventButton, 0.25, { scale: 0.9, y: 400, opacity: 0 }, '+=0.5')
                    TweenMax.to(pressButton, 0.25, { scale: 0.9, y: 600, opacity: 0 }, '+=0.5')


                }
                isClicked = !isClicked;
            })

            // pressButton.on("hover", function(){
            //  window.alert("hello")
            //  $('#press-icon').css("fill", "#b0382a");
            // })
            pressButton.mouseenter(function() {
                $('#press-icon').css("fill", "#b0382a");
                $('#press-text').css("fill", "#b0382a");
            })

            pressButton.mouseleave(function() {
                $('#press-icon').css("fill", "white");
                $('#press-text').css("fill", "white");
            })

            eventButton.mouseenter(function() {
                $('#event-icon').css("fill", "#b0382a");
                $('#event-text').css("fill", "#b0382a");
            })

            eventButton.mouseleave(function() {
                $('#event-icon').css("fill", "white");
                $('#event-text').css("fill", "white");
            })
            shopButton.mouseenter(function() {
                $('#shop-icon').css("fill", "#b0382a");
                $('#shop-text').css("fill", "#b0382a");
            })

            shopButton.mouseleave(function() {
                $('#shop-icon').css("fill", "white");
                $('#shop-text').css("fill", "white");
            })






            /*======================================*/
            /*              ABOUT                   */
            /*======================================*/

            // let legacyLogo = $('#legacy-logo');
            if ($('body.about-animation').length > 0) {
                $('.demo').lazyView();
                console.log('hello');
                let tlAbout = new TimelineMax();

                // let timelineArray = [$('.tl-1'), $('.tl-2'), $('.tl-3'), $('.tl-4'), $('.tl-5')]


                tlAbout.to('.scroll-indicator', 1, { opacity: 0 })
                    .fromTo("#legacy-logo", 0.6, { y: 200 }, { y: 0, opacity: 1 }, '-=0.5')
                    .to('#bar', 2, { css: { 'height': '100%' } }, '+=0.1')
                    // .staggerTo(timelineArray, 2.3, { y: -20, opacity: 1 }, 0.6, '-=1.5')
                    .to("#now", 2, { opacity: 1 }, '-=3')

                let controller = new ScrollMagic.Controller();
                let tween = tlAbout;
                let scene = new ScrollMagic.Scene({
                        triggerElement: '#about-legacy',
                        triggerHook: .99
                    })
                    .setTween(tween)
                    .addTo(controller)

                var tlQuote = new TimelineLite, 
    mySplitText = new SplitText("#quote", {type:"words,chars"}), 
    chars = mySplitText.chars;
    tlQuote.staggerFrom(chars, 1, {opacity:0, x: "+=30px",  ease: Power1.easeOut}, 0.012, "-=0.15");



            }


            /*======================================*/
            /*              CATTIVO MAN             */
            /*======================================*/
            if ($('body.ragazzo').length > 0) {
                $('.demo').lazyView();
                $('.man-thumnail img').parazoom({ cursor: 'pointer' });

                $('.man-thumnail a').on('click', function(e) {
                    e.preventDefault();
                    console.log('hello')
                    var manPopUpContent = $(this).html()
                    // console.log(manPopUpContent);
                    $('#man-popup').html(manPopUpContent);
                    $('#man-popup h1').removeClass('invisible');
                    $('#man-popup .man-thumnail-text-wrapper').removeClass('invisible');
                    $('#man-popup .man-thumnail-text-wrapper p').removeClass('invisible');
                    $('#man-popup').css({ 'display': 'grid' })
                    $('#man-close-button').css({ 'display': 'block' })
                    $('.ragazzo').addClass('stop-scroll');
                })
                $('#man-close-button').on('click', function() {
                    $('#man-popup h1').addClass('invisible');
                    $('#man-popup .man-thumnail-text-wrapper').addClass('invisible');
                    $('#man-popup .man-thumnail-text-wrapper p').addClass('invisible');
                    $('#man-popup').css({ 'display': 'none' })
                    $('#man-close-button').css({ 'display': 'none' })
                    $('.ragazzo').removeClass('stop-scroll');
                })


            }


            /*======================================*/
            /*              SUIT SELECTION          */
            /*======================================*/
            if ($('body.header-opacity').length > 0) {


                if ($(window).width() >= 950) {
                    $('#suit-selection').fullpage();
                    TweenMax.to("#capo .suit-info", 1.5, { opacity: 1 })

                    let controllerS2 = new ScrollMagic.Controller();
                    let tweenS2 = TweenMax.fromTo("#capobastone .suit-info", 0.7, { y: 40 }, { y: 0, opacity: 1 });
                    let sceneS2 = new ScrollMagic.Scene({
                            triggerElement: '#capobastone',
                            triggerHook: 0.3
                        })
                        .setTween(tweenS2)
                        .addTo(controllerS2)
                    // .addIndicators()

                    let controllerS3 = new ScrollMagic.Controller();
                    let tweenS3 = TweenMax.fromTo("#capofamiglia .suit-info", 0.7, { y: 40 }, { y: 0, opacity: 1 });
                    let sceneS3 = new ScrollMagic.Scene({
                            triggerElement: '#capofamiglia',
                            triggerHook: 0.3
                        })
                        .setTween(tweenS3)
                        .addTo(controllerS3)
                }

                // .addIndicators()

                // let controller = new ScrollMagic.Controller();
                // let tween = TweenMax.to("#suit-selection .suit-info", 2, {opacity:1});
                // let scene = new ScrollMagic.Scene({
                //  triggerElement:'#suit-selection section',
                //  triggerHook:0.5
                // })
                // .setTween(tween)
                // .addTo(controller)
                // .addIndicators()

            }
            /*======================================*/
            /*              CONSULTATION            */
            /*======================================*/


            /*======================================*/
            /*              MAGAZINE                */
            /*======================================*/

            if ($('body.magazine-page').length > 0) {
                $('.demo').lazyView();
                console.log('hello')
                $('.article-image').parazoom({ cursor: 'pointer' });
                // $('.man-thumnail img').parazoom({ cursor: 'pointer' });

                //                 .article-each:hover {
                //     background-color:red;
                //     color:black;
                // }
                // $('.article-each').mouseenter(function(){
                //     $(this).find('h2').css({'background-color':'white'})
                //     $(this).find('h2').css({'color':'black'})
                // })
                // $('.article-each').mouseleave(function(){
                //     $(this).find('h2').css({'background-color':'black'})
                //     $(this).find('h2').css({'color':'white'})
                // })

            }
            /*--------------------------------*/
        })
});