const form_picker = document.querySelector('.form_picker');
const color_picker = document.querySelector('.color_picker');

color_picker.addEventListener('change',()=>{
    form_picker.submit();
})