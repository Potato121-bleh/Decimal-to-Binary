import {useState} from 'react'
export default () => {
    let count = 0;
    let leftoverval = [32,16,8,4,2,1]
    let binaryval = [0,0,0,0,0,1]
    let [explaination, Setexplaination] = useState();
  //  let explaination1 = binaryval.map(() => {
   //     count++;
     //   return(<li>{leftoverval[count - 1]} / 2 = {leftoverval[count]} with the reminder of {binaryval[count - 1]} <br/></li>)
     // })
     // setTimeout(() => {
       // Setexplaination(explaination1)
      //}, 1000);
    
      for(i = 0; i < binaryval.length; i++){
        let explaination1 = (leftoverval, binaryval) => {
            return(<li>{leftoverval[count - 1]} / 2 = {leftoverval[count]} with the reminder of {binaryval[count - 1]} <br/></li>)
        }
        setTimeout(() => {
            explaination1(leftoverval, binaryval);
            Setexplaination(explaination1)
        }, 1000);
      }
    
    return(<>
    <ul>{explaination}</ul>
    </>)
}