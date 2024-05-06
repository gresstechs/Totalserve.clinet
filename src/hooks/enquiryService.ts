import axios from 'axios'
import {environment} from '../environments/environment'

export const addEnquiry= async (enquiry:any)=>{
     try{

        const respomse =  await axios
            .post(environment.gatewayApiEndpoint+'/Enquiry/CreateEnquiry',enquiry)
        
        return respomse.data;
     } catch(err) {
        return [];
     }
      
}