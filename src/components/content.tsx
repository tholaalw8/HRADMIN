import {Routes, Route} from "react-router-dom"
import { Users } from "../Pages/Users/Users";
import { Consumables } from "../Pages/Consumable/Consumables";
import { Imports } from "../Pages/Imports";
import { Categories } from "../Pages/Settings/Categories/Categories";
import { Locations } from "../Pages/Settings/Locations/Locations";
import { ActivityReport } from "../Pages/Reports/ActivityReports";
import { Checkout } from "../Pages/CheckInOut/CheckInOut";
import { Dashboard } from "../Pages/Dashboard";
import { CreateItem } from "../Pages/Consumable/CreateItem";
import { Departments } from "../Pages/Settings/Departments/Departments";

export default function Contents () {

return (

<div>
      <Routes>
            <Route path="/" element={ <Dashboard/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>} ></Route>
            <Route path="/consumables" element={<Consumables/>} ></Route>
            <Route path="/people" element={<Users />} ></Route>
            <Route path="/import" element={<Imports />} ></Route>
            <Route path="/settings" element={<div> imports </div>} ></Route>
            <Route path="/category" element={<Categories/>} ></Route>
            <Route path="/department" element={<Departments/>} ></Route>
            <Route path="/location" element={<Locations/>} > </Route>
            <Route path="/reports" element={<div> locations </div>} ></Route>
            <Route path="/activityReport" element={<ActivityReport />} ></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/createItem" element={<CreateItem/>}></Route>
            
      </Routes>
</div>    


);



}