const circles = document.querySelectorAll('.circle') // todas as bolinhas de cores
const imageArea = document.querySelector('.image-area'); // apenas um elemento
const tenisImg = document.getElementById('tenis-img'); // imagem do tênis
const botao = document.querySelector('.bnt')
const contadordeproduto = document.getElementById('contador-carrinho')

let carrinho = 0




botao.addEventListener('click',() =>{

    carrinho++
    contadordeproduto.innerHTML= carrinho
  alert('produto adicionado ao carrinh')  


})





circles.forEach(circle => {
    circle.addEventListener('click', () => {
        const color = circle.getAttribute('data-color'); // ex: "#ff0000"
        const imagem = circle.getAttribute('data-img'); // ex: "tenis-vermelho.png"

        // muda a cor de fundo da área de imagem
        imageArea.style.backgroundColor = color;

        // muda a imagem do tênis

        tenisImg.src = imagem;
    });
});
