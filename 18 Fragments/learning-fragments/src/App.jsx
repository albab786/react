import "bootstrap/dist/css/bootstrap.min.css";
//import React from "react";

function App() {
  
// return(<React.Fragment>
//    <h1>Healthy Food</h1>
//    <ul className="list-group">
//   <li className="list-group-item">Kabab</li>
//   <li className="list-group-item">Biryani</li>
//   <li className="list-group-item">Keema</li>
//   <li className="list-group-item">Nihari</li>
//   <li className="list-group-item">Tikiya</li>
// </ul>
// </React.Fragment>)
let foodItem=["Kabab","Biryani","Keema","Nihari","Tikiya"];
return(<>
  <h1>Healthy Food</h1>
  <ul className="list-group">
  {foodItem.map((item)=>(
    <li key={item} className="list-group-item">{item}</li>
  ))}
 
 
</ul>
</>)
}

export default App
