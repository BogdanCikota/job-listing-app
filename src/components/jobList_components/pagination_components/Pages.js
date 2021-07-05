
function Pages({numOfResults, chunk, setPageNum, setfromIndex, settoIndex}) {
    return (
        <div className='p-2 grid grid-cols-8 gap-2 col-span-full' >
            {   
                chunk.map((page, index) => {
                return <button className='rounded-lg px-1  bg-blue-400 text-white' key={index} onClick={()=>{
                        
                        setPageNum(page+1);

                        setfromIndex(page*numOfResults);

                        settoIndex(page*numOfResults+numOfResults);
                    }}>
                        {page+1}
                    </button>
                } )
            }
        </div>
    )
}

export default Pages
