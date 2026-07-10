const campoSenha = document.getElementById("campoSenha");

const diminuir = document.getElementById("diminuir");
const aumentar = document.getElementById("aumentar");
const valorCaracteres = document.getElementById("valorCaracteres");

const minusculas = document.getElementById("minusculas");
const maiusculas = document.getElementById("maiusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const gerarSenha = document.getElementById("gerarSenha");

const progresso = document.getElementById("progresso");
const textoForca = document.getElementById("textoForca");

const valorEntropia = document.getElementById("valorEntropia");
const tempoDescoberta = document.getElementById("tempoDescoberta");

let tamanhoSenha = 12;

const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerosTexto = "0123456789";
const simbolosTexto = "!@#$%&*()_-+=<>?/[]{}";

valorCaracteres.textContent = tamanhoSenha;

aumentar.addEventListener("click", () => {
    if (tamanhoSenha < 30) {
        tamanhoSenha++;
        valorCaracteres.textContent = tamanhoSenha;
    }
});

diminuir.addEventListener("click", () => {
    if (tamanhoSenha > 4) {
        tamanhoSenha--;
        valorCaracteres.textContent = tamanhoSenha;
    }
});

gerarSenha.addEventListener("click", gerar);

function gerar() {

    let caracteres = "";

    if (minusculas.checked)
        caracteres += letrasMinusculas;

    if (maiusculas.checked)
        caracteres += letrasMaiusculas;

    if (numeros.checked)
        caracteres += numerosTexto;

    if (simbolos.checked)
        caracteres += simbolosTexto;

    if (caracteres === "") {
        alert("Selecione pelo menos uma opção.");
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanhoSenha; i++) {

        const indice = Math.floor(Math.random() * caracteres.length);

        senha += caracteres[indice];

    }

    campoSenha.value = senha;

    calcularForca(caracteres.length);
}

function calcularForca(totalCaracteres) {

    const entropia = tamanhoSenha * Math.log2(totalCaracteres);

    valorEntropia.textContent = entropia.toFixed(2);

    if (entropia < 40) {

        progresso.style.width = "25%";
        progresso.style.background = "#ef4444";
        textoForca.textContent = "Fraca";
        tempoDescoberta.textContent = "Poucos segundos";

    } else if (entropia < 60) {

        progresso.style.width = "50%";
        progresso.style.background = "#f59e0b";
        textoForca.textContent = "Média";
        tempoDescoberta.textContent = "Algumas horas";

    } else if (entropia < 80) {

        progresso.style.width = "75%";
        progresso.style.background = "#22c55e";
        textoForca.textContent = "Forte";
        tempoDescoberta.textContent = "Vários anos";

    } else {

        progresso.style.width = "100%";
        progresso.style.background = "#16a34a";
        textoForca.textContent = "Muito Forte";
        tempoDescoberta.textContent = "Milhões de anos";

    }

}

gerar();
