import React, {useState } from "react";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import{Button} from "reactstrap";


function Message(props){
  const[agencyCode, setagencyCode]= useState('');
  const[accountCode, setaccountCode]= useState('');
  const[code, setCode]= useState('');
  const [reply, setReply]= useState('');

  const changeagencyCode = (event) => {
    setagencyCode(event.target.value);
  };

  const changeaccountCode = (event) => {
    setaccountCode(event.target.value);
  };

  const changeCode = (event) => {
    setCode(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      agencyCode,
      accountCode,
      code,
    };

  

    axios
    .post("http://localhost:8080/tsaNotUpdateToCgas", val)
    .then(res=>replyResponse(res.data))
    .catch(err => console.log(err));
   
    
    // props.func(val);
    // clearState();
  };

const replyResponse = (data) =>{
  console.log(data)
 setReply(data); 
}
  // const clearState = () => {
  //   setagencyCode('');
  //   setaccountCode('');
  //   setCode('');
  // };
const tableData = reply;
console.log(tableData);
  return (
    <div>
      <label style={{padding:10}}>agencyCode</label>
      <input type="text" value={agencyCode} onChange={changeagencyCode} />
      <label style={{padding:10}}>accountCode</label>
      <input type="text" value={accountCode} onChange={changeaccountCode} />
      <label style={{padding:10}}>Code</label>
      <input type="text" value={code} onChange={changeCode} />
      <Button style={{marginLeft:30}} color="danger" onClick={transferValue}> CHECK STATUS IN CGAS AND TSA</Button>
      <br />
    
      {/* <table {...reply} className="table table-stripped">
        <thead>
          <tr >
            <th>id</th>
            <th>code</th>
            <th>accountCode</th>
            <th>agencyCode</th>
          </tr>
        </thead>
        <tbody>
        
        
            <tr key={reply.id}  >
                                <td>{reply.id}</td>
                                <td>{reply.accountCode}</td>
                                <td>{reply.agencyCode}</td>
                                <td>{reply.code}</td>
                            </tr>
          
          </tbody>
      </table> */}

<ul {...reply}>
       
        <li>{reply.STATUS1}</li> 
        <li>{reply.STATUS2}</li> 
        <li>{reply.STATUS3}</li> 
        <li>{reply.STATUS4}</li> 
        <li>{reply.STATUS5}</li> 
        <li>{reply.STATUS6}</li> 
        <li>{reply.STATUS7}</li> 
        <li>{reply.STATUS8}</li> 
        <li>{reply.STATUS9}</li>  
     
   </ul>
     
     
    </div>

  );

}
export default Message;
