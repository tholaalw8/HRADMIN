import {Routes, Route} from "react-router-dom"

import { Applications } from "../Pages/Applications/Applications";

import { Interview } from "../Pages/Interview/Interview";
import { Passed } from "../Pages/Passed/Passed";
import { Practical } from "../Pages/Practical/Practical";
import { Dashboard } from "../Pages/Dashboard/Dashboard";

import { Shortlist } from "../Pages/ShortListed/Shortlist";

export default function Contents () {

return (

<div>
      <Routes>
            <Route path="/" element={ <Dashboard/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>} ></Route>
            <Route path="/applications" element={ <Applications/>} ></Route>
            <Route path="/interview" element={<Interview />} ></Route>
            <Route path="/passed" element={<Passed />} ></Route>
            <Route path="/practical" element={<Practical />} ></Route>
            <Route path="/shortlist" element={<Shortlist />} ></Route>
             
               </Routes>
</div>    


);



}