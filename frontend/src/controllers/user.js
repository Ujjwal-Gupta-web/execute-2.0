const base = "http://localhost:5000"

export const auth_user = async(obj) => {
    const res = await fetch(`${base}/api/user/auth`,{
        method: "POST",
        body: JSON.stringify(obj),
        headers
    })
}