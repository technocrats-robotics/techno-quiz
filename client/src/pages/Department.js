import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Bg from "../components/Bg";
import { departmentInfo } from "../utils/departmentInfo";
function Department() {
    
    const {id} = useParams();
    // consume id
    return (
        <>
        <Navbar/>
        {/* <DepartmentContent/> */}
        <Bg/>
        </>

        
    );
}

export default Department;
