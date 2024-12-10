//Selecionando o Elemento HTML para manipular
let listaButton = document.getElementById("listaBotao");
let button = document.querySelectorAll("li");
let submit = document.getElementById("submit");
let starIcon = document.getElementById("starIcon");
let title = document.getElementById("h1");
let thankYou = document.getElementById("thankYou");
let feedbackImprove = document.getElementById("improve");
let afterRating = document.getElementById("afterRating");
let ratingNumber = document.getElementById("ratingNumber");
let h2 = document.getElementById("h2");

function botao() {
  let notaSelecionada = null;
  //Caminhando em todos os botões da página
  button.forEach((bt, index) => {
    //Adicionando evento Click em todos eles
    bt.addEventListener("click", () => {
      //Removendo o Estilo Selected caso tenha algum
      button.forEach((btn) => btn.classList.remove("selected"));
      //Adicionando o estilo ao ser clicado
      bt.classList.add("selected");

      notaSelecionada = bt.textContent;
      //Acionando o Estilo laranja que é o número máximo da aplicação
      if (index === 4) {
        bt.classList.add("selected-max");
      } else {
        button[4].classList.remove("selected-max");
      }
    });
  });
  submit.addEventListener("click", () => {
    if (notaSelecionada) {
      starIcon.style.display = "none";
      title.style.display = "none";
      thankYou.style.display = "block";
      feedbackImprove.style.display = "none";
      afterRating.style.display = "block";
      ratingNumber.innerText = `You Selected ${notaSelecionada} out of 5`;
      h2.style.display = "block";
      ratingNumber.style.display = "block";
      submit.style.display = "none";
      listaButton.style.display = "none";
      console.log(`Sua nota foi: ${notaSelecionada}`);
    } else {
      alert("Por favor seleciona uma nota antes de enviar");
    }
  });
}
botao();
