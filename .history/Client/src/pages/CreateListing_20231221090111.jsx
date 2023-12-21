

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl'>
    <h1 className='text-3xl font-semibold text-center my-7'>CreateListing</h1>
    <form className='flex flex-col sm:flex-row'>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='10' required />
        <textarea type="text" placeholder='Description' className='border p-3 rounded-lg' id='description' required />
        <input type="text" placeholder='Address' className='border p-3 rounded-lg' id='address' required />
        <div className="">
        <div className="flex gap-2">
          <input type="checkbox" id="sale" className="w-5"/>
          <span>Sell</span>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="rent" className="w-5"/>
          <span>Rent</span>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="sale" className="w-5"/>
          <span>Parking</span>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="sale" className="w-5"/>
          <span>Sell</span>
        </div>

        </div>
      </div>
    </form>
    </main>
  )
}
