const ItemDetail = ({item}) => {
    return (
        <div className="flex flex-col justify-center items-center mx-auto mb-6 py-10 max-w-[350px] border-[1px] border-gray-100">
            <img src={item.imagen} className="max-w-xs"></img>
            <ul className="w-[200px] mx-auto">
                <li>{item.tipo}</li>
                <li>{item.precio}</li>
                <li>{item.descripcion}</li>
                <li>{item.cantidad}</li>
            </ul>
        </div>
    )
}
export default ItemDetail