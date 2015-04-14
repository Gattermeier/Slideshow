

    var breakpoint = 768;
    var slideStart = function(){
        jQuery('.cycle-slideshow').cycle({
            pager: ".cycle-pager",
            slides: "> div",
            speed: 600,
            manualSpeed: 100
        });
    }
    
    // decide wether to init slideshow or not
    if (jQuery( window ).width() >= breakpoint ){
            slideShow = true;
            slideStart();
        } else {
            slideShow = false;
        }
    
    // show content of slideshow only after page loded 
    jQuery(document).ready(function(){
        jQuery('.cycle-slideshow').removeClass('hidden')
    })        
    
    //check when window is resized & either destroy or create slideshow
    jQuery( window ).on('resize', function(){
        width = jQuery( window ).width();
        if ((width < breakpoint) && (slideShow == true)) {
            jQuery('.cycle-slideshow').cycle('destroy');
            slideShow = false;
        } else if (width >= breakpoint && slideShow == false) {
            // MG: weird bug in cycle 2 plugin, we need to trigger destroy before init in cases the window is loaded with width < 768
            jQuery('.cycle-slideshow').cycle('destroy');
            slideStart();
            slideShow = true;
        } 
        })