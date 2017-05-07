document.addEventListener("DOMContentLoaded", function(event) {
    $(".form").submit(function sendForm(e) {
        e.preventDefault();
         $.ajax({
            url: "http://kaka",
            method: "POST",
            data: $(".form").serialize(),
            dataType: "json",
            success: function() {
                $('.form')[0].reset();
            }
        });
    });
    
});