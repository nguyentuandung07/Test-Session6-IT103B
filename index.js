// Câu 1:
let nameStudents = "Quý,Nam,Lan,Hùng,Nam";
let students = nameStudents.split(",");
// Phương thức này có làm thay đổi mảng gốc hay không?
// Có
students.reverse();
console.log(students);

if (students.includes("Lan")) console.log("Tên Lan tồn tại trong mảng");
else console.log("Tên Lan không tồn tại trong mảng");

if (students.includes("Nam")) console.log(students.indexOf("Nam"));
else console.log("Tên Nam không tồn tại trong mảng");

// Câu 2:
let momeyList = [100, 200, 300, 400];

// Tất cả phần tử trong mảng
for (const money of momeyList) {
  console.log(money);
}

// Tất cả vị trí của các phần tử trong mảng trong mảng
for (const moneyIndex in momeyList) {
  console.log(moneyIndex);
}

// Tổng tất cả tiền có vị trí chẵn (0,2,...)
let sumOld = 0;
for (let i = 0; i < momeyList.length; i++) {
  if (i % 2 === 0) {
    sumOld += momeyList[i];
  }
}
console.log(sumOld);
