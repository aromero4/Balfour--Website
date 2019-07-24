$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });
    
    return false;
});

$('.sidebar .toggle').on('click', function(e) {
    
    e.preventDefault();
    
    $(this).parent().toggleClass('sideopen');
});