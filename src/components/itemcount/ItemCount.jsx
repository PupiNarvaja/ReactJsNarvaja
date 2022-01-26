import { useCounter } from '../../hooks/useCounter'

const ItemCount = ({ stock, valorInicial, onAdd }) => {

    const { counter, minMaxQty, increment, decrement } = useCounter(stock, valorInicial)
    
    return (
        <div className="flex justify-center items-center flex-col w-[200px] h-40 mx-auto">
            <span className="w-full text-center text-red-500 text-sm h-0 mb-8">{minMaxQty}</span>
            <div className="flex flex-row justify-between items-center container">
                <button onClick={() => increment()} className="mt-2 px-4 py-2 border border-spec-yellow rounded-lg bg-special-yellow text-black font-semibold">+</button>
                <p>{counter}</p>
                <button onClick={() => decrement()} className="mt-2 px-4 py-2 border border-spec-yellow rounded-lg bg-special-yellow text-black font-semibold">-</button>
            </div>
            <button onClick={() => onAdd(counter)} className="mt-4 px-4 py-2 border border-spec-yellow rounded-lg bg-special-yellow text-black font-semibold container">Add to cart</button>
        </div>
    )
}

export default ItemCount
