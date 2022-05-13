// function showRes() {
// 	var num = +document.getElementById("num").value

// 	var ketQua = isSoNguyenTo(num);

// 	if (ketQua) {
// 		console.log(num + " là số nguyên tố");
// 	} else {
// 		console.log(num + " ko là số nguyên tố");
// 	}
// }

// function isSoNguyenTo(num) {
// 	if (num < 2) {
// 		return false;
// 	}

// 	for (var i = 2; i <= (num -1); i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// function showRes() {
//    var num = +document.getElementById("num").value;
//    var res = document.getElementById("res");

//    if (num < 2) {
//       res.innerHTML = `${num} không là số nguyên tố`;
//       return;
//    }

//    if (num === 2) {
//       res.innerHTML = `${num} là số nguyên tố`;
//       return;
//    }

//    for (var i = 2; i <= num - 1; i++) {
//       if (num % i === 0) {
//          res.innerHTML = `${num} không là số nguyên tố`;
//          return;
//       }
//    }

//    res.innerHTML = `${num} là số nguyên tố`;
//    return num;
// }

function inCacSoNguyenTo() {
   var n = +document.getElementById("n").value;
   var soNguyenTo;

   if (n < 2) {
      document.getElementById(
         "result"
      ).innerHTML = `${n} không là số nguyên tố`;
      return;
   }

   if (n === 2) {
      document.getElementById("result").innerHTML = `${n} là số nguyên tố`;
      return;
   }

   if (n > 2) {
      for (var i = 2; i <= n; i++) {
         soNguyenTo = true;

         for (var j = 2; j <= i - 1; j++) {
            if (i % j === 0) {
               soNguyenTo = false;
               break;
            }
         }

         if (soNguyenTo) {
            document.getElementById("result").innerHTML += `${i} `;
         }
      }
   }
}
