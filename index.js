function showRes() {
	var n = +document.getElementById("n").value
   var soNguyenTo;

	for (var i = 2; i <= n; i++) {
      soNguyenTo = isSoNguyenTo(i)
      if (soNguyenTo) {
         document.getElementById("result").innerHTML += `${i} `;
      }
   }
}

function isSoNguyenTo(number) {
	if (number < 2) {
		return false;
	}

	for (var j = 2; j <= (number -1); j++) {
		if (number % j === 0) {
			return false;
		}
	}

	return true;
}


// function inCacSoNguyenTo() {
//    var n = +document.getElementById("n").value;
//    var soNguyenTo;

//    if (n < 2) {
//       document.getElementById(
//          "result"
//       ).innerHTML = `${n} không là số nguyên tố`;
//       return;
//    }

//    if (n === 2) {
//       document.getElementById("result").innerHTML = `${n} là số nguyên tố`;
//       return;
//    }

//    if (n > 2) {
//       for (var i = 2; i <= n; i++) {
//          soNguyenTo = true;

//          for (var j = 2; j <= i - 1; j++) {
//             if (i % j === 0) {
//                soNguyenTo = false;
//                break;
//             }
//          }

//          if (soNguyenTo) {
//             document.getElementById("result").innerHTML += `${i} `;
//          }
//       }
//    }
// }
