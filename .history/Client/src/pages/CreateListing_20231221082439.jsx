

export default function CreateListing() {
  return (
    <main>
    <h1 className='text-3xl font-semibold text-center my-7'>CreateListing</h1>
    <form className='flex flex-col sm:flex-row'>
      <div>
        <input type="text" placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='62' minLength='10' r />
        <input/>
      </div>
    </form>
    </main>
  )
}