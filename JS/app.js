$('.sidebar .toggle').on('click', function(e) {
    
    e.preventDefault();
    
    $(this).parent().toggleClass('sideopen');
});