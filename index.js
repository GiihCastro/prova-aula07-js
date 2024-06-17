function calcularGorjeta() {
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const qualidadeServico = document.getElementById('qualidadeServico').value;

    const taxasGorjeta = {
        bom: 0.1,
        regular: 0.05,
        ruim: 0
    };

    const valorGorjeta = valorConta * taxasGorjeta[qualidadeServico];
    const totalPagar = valorConta + valorGorjeta;

    document.getElementById('valorGorjeta').textContent = valorGorjeta.toFixed(2);
    document.getElementById('totalPagar').textContent = totalPagar.toFixed(2);
}
