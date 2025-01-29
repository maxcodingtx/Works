

const contactButton = document.getElementById('contactButton');
const contactDropdownContent = document.getElementById('contactDropdownContent');

contactButton.addEventListener('click', () => {
    // making links visible or hiding them by toggling active class (display: block;)
    contactDropdownContent.classList.toggle('is-active--contact');

    const buttonImage = document.getElementById('contactImage')
    // if links are currently shown, flip the image inside the contact button
    if (contactDropdownContent.classList.contains('is-active--contact')) {
        buttonImage.style.transform = 'rotate(180deg)'
    }
    // if links are not currently shown, keep image in natural position
    else {
        buttonImage.style.transform = 'rotate(0)'
    }

});