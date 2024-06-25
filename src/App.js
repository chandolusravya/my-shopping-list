/*
const products=[
  {name: 'cabbage', isFruit: false, id:1},
  {name:'carrot', isFruit: true, id:2}
]

export default function Shopping(){
  const listitems=products.map(product => 
      <li key={product.id}>
          {product.name},
          {product.id}
      </li>
  );

  return (
      <ul>{listitems}</ul>
  )
*/

//counting number of times button is clicked!


import {useState} from "react";

/*
function MyButton(){

  const [count,setCount]=useState(0);
  //count is the current state and setcount is the function to update it

  function handleClick(){
    setCount(count+1)
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function counting(){
  return (
    <div>
      <MyButton/>
      <MyButton/>
    </div>
  )
}
}*/



// to update both buttons together!
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}