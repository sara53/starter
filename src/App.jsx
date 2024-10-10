import { useState } from "react";
import { useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'api/react-tabs-project';



const App = () => {
  let [ jobs, setJobs ] = useState( [] );
  let [ isLoading, setIsLoading ] = useState( true );
  let [ currentItem, setCurrentItem ] = useState( 0 );

  const fetchJobs = async () => {
    let response = await fetch( url )
    let newJobs = await response.json();
    setJobs( newJobs )
    setIsLoading( false )
  }


  useEffect( () => {
    fetchJobs();
  }, [] )

  if ( isLoading ) {
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }
  return <section className="jobs-center">
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
    <JobInfo jobs={jobs} currentItem={currentItem} />
  </section>;
};
export default App;
