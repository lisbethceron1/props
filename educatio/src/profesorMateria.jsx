import PropTypes from "prop-types"
export const FirsApp = ({titulo,subtitulo}) =>{
    return(
        <>
        <h4>{titulo}</h4>
        <h4>{subtitulo}</h4>
        
        </>
    )
}


FirsApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string

}

FirsApp.defaultProps = {
    titulo: 'nuevo titulo por defecto',
    subtitulo:'SUBTITULO POR DEFECTLO'

}




