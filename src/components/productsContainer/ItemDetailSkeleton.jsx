import "./Item.css";

export const ItemDetailSkeleton = () => {
    return(
        <>
            <div className="flex flex-col justify-around items-center w-[85%] max-w-xs mx-auto my-6 pb-10 rounded-lg bg-white mt-20 md:flex-row md:max-w-[80%] md:p-8 md:justify-between lg:max-w-3xl lg:p-12">
                <div className="rounded-lg w-full h-[375px] md:w-[250px] py-auto loading"></div>
                <div className="h-[330px] md:w-[375px] md:pl-8 md:flex md:flex-col md:justify-between">
                    <div className="w-[200px] mx-auto">
                        <div className="w-full h-6 mb-8 py-2 md:pb-6 md:pt-0 rounded-md loading"></div>
                        <div className="w-20 h-6 my-4 py-2 rounded-md loading"></div>
                        <div className="w-full h-6 my-4 py-2 rounded-md loading"></div>
                    </div>
                <div className="flex flex-col items-center pb-6"><button className="py-2 px-6 mt-4 mx-auto rounded-lg w-[198px] h-[40px] loading"></button></div>
                </div>
            </div>
        </>
    )
}