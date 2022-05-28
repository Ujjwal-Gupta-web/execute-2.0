const base = "http://localhost:5000"

export const get_services = async() =>{
    const res = await fetch(`${base}/api/service/`,{
        method : 'GET',
        headers : {
            "Content-Type": "application/json"
        }
    });
    const ans = await res.json();
    return ans;
};

export const add_service = async(obj) =>{
    const res = await fetch(`${base}/api/service/`,{
        method : 'POST',
        body:JSON.stringify(obj),
        headers : {
            "Content-Type": "application/json"
        }
    });
    const ans = await res.json();
    return ans;
};