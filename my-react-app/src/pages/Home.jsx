import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function Home() {
  const {data:CatData, isLoading, isError, refetch} = useQuery(["cat"], () => {
   return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    
  });
  if(isError){
    return <h1>Sorry there was an error</h1>
  }

  if(isLoading){
    return <h1>Loading</h1>
  }
  return (
    <div>
      <h1>This is Home Page</h1>
      <h4> {CatData?.fact} </h4>
      <button className="btn btn-info" onClick={refetch}> refetch</button>
    </div>
  );
}
export default Home;
