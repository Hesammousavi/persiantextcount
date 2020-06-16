let contentFooter = document.querySelector('.content-footer');
let text = document.querySelector('#text');
let textCountBtn = document.querySelector('#text-count-btn');

textCountBtn.addEventListener('click' , function() {
    contentFooter.classList.remove('active');
    let newText = text.value.replace(/[()?!\d%؟!،.;:؛*<>"'@,{}=\[\]`]/gi , '');
    newText = newText.replace(/[\n]/gi , ' ');
    newText = newText.split(' ').filter(word => {
        return word.length > 0 && /[آ-یa-zA-Z0-9]/.test(word);
    });
    contentFooter.querySelector('#count').innerHTML = newText.length
    contentFooter.classList.add('active');
});
