import { firebaseClassDetail } from "../config/firebase.js"

window.classDetail = async function(){
    document.getElementById
    const time =   document.getElementById('time').value
    const shedule =   document.getElementById('shedule').value
    const teacher =   document.getElementById('teacher').value
    const section =   document.getElementById('section').value
    const course =   document.getElementById('course').value
    const batch =   document.getElementById('batch').value

    try {
      await  firebaseClassDetail(time, shedule, teacher, section, course, batch)
      alert('Add in course succesfully')
    } catch(e){
        
        console.log(e.message)
    }
}