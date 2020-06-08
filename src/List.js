import React from 'react';



const List = () => {


            
                var q = (28*100)/30;

                var q1 = Math.round(q);

                var q2 = (27*100)/30;
                

            
  return (


    <div className="list">



    <h6 className="h6">Skills i learned till now : </h6>
    <hr></hr>

    
        <ol className="li">
            <li className="q">Quater.1  Percentile = {q1}%  </li><br></br>
                <ul>
                    <li>Linux</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                </ul><br></br><hr></hr>

            <li className="q">Quater.2   Percentile = {q2}%   </li><br></br>
                <ul>
                    <li>Git</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul> <br></br><hr></hr>

            <li className="q">Quater.3   Percentile = Not completed yet   </li><br></br>
                <ul>
                    <li>Advance JavaScript</li>
                    <li>React</li>

                </ul>   

        </ol>
    

      
    </div>
  );
}

export default List;