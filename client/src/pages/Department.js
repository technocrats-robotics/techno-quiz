import React from "react";
import { useParams } from "react-router-dom";
import { departmentInfo } from "../utils/departmentInfo";
function Department() {
    
    const {id} = useParams();
    // consume id
    return (
        <div>
            Department Page
        </div>
    );
}

export default Department;
