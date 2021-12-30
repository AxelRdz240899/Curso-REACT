// Props.children es un atributo que todos los componentes tienen, con eso puedes poner el contenido "Hijo en HTML"
import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;