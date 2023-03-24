
import {useAppSelector,useAppdispatch} from "../hooks/redux"
import { useEffect } from 'react';


const  Layout = (props:any)=> {
  // const { address, isConnecting, isDisconnected ,isConnected} = useAccount()
    // const dispatch = useAppdispatch()






    return (
   <>
   {props.children}
   </>
    )
  }
  
  
  export default Layout