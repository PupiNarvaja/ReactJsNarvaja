const Button = () => {
    return (
        <>
            <button className="btnSpecial relative w-48 h-10 flex items-center justify-center text-white after:absolute after:z-[-3] after:top-1 hover:after:top-[6px] after:left-1 hover:after:left-[6px] after:w-full after:h-full after:bg-teal-400 after:duration-100 before:absolute before:z-[-1] hover:before:-top-[2px] hover:before:-left-[2px] before:w-full before:h-full before:bg-black before:left-0 before:top-0 before:duration-100">Continue shopping</button>
        </>
    )
}

export default Button
