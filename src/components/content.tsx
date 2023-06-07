import {Routes, Route} from "react-router-dom"

import { Applications } from "../Pages/Applications/Applications";
import { Filtered } from "../Pages/Filtered/Filtered";
import { Interview } from "../Pages/Interview/Interview";
import { Passed } from "../Pages/Passed/Passed";
import { Practical } from "../Pages/Practical/Practical";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Recruited } from "../Pages/recruited/Recruited";
import { Iulaan } from "../Pages/Iulaan/Iulaan";

export default function Contents () {

return (

<div>
      <Routes>
            <Route path="/" element={ <Dashboard/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>} ></Route>
            <Route path="/applications" element={ <Applications/>} ></Route>
            <Route path="/Filtered" element={<Filtered />} ></Route>
            <Route path="/interview" element={<Interview />} ></Route>
            <Route path="/passed" element={<Passed />} ></Route>
            <Route path="/practical" element={<Practical />} ></Route>
            <Route path="/recruited" element={<Recruited />} ></Route>
            <Route path="/iulaan" element={<Iulaan />} ></Route>
             
               </Routes>
</div>    


);



}