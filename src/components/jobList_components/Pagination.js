import Pages from "./pagination_components/Pages";
import PrevButton from "./pagination_components/PrevButton";
import NextButton from "./pagination_components/NextButton";
import { useEffect, useState } from "react";

function Pagination({setJobPositionTop, goToPage, setgoToPage, numOfResults, jobs, fromIndex, setPageNum, setfromIndex, settoIndex, toIndex, pages, chunkedPages }) {
    const [paginationNums, setPaginationNums] = useState(0);
    const pageNumElement = document.querySelector('.pageNum');

    useEffect(() => {
        if(window.innerWidth > 425) {
            setPaginationNums(11);
        } else {
            setPaginationNums(5);
        }
    }, [])
    

    return (
            <div className='m-auto my-4 flex gap-6 justify-center mb-1.5 items-center px-4'>
                <PrevButton 
                setPageNum={setPageNum}
                fromIndex={fromIndex} 
                setfromIndex={setfromIndex}
                toIndex={toIndex}
                settoIndex={settoIndex}
                pageNumElement={pageNumElement}
                numOfResults={numOfResults}
                setJobPositionTop={setJobPositionTop}
                />
                {pages && pages.length > 100 && !goToPage && <button onClick={(e)=> {
                     setgoToPage(!goToPage);
                     setJobPositionTop(e.target.offsetTop);
                    }} className='rounded-lg px-1 bg-blue-400 hover:bg-blue-500 text-white'>Go to page...</button>}

            { 
                // generate from/to select
                goToPage && pages.length > 100 && 
                <div className='flex gap-3 flex-wrap justify-center'>
                    {
                        chunkedPages.map((chunk, index) => {
                            return <Pages
                                    key={index}
                                    pages={pages}
                                    lastChunk={chunkedPages.length-1}
                                    chunkIndex={index}
                                    chunk={chunk}
                                    setPageNum={setPageNum}
                                    setfromIndex={setfromIndex}
                                    settoIndex={settoIndex}
                                    numOfResults={numOfResults}
                                    setJobPositionTop={setJobPositionTop}
                                    />
                        })
                    }
                </div>
            }

            {
               chunkedPages.length > 0 &&  pages.length < 100 && pages.length >= paginationNums &&
                <Pages
                chunk={chunkedPages[0]}
                setPageNum={setPageNum} 
                setfromIndex={setfromIndex} 
                settoIndex={settoIndex}
                numOfResults={numOfResults}
                setJobPositionTop={setJobPositionTop}
                /> 
            }

            {
                chunkedPages.length > 0 &&  pages.length < paginationNums && 
                <div className='flex flex-wrap gap-2 justify-center'>
                    {chunkedPages[0].map((num, index) => 
                    <button 
                    key={index} 
                    className={`${num+1 === 10 && `pr-0.5`} rounded-full w-8 py-1  bg-blue-400 hover:bg-blue-500 text-white` }
                    onClick={()=>{
                        setPageNum(num+1);
                        setfromIndex(num * numOfResults);
                        settoIndex(+num * numOfResults + +numOfResults);
                        setJobPositionTop(0);
                    }}
                    >
                        {num+1}
                    </button>
                    )}
                </div>
            }

            <NextButton
            setPageNum={setPageNum}
            fromIndex={fromIndex} 
            setfromIndex={setfromIndex}
            toIndex={toIndex}
            settoIndex={settoIndex}
            pageNumElement={pageNumElement}
            numOfResults={numOfResults}
            jobs={jobs}
            setJobPositionTop={setJobPositionTop}
            />
        </div>
    )
}

export default Pagination
