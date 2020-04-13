let listStudent = [];
function addNewStudent(newStudent) {
    //Thêm mới hv vào mảng
    if (newStudent.length>=2){
        listStudent.push(newStudent);
        return true;
    }
    else {return false};

}

function createNewStudent() {
    let newStudent = document.getElementById("newStudent").value;
    if(addNewStudent(newStudent)){
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
    data+="<tr><td>STT</td><td>Họ và tên</td><td>Edit</td><td>Delete</td></tr>"
    for (let i= 0; i<listStudent.length;i++){
        data+= "<tr>" +
            '<td>'+(i+1)+'</td>'+
            '<td>' + listStudent[i]+'</td>'
            +'<td><button onclick="editStudent('+i+')">Edit</button></td>'
            +'<td><button onclick="deleteStudent('+i+')">Delete</button></td>'+
            '</tr>';
    }
    data+="</table>";
    document.getElementById("listStudent").innerHTML= data;
}
function editStudent(index) {
    let newName = prompt("Đây là chức năng sửa", listStudent[index]);
    listStudent[index] =newName;
    showListSudent();
}

function deleteStudent(index) {
    let conf = confirm("Bạn có muốn xóa "+ listStudent[index]);
    if (conf==true){
        listStudent.splice(index, 1);
    }
    showListSudent();
}
