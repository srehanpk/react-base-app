import React from 'react';



function App(props) {
  return (
    <div className="App">
    <h1 className="h1">Hello World !</h1>
    <img className="img" src="Rayhan.jpeg" alt="" title="Syed Rayhan Ahmed" ></img>   

      <p>My name is 
      <br></br>
       <strong className="name" > {props.name} </strong> 
       <br></br>
      and i am learning Cloud Native Computing from
       <br></br>
      <abbr title="Presidential Initiative for Artificial Intelligence & Computing" className="piaic" >
      PIAIC</abbr> </p>

          
      
    </div>
  );
}

export default App;
