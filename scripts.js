

const contactButton = document.getElementById('contactButton')
const contactDropdownContent = document.getElementById('contactDropdownContent')
contactButton.addEventListener('click', () => {
    contactDropdownContent.classList.toggle('is-active--contact')
})