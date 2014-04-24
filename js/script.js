$(document).ready(function() {
    
    $(document).pitchdeck({
        top_links: '#nav_center a',
        easing: 'easeInOutQuart',
        next_button: '.next, .start',
        link_labels: true
    });
    
    $('.pagenumber').each(function(k, e) { 
      $(e).waypoint(function() { 
        $('#page-number').html($(e).attr('id')) 
      });
    });
    
});