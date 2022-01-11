export const UserForm = ({ placeOrder, handleChange, dataForm, warning }) => {
    return (
        <>
            <form onSubmit={placeOrder} onChange={handleChange}>
                <div className="flex flex-col">
                    <input type="text" name="name" placeholder="full name" defaultValue={dataForm.name} className="w-80 px-4 py-2 rounded-md my-6 outline-0"/>
                    <input type="text" name="phone" placeholder="phone number" defaultValue={dataForm.phone} className="w-80 px-4 py-2 rounded-md my-6 outline-0"/>
                    <input type="email" name="email" placeholder="@example.com" defaultValue={dataForm.email} className="w-80 px-4 py-2 rounded-md my-6 outline-0"/>
                    <input type="email" name="confirmation" placeholder="@example.com" defaultValue={dataForm.confirmation} className="w-80 px-4 py-2 rounded-md my-6 outline-0"/>
                    <span className="w-52 text-sm h-16 mb-8">{warning}</span>
                    <button className="w-60 mx-auto px-4 py-2 border border-spec-yellow rounded-lg bg-special-yellow text-black font-semibold">Buy now</button>
                </div>
            </form>
        </>
    )
}