import{createClient} from 'redis';

export const client =createClient();
const redis=async()=>{
    try{
        await client.connect();
        console.log("Client connected");

    }catch(error){
        console.log(error);
    }
}
export default redis;