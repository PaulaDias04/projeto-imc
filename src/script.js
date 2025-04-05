document.addEventListener('DOMContentLoaded', () => {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const calcularBotao = document.getElementById('calcular');
    const imcValorSpan = document.getElementById('imc-valor');
    const imcClassificacaoSpan = document.getElementById('imc-classificacao');
    const resultadoDiv = document.getElementById('resultado');

    const calcularIMC = () => {
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert('Por favor, insira um peso e altura válidos.');
            return;
        }

        const imc = peso / (altura * altura);
        imcValorSpan.textContent = imc.toFixed(1).replace('.', ',');
        resultadoDiv.style.display = 'block';
        imcClassificacaoSpan.textContent = obterClassificacaoIMC(imc);
    };

    const obterClassificacaoIMC = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc < 25) return 'Peso normal';
        if (imc < 30) return 'Sobrepeso';
        if (imc < 35) return 'Obesidade grau I';
        if (imc < 40) return 'Obesidade grau II';
        return 'Obesidade grau III';
    };

    calcularBotao.addEventListener('click', calcularIMC);
    resultadoDiv.style.display = 'none';
});
