// para traernos la pantalla que es donde vamos a poner toda la informacion
const pantalla = document.querySelector(".pant");
// llamar a los botones 
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    // cada boton se le agregara un escuchador de eventos
    boton.addEventListener("click", () => {
        // guardarlo en una variable para que se mestre lo que apretamos
        
        const botonApretado = boton.textContent;
// para que ala hora de borrar vuelva a aparecer 0 en la pantalla 
        if (boton.id === "ac") {
            pantalla.textContent = "";
            return;
        }

    // para que nos resuelva la operacion despues de haber presionado el boton
    // se mete un try para que marque error si hay una sintaxis mal 
        
        if (boton.id === "iguall") {
            try {
                // eval es una funcion que evalua un conjunto de strings que es el resultado de lo que halla en la pantalla 
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error";
            }
            return;
        }

        // para que se vayan agregando ala pantalla los botones
        if (pantalla.textContent === "0" ) {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})