import { options, uploadImage, studentDetailPostInTODb } from "../config/firebase.js";



window.studentDetail = async function(){
    const name = document.getElementById('name').value
    const fName = document.getElementById('fName').value
    const rollNumber = document.getElementById('rollNumber').value
    const conNumber = document.getElementById('conNumber').value
    const cnicNumber = document.getElementById('cnicNumber').value
    const courseName = document.getElementById('select_course').value
    const picture = document.getElementById('picture').files[0]

    try{
        const imageURL = await uploadImage(picture)
        let student_id = await studentDetailPostInTODb(name, fName, rollNumber, conNumber, cnicNumber,courseName,imageURL )
        console.log(student_id)
        alert('student detail in database')
    }
    catch(e){
        console.log(e.message)
    }
}

async function course(){   
    const ads = await options()
        const adsElm = document.getElementById("select_course")
        for (let item of ads) {
            adsElm.innerHTML+=`<option value="Course ${item.course} / Time ${item.time} / Schedule${item.shedule}">Course ${item.course} / Time ${item.time} / Schedule ${item.shedule}</option>`
        }
    }
    course();