const initState = {
    user:null,
    showLoginForm:true,
    loading:true,
    validUsers: ["testusera@gmail.com","testuserb@gmail.com"],
    dummyPass:"12345678"
}

export const reducer = (state=initState,action)=>{
    switch(action.type){
        case "SHOW_SIGNUP":
            return {
                ...state,
                showLoginForm:false
            }
        case "SHOW_LOGIN":
            return {
                ...state,
                showLoginForm:true
            }
        case "LOGIN_USER":
            return{
                ...state,
                user:action.payload
            }
        case "LOGOUT_USER":
            return {
                ...state,
                user:null
            }
        default:
            return state
    }
    
    return state
}