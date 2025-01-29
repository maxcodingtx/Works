

const contactButtonSelector = document.querySelectorAll('.dropdown__button');
const contactDropdownContent = document.querySelectorAll('dropdown__content');

// window event listener if both navs use same 'is-active' class


contactButtonSelector.forEach((contactButtonSelector) => {
    contactButtonSelector.addEventListener('click', (event) => {
        // current button id's last character (integer)
        var buttonIdInt = event.currentTarget.id[event.currentTarget.id.length-1]


        // using the current button's id to select appropriate drop down
        let targetDropdown = document.getElementById(`contactDropdownContent${buttonIdInt}`)
        // making dropdown visible or hiding them by toggling active class (display: block;)
        targetDropdown.classList.toggle('is-active')

        // using the current button's id integer to select appropriate image
        let targetImage = document.getElementById(`contactImage${buttonIdInt}`)
        
        // if links are currently shown, flip the image inside the contact button
        if (targetDropdown.classList.contains('is-active')) {
            targetImage.style.transform = 'rotate(180deg)'
        }
        // if links are not currently shown, keep image in natural position
        else {
            targetImage.style.transform = 'rotate(0)'
        }

});
})

