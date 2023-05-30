import React,{useContext} from "react";
import { FirstName, LastName } from './App';
const CompC = () => {
    // return (<>
    //     <FirstName.Consumer>
    //         {
    //             (fname) => {
    //                 return (
    //                     <LastName.Consumer>
    //                         {
    //                             (lname)=>{
    //                                 return(
    //                                     <h1>
    //                                         My Name is {fname} {lname}
    //                                     </h1>
    //                                 );
    //                              }
    //                          }
    //                      </LastName.Consumer>
    //                  );
    //              }
    //          }
    //      </FirstName.Consumer>
    //  </>);

    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return(
        <h1>
            My Name is {fname} {lname}
        </h1>
    );

}

export default CompC;