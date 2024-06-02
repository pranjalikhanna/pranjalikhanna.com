$(document).ready(function() {
    $('#contact-us-btn').on('click', function() {
        $('#contact-modal').modal('show');
    });
    // List item click handler to change the image
    $('.list-group-item').click(function() {
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);

        $('.list-group-item').removeClass('active');
        $(this).addClass('active');

    });
});

$(document).ready(function() {
    // Handle click on project content
    $('.project-content').on('click', function() {
        var newImage = $(this).data('image');
        $('#projectImage').attr('src', newImage);
        
        // Optionally, you can highlight the selected project content
        $('.project-content').removeClass('active');
        $(this).addClass('active');
    });
});