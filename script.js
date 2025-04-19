let dis = document.querySelector('.add-iner');
let card = document.querySelector('.item1');

card.addEventListener('mouseover',()=>{
    dis.style.display = 'flex';
})
card.addEventListener('mouseleave',()=>{
    dis.style.display = 'none';
})