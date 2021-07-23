import {useEffect} from "react";
import Job from "./jobList_components/Job";
import chunk from 'lodash.chunk';
import Pagination from "./jobList_components/Pagination";

function JobList({setJobPositionTop, openFilters, goToPage, setgoToPage, pages, jobs, fromIndex, setfromIndex, toIndex, settoIndex,
    chunkedPages, setChunkedPages, pageNum, setPageNum, numOfResults} ) {

    useEffect(() => {
        //divide pages array into 100 chunks
        setChunkedPages(chunk(pages, 100));
    }, [pages, setChunkedPages]);

    return (
        <main className=' grid mb-2 xl:mt-16 xl:m-auto xl:w-2/3 xl:items-start'>
            <div className={`${openFilters ? `xl:bg-opacity-30 bg-blue-400` : `bg-blue-500`} text-center  p-1 text-white mb-4 xl:bg-blue-300 xl:rounded-b-full xl:p-1.5`}>Found <span>{jobs.length} results</span></div>
            <h2 className={`${jobs.length < numOfResults ?  `hidden`:`inline-block`} font-bold text-center text-blue-900`} >Page <span className='pageNum'>{pageNum}</span> </h2>                    
            
            <div className='jobs-container'>
                {jobs.map((job, index) => {
                    return index >= fromIndex && index < toIndex && <Job key={index} job={job} setJobPositionTop={setJobPositionTop}/>
                })}
            </div>
            

            <h2 className={`${jobs.length < numOfResults ? `hidden`:`inline-block`} font-bold text-center text-blue-900`} >Page <span className='pageNum'>{pageNum}</span> </h2>
            
            {
                jobs.length > numOfResults  && 
                
                <Pagination 
                fromIndex={fromIndex}
                setfromIndex={setfromIndex}
                toIndex={toIndex}
                settoIndex={settoIndex}
                chunkedPages={chunkedPages}
                setChunkedPages={setChunkedPages}
                pageNum={pageNum}
                setPageNum={setPageNum}
                jobs={jobs}
                pages={pages}
                numOfResults={numOfResults}
                goToPage={goToPage}
                setgoToPage={setgoToPage}
                setJobPositionTop={setJobPositionTop}
                />
            }
            
        </main>
    )
}

export default JobList
