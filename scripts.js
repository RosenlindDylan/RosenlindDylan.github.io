

// listener for copying email on about_me page
document.addEventListener('DOMContentLoaded', function() {
    var copyEmailLink = document.getElementById('copyEmail');
    
    copyEmailLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        var copyText = 'drosenlind2@gmail.com';
        navigator.clipboard.writeText(copyText).then(function() {
            alert("Copied to clipboard: " + copyText);
        }).catch(function(error) {
            console.error("Error copying text: ", error);
        });
    });
});
