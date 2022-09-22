import './style.css'
import { useState } from "react"
import Cards from '../Cards';

export default function Main() {

    const [fruits, setFruits] = useState([
        { name: "banana", color: "yellow", price: 2 },
        { name: "cherry", color: "red", price: 3 },
        { name: "strawberry", color: "red", price: 4 },
    ]);

    function onlyRedFruits() {
        setFruits(fruits.filter(fruit => fruit.color === "red"))
    }

    return (
        <main>
            <div className='cardsContainer'>
                {fruits.map((fruit) => {
                    return <Cards key={fruit.index} name={fruit.name} price={fruit.price.toFixed(2)} />
                })}
            </div>
            <button onClick={onlyRedFruits}>Exibir apenas frutas vermelhas!</button>
        </main>
    )
}