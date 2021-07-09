import React, { useState } from 'react'

function Filters({setgoToPage, numOfResults, setfromIndex, settoIndex, setPageNum, categories, setLimit, setCategory, setSearch, inputSearch, setInputSearch, setIsLoading}) {

    const [selectedCategory, setselectedCategory] = useState('');
    const [inputLimit, setInputLimit] = useState(0);
    
    const resetPage = () => {
        setfromIndex(0); settoIndex(numOfResults); setPageNum(1); setgoToPage(false);
    };

    const resetFilters = () => {
        //api state
        setLimit('all');
        setCategory(''); 
        setSearch('');
        //local state
        setselectedCategory('Choose a job category');
        setInputSearch('');
        setInputLimit('');
        //dom
        document.querySelector('select').selectedIndex = 0;
        document.querySelector('#search').value = '';
        document.querySelector('#limit').value = '';
    };

    
    return (
        <form className='col-span-full filters grid gap-3 bg-white py-3' onSubmit={e => {
                    e.preventDefault();
                    setCategory(selectedCategory);
                    setSearch(inputSearch);
                    setLimit(inputLimit);
                    setIsLoading(true);
                    resetPage();
                    }}>
            <select className='border p-1.5' onChange={(e)=>{
                setselectedCategory(e.target.value);
            }}>
                <option>Choose a job category</option>
                <option>All jobs</option>
                {categories.map( (category, index) => <option key={index} value={category.slug} >{category.name}</option>
                 )}
            </select>

            <div className='border p-2'>
                <label className='mb-2 block'  htmlFor="search">Search job listing title and description</label>
                 <input className='pl-2 border' type="search" id="search"  onChange={ e => {
                    setInputSearch((e.target.value));
                }} />
            </div>

            <div className='border p-2'>
                <label className='block'  htmlFor="limit">Limit the number of job listing result <span className='text-sm italic'>(will not work with search input, API problem)</span></label>
                <input className='border w-20 my-1.5' type="number" id="limit" min="1" onChange={ e => {
                    setInputLimit(e.target.value);
                }} />
            </div>

            <div className='flex justify-evenly'>
                <button className=' rounded-lg px-5  bg-blue-500 text-white' type="submit">Go!</button>
                <button className=' rounded-lg px-5  bg-blue-500 text-white' onClick={resetFilters}>Reset</button>
            </div>
        </form>
    )
}

export default Filters
