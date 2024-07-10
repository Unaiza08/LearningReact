import React from 'react'

function Task2() {
    const eatables = () => ([
        { id: 1, name: "apple", category: 'fruit' },
        { id: 2, name: "potato", category: 'vegetable' },
        { id: 3, name: "banana", category: 'fruit' },
        { id: 4, name: "carrot", category: 'vegetable' },
        { id: 5, name: "orange", category: 'fruit' }
    ]);

       const disp_eatables=eatables().map((elements)=>{
        return(
            <>
          
            <div key={elements.id} className='mx-5'>
                <ol>
                    <li><b>ID</b>={elements.id} <b>Name</b>={elements.name} <b>Category</b> ={elements.category}</li>
                </ol>
            </div>
           
            </>
        );
       }

       )


 return(
    <div>
        {disp_eatables}
    </div>
 );
}

export default Task2