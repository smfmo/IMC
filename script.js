document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const imc = weight / (height * height);
        let message = '';

        if (imc < 18.5) {
            message = 'Você está abaixo do peso. Foque em uma dieta saudável e equilibrada para ganhar peso.';
        } else if (imc >= 18.5 && imc < 24.9) {
            message = 'Você está com o peso normal. Ótimo trabalho! Continue mantendo seu estilo de vida saudável.';
        } else if (imc >= 25 && imc < 29.9) {
            message = 'Você está com sobrepeso. Pode ser uma boa ideia focar em exercícios regulares e uma dieta saudável.';
        } else {
            message = 'Você está na faixa de obesidade. Considere consultar um profissional de saúde para um conselho personalizado.';
        }

        document.getElementById('result').innerHTML = `Seu IMC é ${imc.toFixed(2)}. ${message}`;
    } else {
        document.getElementById('result').innerHTML = 'Por favor, insira valores válidos para altura e peso.';
    }
});