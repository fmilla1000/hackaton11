function fecha() {
    const fecha = document.getElementById('js_fecha');

    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var dias = new Array("Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado")
    var f = new Date();

    let fechaActual = dias[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()];

    return fecha.innerHTML = fechaActual
}

fecha()

const input = document.getElementById('js_addTask');
const form = document.querySelector('form');
const element = document.getElementById("js_container");

form.onsubmit = function(event) {

    event.preventDefault();

    const li = document.createElement("li");
    const texto = input.value;
    const t = document.createTextNode(texto);
    li.appendChild(t);
    element.appendChild(li);
    li.innerHTML = li.innerHTML + `<span class="close">×</span>`

    input.value = ""

    const close = document.querySelectorAll(".close");

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            const div = this.parentElement;
            div.remove()
        }
    }

    const list = element.querySelectorAll("li")
    for (i = 0; i < list.length; i++) {
        list[i].onclick = function() {
            const div = this;
            div.className = "checked";
        }

        list[i].ondblclick = function() {
            const div = this;
            div.classList.remove("checked")
        }
    }
};