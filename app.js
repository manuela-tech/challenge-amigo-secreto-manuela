// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear la lista de amigos 
let amigos= [];

// you always define it with document
const amigoValue = document.getElementById("amigo")

// lista mostrar amigos
const listaMostrada = document.getElementById("listaAmigos"); 
const amigoMostrado = document.getElementById("resultado");
// const error  = document.getElementById("error");
console.log("hello")

function validarNombre(){
    //regex
    const nombreValido = /^[a-zA-Z\s]+$/;
    //verification
    if(nombreValido.test(amigoValue.value)){
        //return True if validName
        return true;
    }
    return false;
}

function mostrarLista(texto){
    //limpiamos la lista mostrada en pantalla
    listaMostrada.innerHTML="";
    //muestra la lista en pantalla
    for(let i=0; i<amigos.length;i++){
        //creamos el elemento
        const elemento = amigos[i];
        //insert the elemento
        listaMostrada.insertAdjacentHTML("beforeend",
            `
            <li>${elemento}</li>
            `
        );
    }//for
}

function mostrarAmigo(texto){
    //limpiar lista 
    listaMostrada.innerHTML="";
    //clean the secret friend shown in the screen
    amigoMostrado.innerHTML="";
    amigoMostrado.insertAdjacentHTML("beforeend", 
        `
        <li>${texto}</li>
        `
    );
    }

function mostrarError(texto){
    console.log("hubo un error")
    // TODO 
}


function agregarAmigo(){
 
    amigoMostrado.innerHTML="";
    // error.innerHTML="";
    //validar nombre 
   

    // console.log("agregar Amigo")
    let amigoTxt = amigoValue.value;

    console.log(amigoTxt)

    if(validarNombre()){
     


        //add the friend to the list
        amigos.push(amigoValue.value);
        // show the list of friendss
        mostrarLista(amigos);
        //clean after 
        clearNames();
    }else{
        // mostrarError("Ingresar un nombre valido")
           alert("⚠️ Ingresa un nombre válido (solo letras y espacios)");
    }//else

  

}




function sortearAmigo(){
    console.log("sortear Amigo")
    if (amigos.length>1){
        let amigoSorteado = Math.floor(Math.random()*amigos.length);
        let amigo = amigos[amigoSorteado];
        
        mostrarAmigo(`El amigo secreto sorteado es:  ${amigo}`);

        //eliminar el amigo
        amigos = eliminarAmigo(amigos,amigo);
        if(amigos.length === 1){
            isLast = true;
        }
    } else if(amigos.length === 1 && isLast){
        let ultimoAmigo = listaAmigos[0];
        mostrarAmigo(`el ultimo amigo secreto sorteado es: ${ultimoAmigo}`);

    } else {
        console.log("error")
    }
    console.log("============")

}

function eliminarAmigo(amigos, amigoSorteado){
    amigos = amigos.filter(amigo=> amigo !== amigoSorteado);
    return amigos;
}

function clearNames(){
    //clean the values
    amigoValue.value ="";
    amigoMostrado.value="";
    
}


console.log("sfafsa")


