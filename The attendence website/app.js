import{signInFirebase} from './config/firebase.js'

window.signIn = async function () {
    // first we get value
    const allInput = document.getElementsByTagName('input')
    const email = allInput[0].value
    const password = allInput[1].value
   
    try {
        await signInFirebase(email, password)
        console.log('registered successfully signed in')

    } catch (e) {
        const errorElem = document.getElementById('error')
        errorElem.innerHTML = e.message
        console.log(e)
    }
}