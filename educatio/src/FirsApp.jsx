
import PropTypes from "prop-types"
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

const mensaje= ()=>{
    alert("mensaje de prueba")
}

export const FirsApp =(props)=>{
const {name , age, birth } = props
    return (
        <>
            <h4>{name}</h4>
            <h4>{age}</h4>
            <h4>{birth}</h4>
            <button onClick={mensaje}>Aceptar</button>
        </>
    );
    }

    FirsApp.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        birth: PropTypes.string,
      };
      
      FirsApp.defaultProps = {
        name: "nombre por defecto",
        age: 13,
        birth: "3 de junio",
      };