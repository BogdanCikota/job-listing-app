
function NextButton({setJobPositionTop, jobs, numOfResults, setPageNum, pageNumElement, fromIndex, setfromIndex, toIndex, settoIndex}) {
    return (
        <button disabled={toIndex > jobs.length-1 ? true : false} className='font-bold bg-blue-400 hover:bg-blue-500 px-2 pb-0.5 rounded-full text-xl text-white'
         onClick={()=>{
            setPageNum(()=>{
                let pageNumCurrent = pageNumElement.innerHTML;
                return +pageNumCurrent + +1
                });
            setfromIndex(fromIndex+numOfResults);
            settoIndex(toIndex+numOfResults);
            setJobPositionTop(0);
        }}>&#62;</button>
    )
}

export default NextButton
