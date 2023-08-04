import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Cards from "./Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from './Spinner';
const App = () => {
  const [courses, setcourses] = useState(null);
  const [loading, setloading] = useState(true);
  const [category,setcategory]= useState(filterData[0].title)
  async function fetchData() {
    setloading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setcourses(output.data);
    }
    catch (error) {
      toast.error("error detected");
    }
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">


      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">

        <div>
          <Filter filterData={filterData}
          category={category}
          setcategory={setcategory} />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          }
        </div>

      </div>


    </div>
  );
};

export default App;
