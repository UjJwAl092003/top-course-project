
function Filter(props){

    let filterData=props.filterData;
    let category=props.category;
    let setcategory=props.setcategory;
    function filterHandler(title){
        setcategory(title)
    }
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center ">
            {
                filterData.map((item)=>{
                  return  <button 
                  className={`text-lg px-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                  ${category===item.title ? "bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}`}
                  key={item.id}
                  onClick={()=>filterHandler(item.title)}>{item.title}</button>
                })
            }
        </div>
    )
}
export default Filter;