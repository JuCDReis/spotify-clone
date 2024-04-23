document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === 'q') {
        window.open('https://open.spotify.com/intl-pt');
    }
    else if (event.ctrlKey && event.key === 'i') {
        window.open('https://open.spotify.com/intl-pt/artist/3p7PcrEHaaKLJnPUGOtRlT?si=daa3a3eb04f44229');
    }
    else if (event.ctrlKey && event.key === 'm') {
        document.getElementById('input').focus();
    }
});