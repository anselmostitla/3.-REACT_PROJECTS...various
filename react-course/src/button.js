import PropTypes from 'prop-types';

export function Button({text, name}){
    if (!text){
        console.error("Text is required")
    }
    
    return <button onClick={function(){
        console.log("Hello my dear")
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: "JG"
}