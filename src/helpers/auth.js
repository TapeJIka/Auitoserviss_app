import axios from "axios";

function getUserData(){
    const token = window.localStorage.getItem('access_token')
    const LsData = window.localStorage.getItem('user')
    if (!token){
        return false
    }
    if (LsData){
        return JSON.parse(LsData)
    }

    axios.get('/user',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(data => {
        window.localStorage.setItem('user',data.data)
        return data.data
    }).catch(e =>{
        console.log('asd')
    })
}

export {
    getUserData
}