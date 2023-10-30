import PropTypes from "prop-types"
export const Profesor = ({name,lastName,age}) =>{
    return(
        <>
        <h1>profesores</h1>
        <h2>{name}</h2>
        <h2>{lastName}</h2>
        <h2>{age}</h2>
        
        </>
    )
}


Profesor.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    age : PropTypes.number

}

Profesor.defaultProps = {
   name:"Lisbeth",
   lastName:"c+perlrkhlhj`ppltrnohn´hglnp eron",
   age:18

}
