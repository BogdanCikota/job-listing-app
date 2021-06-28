
function Header({ openFilters, setOpenFilters }) {
    return (
        <header className="flex bg-yellow-500 p-3 pb-5">
            <h1 className=' text-white text-2xl text-center'>Remote Jobs</h1>
            <button className='block  mt-2 bg-yellow-600 text-white rounded-full  px-3 ml-auto' onClick={()=> setOpenFilters(openFilters => !openFilters)}> {openFilters ? <span>Hide</span>: <span>Show</span> } filters</button>
        </header>
    )
}

export default Header
