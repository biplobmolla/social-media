const comment = document.querySelectorAll('.fa-message');
const commentArea = document.querySelectorAll('.comment-area');
const dots = document.querySelectorAll('.fa-ellipsis');
const options = document.querySelectorAll('.options');

for(let i = 0; i<comment.length; i++) {
    comment[i].addEventListener('click', ()=>{
        commentArea[i].classList.toggle('active');
    });
    dots[i].addEventListener('click', ()=>{
        options[i].classList.toggle('active');
        dots[i].classList.toggle('active');
    });
}