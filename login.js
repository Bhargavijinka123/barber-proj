
const show=()=>{
    let a=document.getElementById('ab').value
    let b=document.getElementById('cd').value
if(a=="bhargavi@gmail.com" && b=="bhargavi"){
    window.location.assign("./index.html")
}
else{
    window.location.assign("./warn.html")
}
}
const back =()=>{
    document.getElementById('btn').style.display="none"
    document.getElementById('main').style.display="flex"
    window.location.assign("./login.html")

}
