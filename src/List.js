import React from 'react';



const List = () => {
  return (
    <div className="list">

    <h6 className="h6">Skills i learned till now :</h6>

    
        <ol className="li">
            <li>Quater.1</li>
                <ul>
                    <li>Linux</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                </ul>
            <li>Quater.2</li>
                <ul>
                    <li>Git</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul> 
            <li>Quater.3</li>
                <ul>
                    <li>Advance JavaScript</li>
                    <li>React</li>

                </ul>   

        </ol>
    

      
    </div>
  );
}

export default List;