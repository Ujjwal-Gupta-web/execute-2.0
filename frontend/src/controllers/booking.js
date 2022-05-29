const base = "https://localhost:5000"

export const get_bookings = async() =>{
    const res = await fetch(`${base}/api/booking/`,{
        method : 'GET',
        headers : {
            "Content-Type": "application/json"
        }
    });
    const ans = await res.json();
    return ans;
};

export const add_booking = async(obj) =>{
    const res = await fetch(`${base}/api/booking/`,{
        method : 'POST',
        body:JSON.stringify(obj),
        headers : {
            "Content-Type": "application/json"
        }
    });
    const ans = await res.json();
    return ans;
};

export const update_booking = async(obj) =>{
    const res = await fetch(`${base}/api/booking/`,{
        method : 'PUT',
        body:JSON.stringify(obj),
        headers : {
            "Content-Type": "application/json"
        }
    });
    const ans = await res.json();
    return ans;
};
