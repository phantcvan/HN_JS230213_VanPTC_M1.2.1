// Bài1: Đảo ngược chuỗi
function reverseString(input) {
    let inputB1 = document.getElementById(input).value;

    let reversedString = "";
    for (let i = inputB1.length - 1; i >= 0; i--) {
        reversedString += inputB1[i];
    }
    console.log("ok", reversedString);
    document.getElementById("resultB1").innerHTML = reversedString;
}

// Bài 2: Viết hoa ký tự đầu
function capitalizeFirstLetter() {
    let input = document.getElementById('inputB2').value;
    let words = input.replace(/\s+/g, " ").split(" ");
    console.log(words);
    let capitalize = [];
    for (let i = 0; i < words.length; i++) {
        capitalize.push(words[i][0].toUpperCase() + words[i].slice(1));
    }
    resultB2 = capitalize.join(' ');
    document.getElementById("resultB2").innerHTML = resultB2;
}

// Bài 3: Xóa các phần tử trùng nhau
function checkSubstring() {
    let input = document.getElementById("inputB3").value.toLowerCase();
    let words = input.split(",");
    let resultB3 = [];
    for (let i = 0; i < words.length; i++) {
        if (resultB3.indexOf(words[i]) === -1) {
            resultB3.push(words[i]);
        }
    }
    document.getElementById("resultB3").innerHTML = resultB3;
}

// Bài 4: sắp xếp theo thứ tự tăng dần
function insertionSort() {
    let input = document.getElementById("inputB4").value.replace(/\s+/g, " ");
    let arr = input.split(",");
    if (arr.indexOf(" ") !== -1) {
        arr.splice(arr.indexOf(" "), 1);
    }
    for (var a = 0; a < arr.length; a++) {
        arr[a] = Number(arr[a]);
    }
    for (var a = 0; a < arr.length; a++) {
        if (isNaN(arr[a])) {
            arr.splice(a, 1);
        }
    }
    console.log(arr);

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    document.getElementById("resultB4").innerHTML = arr;
}

//   Bài 5: quản lý nhân viên
let listStaff = [
    {
        name: "Nguyễn Văn A",
        code: "RA001",
        gender: "Nam",
        age: 35,
        homeTown: "Hà Nội"
    },
    {
        name: "Phạm Thị B",
        code: "RA002",
        gender: "Nữ",
        age: 28,
        homeTown: "Huế"
    },
    {
        name: "Trần Thị C",
        code: "RA003",
        gender: "Nữ",
        age: 25,
        homeTown: "Hải Phòng"
    }

];

function add() {
    let nameUser = document.getElementById("name").value;
    let code = document.getElementById("mnv").value;
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let homeTown = document.getElementById("homeTown").value;
    let staff = {
        id: 1,
        name: nameUser,
        code: code,
        gender: gender,
        age: age,
        homeTown: homeTown,
    };
    let flag = JSON.parse(localStorage.getItem("flag"));
    if (listStaff.find((s) => s.code === code) && flag == null) {
        alert("Mã số nhân viên đã tồn tại!");
        return;
    }
    if (flag != null) {
        listStaff.splice(flag, 1, staff);
        localStorage.removeItem("flag");
        localStorage.setItem("listStaff", JSON.stringify(listStaff));
        renderListStaff();
        return;
    }
    listStaff.push(staff);
    localStorage.setItem("listStaff", JSON.stringify(listStaff));
    renderListStaff();
}
function staffInfo(id) {
    let staff = listStaff[id];

    // Đổ thông tin của nhân viên vào các ô input để chỉnh sửa
    document.getElementById("name").value = staff.name;
    document.getElementById("mnv").value = staff.code;
    document.getElementById("gender").value = staff.gender;
    document.getElementById("age").value = staff.age;
    document.getElementById("homeTown").value = staff.homeTown;
    localStorage.setItem("flag", id);
}

function deleteStaff(id) {
    listStaff.splice(id, 1);
    localStorage.setItem("listStaff", JSON.stringify(listStaff));
    renderListStaff();
}

function renderListStaff() {
    let result = `
                <tr>
                    <td><b> TT </b></td>
                    <td><b> Họ và tên </b></td>
                    <td><b> Mã NV</b></td>
                    <td><b> Giới tính </b></td>
                    <td><b> Tuổi </b></td>
                    <td><b> Quê quán </b></td>
                    <td><b> Sửa </b></td>
                    <td><b> Xoá </b></td>
                </tr>
            `;
    for (let i = 0; i < listStaff.length; i++) {
        result += `
                    <tr>
                        <td> ${i + 1} </td>
                        <td style="text-align: left"> ${listStaff[i].name
            } </td>
                        <td> ${listStaff[i].code} </td>
                        <td> ${listStaff[i].gender} </td>
                        <td> ${listStaff[i].age} </td>
                        <td> ${listStaff[i].homeTown} </td>
                        <td> <button onclick="staffInfo(${i})">Edit</button> </td>
                        <td><button onclick="deleteStaff(${i})">Delete</button></td>
                    </tr>`;
    }
    document.getElementById("table").innerHTML = result;
}
renderListStaff();









// Khi nhập giá trị mới thì xoá kết quả cũ
function clearResult() {
    document.getElementById("resultB1").innerHTML = "";
    document.getElementById("resultB2").innerHTML = "";
    document.getElementById("resultB3").innerHTML = "";
    document.getElementById("resultB4").innerHTML = "";
}
