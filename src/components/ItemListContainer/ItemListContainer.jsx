const ItemListContainer = ({greeting, count}) => {
    return(
        <div className="m-20">
            <h3 className="font-sans text-4xl">{greeting}</h3>
            <div className="flex justify-center items-center flex-col">{count}</div>
        </div>
    )
};

export default ItemListContainer;