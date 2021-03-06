(function(){
    'use strict';
    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function() {

        var map = L.map('mapa').setView([10.072273, -68.099914], 16); // [coordenadas], zoom (>acercar, -alejar);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([10.072273, -68.099914]).addTo(map) //pin
            .bindPopup('GDLWebCamp 2018 <br> Boletos ya disponibles')
            .openPopup() //texto fijo encima del pin
            .bindTooltip('Un Tooltip') //texto al hacer hoover
            .openTooltip();
        
        //campos datos usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');
        //var datosUsuario = document.getElementById('datos_usuario');

        //campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');
        
        //botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //extras
        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');


        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);
        //datosUsuario.addEventListener('blur', validarCampos);

        function validarCampos(){
            if(this.value == ''){
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este campo es obligatorio";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
                //datosUsuario.style.border = '1px solid red';
            }else{
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
                //datosUsuario.style.border = '1px solid green';
            }
        }

        function validarMail(){
            if(this.value.indexOf("@") > -1){
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }else{
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Debe tener al menos una @";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
        }

        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value == ''){
                alert("Debes elegir un regalo");
                regalo.focus();
            }else{
                var boletosDia = parseInt(pase_dia.value, 10)|| 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                    boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
                    cantCamisas = parseInt(camisas.value, 10)|| 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;

                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

                var listadoProductos = [];

                if(boletosDia >= 1){
                listadoProductos.push(boletosDia+ " Pases por dia");
                }
                if(boletos2Dias >= 1){
                listadoProductos.push(boletos2Dias + " Pases por 2 dias");
                }
                if(boletoCompleto >= 1){
                listadoProductos.push(boletoCompleto + " Pases completo");
                }
                if(cantCamisas >= 1){
                listadoProductos.push(cantCamisas + " Camisas");
                }
                if(cantEtiquetas >= 1){
                listadoProductos.push(cantEtiquetas + " Etiquetas");
                }

                lista_productos.style.display = 'block';
                lista_productos.innerHTML = '';
                for(var i = 0; i < listadoProductos.length; i++){
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                }

                suma.innerHTML = "$ " + totalPagar.toFixed(2);
                console.log(suma);

            }


        }

        function mostrarDias(){
            var boletosDia = parseInt(pase_dia.value, 10)|| 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
                boletoCompleto = parseInt(pase_completo.value, 10)|| 0;

                var diasElegidos = [];

                if(boletosDia > 0){
                    diasElegidos.push("viernes");
                    console.log(diasElegidos);
                }
                if(boletos2Dias > 0){
                    diasElegidos.push("viernes", "sabado");
                    console.log(diasElegidos);
                }
                if(boletoCompleto > 0){
                    diasElegidos.push("viernes", "sabado", "domingo");
                    console.log(diasElegidos);
                }

                for(var i = 0; i < diasElegidos.length; i++){
                    document.getElementById(diasElegidos[i]).style.display = 'block';
                }

        }

    });//DOMContentLoaded
})();