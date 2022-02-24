import { createContext, useState } from "react";

export const MyContext= createContext();

const StudentDataCompo = (props) => {
  const [studentData,setStudentData] = useState([
    {id:'1',name:'Md Ashraful Huda',age:35,course: "MERN",batch: "Jan",},
    {id:'2',name:'Ravi',age:35,course: "MERN",batch: "July",},
    {id:'3',name:'Sourav',age:35,course: "MERN",batch: "November",},
    {id:'4',name:'Zakariya',age:35,course: "MERN",batch: "December",},
    {id:'5',name:'Suraj',age:35,course: "MERN",batch: "July",},
    {id:'6',name:'Pavan',age:35,course: "MERN",batch: "August",},
    {id:'7',name:'Baazigar',age:35,course: "MERN",batch: "September",},
  ]);
  return (
    <MyContext.Provider value={[studentData,setStudentData]}>
      {props.children}
    </MyContext.Provider>
  );
};

export default StudentDataCompo