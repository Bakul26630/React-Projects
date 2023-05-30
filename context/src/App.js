import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from "./Router/About";
import Contact from "./Router/Contact";
import Home from './Router/Home';
import Menu from "./Router/Menu";
import Search from "./Router/Search";

const App = () => {
  return (<>
    <Routes>
      <Route path="/" element={<Menu />}>
        <Route index element={<Home />} />
        <Route path="/downloadcv" element={<><h1>Dowload MY CV</h1></>} />
        <Route path="/mygallery" element={<><h1>My Photo Gallery</h1></>} />
      </Route>
      <Route path="about" element={<About title="About Page" />} />
      <Route path="search" element={<Search />} />
      <Route path="contact/:fname/:lname" element={<Contact />} />
      <Route path="*" element={<h1>Error Page</h1>} />
    </Routes>
  </>);
}

// import SelectField from "./PokemonApi/SelectField";
// const App = ()=>{
//   return(<>
//     <SelectField/>
//   </>);
// }

// const App=()=>{
//   const[count,SetCount]=useState(0)
//   useEffect(()=>{
//     document.title=`You Clicked me ${count} times`
//   });

//   return(<>
//     <button onClick={()=>{
//       SetCount(count+1)
//     }}> You Clicked Me {count} times</button>
//   </>);
// }

// const App=()=>{
//   const [Num,setNum] = useState(0)
//   useEffect(()=>{
//     if (Num>=5)
//       document.body.style.backgroundColor="red"
//   },[Num])
//   return(<>
//     <button onClick={()=>{setNum(Num+1)}}>Click me {Num}</button>
//   </>);
// }


// import React, { createContext } from "react";
// import CompA from "./CompA";

// const FirstName = createContext();
// const LastName = createContext();

// const App = () => {
//   return (<>
//     <FirstName.Provider value={"varun"}>
//       <LastName.Provider value={"Garg"}>
//         <CompA />
//       </LastName.Provider>
//     </FirstName.Provider>
//   </>);
// }

// export {FirstName,LastName};
export default App;