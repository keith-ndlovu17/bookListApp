const modal = document.querySelector('.add-book-modal');
const button = document.querySelector('#button');
button.addEventListener('click', () => {
    modal.style.display = 'flex';
    button.style.display = 'none';
});
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
    button.style.display = 'block';
})