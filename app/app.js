let spanTexts = document.getElementsByTagName('span');

window.onload = function() {
    for(spanTexts of spanTexts) {
        spanTexts.classList.add('active')
    }
}