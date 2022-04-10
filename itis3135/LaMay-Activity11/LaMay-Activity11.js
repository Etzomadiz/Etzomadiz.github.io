/* jQuery call to the accordion() method. */
$(document).ready(function() {
    $("#accordion").accordion();
        //Expand or collapse this panel
        $(this).next().slideToggle('fast');
        
});