import axios from "axios";

async function api()
{
    try
    {
        const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res.data);
        return res.data;
    }
    catch (error)
    {
        console.error("error retrieving api data",error);  
        return "error";  
    }
}

export default api;
