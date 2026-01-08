let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER:", a)
}

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = "youtube"
        console.log(username + website)
    }
}
//intersting//
addone(5)
function addone(num){
    return num+1

}

const addtwo=function(num){
    return num +2
}
addtwo(5)