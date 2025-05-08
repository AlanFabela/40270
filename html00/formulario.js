console.log("inicio")

function muestra() {
    let user = document.getElementById("user")
    let paswword = document.getElementById("pasword")

    console.log(user.value)
    console.log(paswword.value)
}

const boton = document.getElementById("boton")
//boton.addEventListener("click", muestra())

//ejemplo de funcion de flecha
boton.addEventListener("click",
    () =>{
        let user=document.getElementById("user")
        let paswword= document.getElementById("pasword")

        console.log(user.value)
        console.log(paswword.value)
    }
)