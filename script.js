let contentFooter = document.querySelector('.content-footer');
document.querySelector('#text-count-btn').addEventListener('click' , function() {
    contentFooter.classList.remove('active');
    let text = document.querySelector('#text');
    let newText = text.value.replace(/[a-z()?!\d%\n؟!،.;:<>"'@,{}=/`]/gi , '');
    // console.log();
    // let addtionword = ['و','را','با','از'];
    newText = newText.split(' ').filter(word => {
        return word.length > 0;
    });
    contentFooter.querySelector('#count').innerHTML = newText.length
    contentFooter.classList.add('active');
});