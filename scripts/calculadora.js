let num1
let num2
let signo

function main() {
    const uno = document.getElementById('js_uno');
    const dos = document.getElementById('js_dos');
    const tres = document.getElementById('js_tres');
    const cuatro = document.getElementById('js_cuatro');
    const cinco = document.getElementById('js_cinco');
    const seis = document.getElementById('js_seis');
    const siete = document.getElementById('js_siete');
    const ocho = document.getElementById('js_ocho');
    const nueve = document.getElementById('js_nueve');
    const cero = document.getElementById('js_cero');
    const punto = document.getElementById('js_punto');
    const resultado = document.getElementById('js_panel');
    const reset = document.getElementById('js_limpiar');
    const suma = document.getElementById('js_suma');
    const resta = document.getElementById('js_resta');
    const multiplicacion = document.getElementById('js_multiplicacion');
    const division = document.getElementById('js_division');
    const potencia = document.getElementById('js_potencia');
    const resto = document.getElementById('js_resto');
    const igual = document.getElementById('js_igual');

    uno.onclick = function() {
        resultado.textContent = resultado.textContent + "1"
    }

    dos.onclick = function() {
        resultado.textContent = resultado.textContent + "2"
    }

    tres.onclick = function() {
        resultado.textContent = resultado.textContent + "3"
    }

    cuatro.onclick = function() {
        resultado.textContent = resultado.textContent + "4"
    }

    cinco.onclick = function() {
        resultado.textContent = resultado.textContent + "5"
    }

    seis.onclick = function() {
        resultado.textContent = resultado.textContent + "6"
    }

    siete.onclick = function() {
        resultado.textContent = resultado.textContent + "7"
    }

    ocho.onclick = function() {
        resultado.textContent = resultado.textContent + "8"
    }

    nueve.onclick = function() {
        resultado.textContent = resultado.textContent + "9"
    }

    cero.onclick = function() {
        resultado.textContent = resultado.textContent + "0"
    }

    punto.onclick = function() {
        resultado.textContent = resultado.textContent + "."
    }

    reset.onclick = function() {
        resetear();
    }

    suma.onclick = function() {
        num1 = resultado.textContent;
        signo = "+";
        limpiar();
    }

    resta.onclick = function() {
        num1 = resultado.textContent;
        signo = "-";
        limpiar();
    }

    multiplicacion.onclick = function() {
        num1 = resultado.textContent;
        signo = "*";
        limpiar();
    }

    division.onclick = function() {
        num1 = resultado.textContent;
        signo = "/";
        limpiar();
    }

    potencia.onclick = function() {
        num1 = resultado.textContent;
        signo = "**";
        limpiar();
    }

    resto.onclick = function() {
        num1 = resultado.textContent;
        signo = "%";
        limpiar();
    }

    igual.onclick = function() {
        num2 = resultado.textContent;
        resolver();
    }

    function limpiar() {
        resultado.textContent = "";
    }

    function resetear() {
        resultado.textContent = "";
        num1 = 0;
        num2 = 0;
        signo = 0;
    }

    function resolver() {
        let res = 0;
        switch (signo) {
            case "+":
                res = parseFloat(num1) + parseFloat(num2)
                break;
            case "-":
                res = parseFloat(num1) - parseFloat(num2)
                break;
            case "*":
                res = parseFloat(num1) * parseFloat(num2)
                break;
            case "/":
                res = parseFloat(num1) / parseFloat(num2)
                break;
            case "**":
                res = parseFloat(num1) ** parseFloat(num2)
                break;
            case "%":
                res = parseFloat(num1) % parseFloat(num2)
                break;
        }
        resetear();
        resultado.textContent = res;
    }
}

main()