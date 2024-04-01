import {useState, useRef, useEffect} from 'react';


function Testingconverter(){
  let decimal;
  let [answer, Setanswer] = useState()
  let leftoverval = [];
  let binaryval = [];
  let [error, Seterror] = useState();
  //Testing 
  let ts = [];

  function handlesystem(){
    let userinput = document.getElementById("user-input").valueAsNumber;

    ts.push(userinput);
    let reversets = ts.concat().reverse()
      
    while(reversets[0] != 1){
 
        let lastnumarray = ts.length - 1;
        let op2 = ts[lastnumarray] % 2;
        let b = Math.floor(ts[lastnumarray] / 2)
      //Push in all value
      console.log(op2)

      ts.push(b);
      binaryval.push(op2);
      reversets = ts.concat().reverse()
      if(reversets[0] == 1){
        binaryval.push(0);
        let lenbinaryval = binaryval.length - 1
        binaryval[lenbinaryval] += 1;
        
        //console.log(lenbinaryval)
      }
    }
    let formatanswer1 = binaryval.reverse();
    let formatanswer2 = formatanswer1.toString();
    let formatanswer3 = formatanswer2.replaceAll(",","")
    Setanswer(formatanswer3)
  }

  return(<>
  <input inputMode='numeric' type='number' id="user-input" value={decimal} />
  <button onClick={handlesystem} >Submit</button>
  <p>{answer}</p>
  <p>{error}</p>
  </>)
}

export default Testingconverter;