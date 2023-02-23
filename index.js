const abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const num = document.getElementById('num');

const texto = document.getElementById('texto');
const botonE = document.getElementById('botonE');
const botonD = document.getElementById('botonD');

const respuesta = document.getElementById('resultado');

function encriptar_desencriptar(t, n, s){
    let resp = '';
    t.split('').forEach(letra => {
        let index = abc.indexOf(letra);
        if(index !== -1){
            switch (s) {
                case "+":
                    //encriptar
                    index = (index + n) % abc.length;
                    resp += abc[index];
                    break;
                case "-":
                    //desencriptar
                    index = (index - n) % abc.length;
                    index = index < 0 ? abc.length + index : index;
                    resp += abc[index];
                    break;
            
                default:
                    break;
            }
        }else{
            resp += letra;
        }
    });
    respuesta.innerHTML = resp;
}


botonE.addEventListener('click', ()=>
    encriptar_desencriptar(texto.value.trim().toLowerCase(), parseInt(Math.abs(num.value)),"+")
)
botonD.addEventListener('click', ()=>
    encriptar_desencriptar(texto.value.trim().toLowerCase(), parseInt(Math.abs(num.value)),"-")
)
