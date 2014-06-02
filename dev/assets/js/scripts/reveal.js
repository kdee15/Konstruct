// JAVASCRIPT LAYER [REVEAL] ##############################################

    // [DESCRIPTION]:
    //
    // A very simple jquery script that can show / hide content based on a target id. It's very reusable.

    // [BASIC USAGE]:
    // 
    //<a href="#my-hidden-content" class="reveal">Toggle the content</a>
    //
    //<div id="my-hidden-content" class="hidden">
    //    This content is hidden by default.
    //</div>

	// A. RESPONSIVE CONTAINERS +++++++++++++++++++++++++++++++++++++++
	
        jQuery(document).ready(function($) {
        $(".reveal").click(function(e) {
            var target = $(this).attr('href');
            if ($(target).css('display') === 'none') {
              $(target).fadeIn(150);
            }
            else {
              $(target).fadeOut(150);
            }
            e.preventDefault();
          });
        });
        
    // A. END +++++++++++++++++++++++++++++++++++++++