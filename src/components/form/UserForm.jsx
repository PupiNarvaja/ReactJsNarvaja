export const UserForm = ({ placeOrder, handleChange, dataForm, warning }) => {
    return (
        <>
            <form onSubmit={placeOrder} onChange={handleChange} className="w-[90%] max-w-lg">
                <div className="flex flex-col w-full mx-auto">
                    <input type="text" name="name" placeholder="name and surname" defaultValue={dataForm.name} className="w-full px-4 py-2 border-b-2 border-violet-500 rounded-md my-6 outline-0"/>
                    <input type="text" name="phone" placeholder="phone number" defaultValue={dataForm.phone} className="w-full px-4 py-2 border-b-2 border-violet-500 rounded-md my-6 outline-0"/>
                    <input type="email" name="email" placeholder="@example.com" defaultValue={dataForm.email} className="w-full px-4 py-2 border-b-2 border-violet-500 rounded-md my-6 outline-0"/>
                    <input type="email" name="confirmation" placeholder="e-mail confirmation" defaultValue={dataForm.confirmation} className="w-full px-4 py-2 border-b-2 border-violet-500 rounded-md my-6 outline-0"/>
                    <span className="text-sm h-16 mb-8">{warning}</span>
                    <button className="w-60 mx-auto px-4 py-2 border border-spec-yellow rounded-lg bg-special-yellow text-black font-semibold transition ease hover:shadow-lg">Buy now</button>
                </div>
            </form>
        </>
    )
}