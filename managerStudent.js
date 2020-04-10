let listStudent = [];
let listSTT= [];
function addNewStudent(newStudent, newSTT) {
    //Thêm mới hv vào mảng
    if (newStudent.length>2 && newSTT>5){
        listStudent.push(newStudent);
        listSTT.push(newSTT)
        return true;
    }
    else {return false};

}

function createNewStudent() {
    let newStudent = document.getElementById("newStudent").value;
    let newStt = document.getElementById("newSTT").value;
    if(addNewStudent(newStudent, newStt)){
        alert("Thêm mới thành công");
        document.getElementById("newStudent").value = "";
    }
    else {
        alert("Nhập sai rồi");
        document.getElementById("newStudent").focus();
    }
    showListSudent();
}

function showListSudent() {
    let data = "<table border='2px'>";
    for (let i= 0; i<listStudent.length;i++){
        data+= "<tr><td>" + listStudent[i]+"</td></tr>";
    }
    data+="</table>";
    document.getElementById("listStudent").innerHTML= data;
}
