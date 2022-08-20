import db from "../../firebase/config";




export const authSignUpUser = ({email, password, name}) => async(dispatch, getState)=>{
    try {
        const user = await db.auth().createUserWithEmailAndPassword(email, password)
        console.log('úser',user)

    } catch (error) {
        console.log(error.message)
    }
};

export const authSignInUser = () => async(dispatch, getState)=>{

};

export const authSignOutUser = () => async(dispatch, getState)=>{

};
