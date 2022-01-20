import React from "react";
import "../styles/dept.css"
import Logo from "../img/logo.png"
function Bg() {
  return (
    <div class='bg'>
       
            <h1>General Robotics</h1>
            
            <p class='text'>
        Linked List
        Linked List can be defined as collection of objects called nodes that are randomly stored in the memory.
        A node contains two fields i.e. data stored at that particular address and the pointer which contains the address of the next node in the memory.
        The last node of the list contains pointer to the null.
        DS Linked List
        Uses of Linked List
        The list is not required to be contiguously present in the memory. The node can reside any where in the memory and linked together to make a list. This achieves optimized utilization of space.
        list size is limited to the memory size and doesn't need to be declared in advance.
        Empty node can not be present in the linked list.
        We can store values of primitive types or objects in the singly linked list.
        Why use linked list over array?
        Till now, we were using array data structure to organize the group of elements that are to be stored individually in the memory. However, Array has several advantages and disadvantages which must be known in order to decide the data structure which will be used throughout the program.
        
        Array contains following limitations:
        
       
        </p>
       

</div>
  );
}

export default Bg;
