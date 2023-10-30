/*const mensaje = ("lisbeth")
const arreglo = [{materia:"matematicas", profesor:"carlos"},{modalidad:"virtual",metododepago:"nequi"}]
const aprendiz = {
    nombre:'lisbeth',
    apellido:'ceron'
}
const numero1= (6)
const numero2= (6)

export const FirstApp = ()=>{
    return(
        <>
        <h1>bienvendo a mi aplicacion </h1>
        <p>educatio con react</p>
        <h1>{5 + 6}</h1>
        <h1>{numero1}+{numero2}= {numero1+numero2}</h1>
        <h1>{mensaje}</h1>
        <h1>Materia: {arreglo[0].materia}, Profesor: {arreglo[0].profesor}, modalidad: {arreglo[1].modalidad}, metodo de pago: {arreglo[1].metododepago}</h1>
        <h1>{JSON.stringify(aprendiz)}</h1>
        </>
    )
}*/

export const Avatar = ()=>{
    return(
        <img
        className = "avatar"
        src = "src/img/about.jpg"
        alt = "juan"
        width ={100}
        heigth= {100}
        />
    )
}

export const FirsApp = (name='lisbeth', age='18', birth='10/10/2008')=> {
    return(
        <>
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{birth}</h4>
        </>
    );
    }
