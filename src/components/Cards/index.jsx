import './style.css';

export default function Cards(props) {
    return (
        <div className='cards'>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
        </div>
    )
}
