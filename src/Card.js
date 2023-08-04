import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  let likedCourses=props.likedCourses;
  let setlikedCourses=props.setlikedCourses;
  function clickHandler(){
   if(likedCourses.includes(course.id)){
    setlikedCourses((prev)=>prev.filter((cid)=>(cid !==course.id)));
    toast.warning("Like Removed");
   }
   else{
    if(likedCourses.length===0){
      setlikedCourses([course.id])
    }
    else{
      setlikedCourses((prev)=>[...prev, course.id]);
    }
    toast.success("Liked Successfully");
   }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80">

      <div className="relative ">
        <img src={course.image.url}></img>
        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-14px] grid place-items-center">
          <button onClick={ clickHandler }>{
            likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem" />):(<FcLikePlaceholder fontSize="1.75rem" />)
          }
            
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="text-white mt-2">{
        course.description.length>100 ? (course.description.substr(0,100)) + "...":
        (course.description)
        }</p>
      </div>

    </div>
  )
}
export default Card;