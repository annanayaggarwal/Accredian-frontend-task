export const referFriend=async(refData)=>{
    try {
        const response=await fetch('https://accredian-backend-task-kvl1.onrender.com/ref/addref',{
           method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':' https://accredian-backend-task-bbxf.onrender.com/',
            },
            body: JSON.stringify(refData)
        })
        return await response.json();
    } catch (error) {
        throw new Error(error);
    }
}