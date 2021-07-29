function navbar() {
    var nav = document.getElementById('nav');
    var fas = document.getElementById('fas');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        fas.style.color = '#808080';
    } else {
        nav.style.display = 'block';
        fas.style.color = '#7f60c6';
    }
}