var arr = [];
var arrN = [];

document.getElementById('btnAddN').onclick = function() {

    N = Number(document.getElementById('nhapN').value);
    arr.push(N);
    document.getElementById('txtAddN').innerHTML = arr;
}

// Tính tổng số dương

function SumDuong(arr) {
    var n = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            n += arr[i];
        }
    }
    return n;
}
document.getElementById('btnSumDuong').onclick = function() {
    var kQ1 = 0;
    kQ1 = SumDuong(arr);
    document.getElementById('txtSumDuong').innerHTML = 'Tổng số dương =' + kQ1;
}

// Đếm số dương

function DemSD(arr) {
    var n = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            n++;
        }
    }
    return n;
}

document.getElementById('btnSoDuong').onclick = function() {
    var kQ2 = 0;
    kQ2 = DemSD(arr);
    document.getElementById('txtSoDuong').innerHTML = 'Số dương ' + kQ2;
}

// Tìm số nhỏ nhất

function NumMin() {
    var n = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            n = arr[i]
        }
    }
    return n;
}

document.getElementById('btnMinNum').onclick = function() {
    var kQ3 = 0;
    kQ3 = NumMin(arr);
    document.getElementById('txtMinNum').innerHTML = 'Số nhỏ nhất ' + kQ3;
}


// Tìm số dương nhỏ nhất

document.getElementById('btnDuongMin').onclick = function() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrN.push(arr[i]);
        } else {
            document.getElementById('txtDuongMin').innerHTML = 'Không có số dương trong mảng!';
        }
        var min = arrN[0];
        for (j = 0; j < arrN.length; j++) {
            if (arrN[j] <= min) {
                min = arrN[j];
                document.getElementById('txtDuongMin').innerHTML = min;
            }
        }
    }
}

// Tìm số chẵn cuối cùng

function NumEven() {
    var n = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            n = arr[i]
        }
    }
    return n;
}

document.getElementById('btnNumEvenEnd').onclick = function() {
    var kQ5 = 0;
    kQ5 = NumEven(arr);
    document.getElementById('txtNumEvenEnd').innerHTML = 'Số chẵn ' + kQ5;
}

// Đổi chỗ

// function doiCho() {
//     var n = Number(document.getElementById('nhap1').value),
//         r = Number(document.getElementById('nhap2').value);
//     var e = arr[n];
//     arr[n] = arr[r];
//     arr[r] = e;
// }

document.getElementById('btnViTri').onclick = function() {
    var n = Number(document.getElementById('nhap1').value),
        r = Number(document.getElementById('nhap2').value),
        kQ6 = arr[n];
    arr[n] = arr[r];
    arr[r] = kQ6;
    document.getElementById('txtViTri').innerHTML = arr;
}

// Sắp xếp

function SapXep(index1, index2) {
    var doiCho = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = doiCho;
}

document.getElementById('btnSort').onclick = function() {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                SapXep(j, j + 1);
            }
        }
    }
    document.getElementById('txtSort').innerHTML = arr;
}

// Tìm số nguyên tố đầu tiên

function soNguyenTo(iSo) {
    var kiemTra = true;
    if (iSo < 2) {
        kiemTra = false;
    }
    for (uoc = 2; uoc <= Math.sqrt(iSo); uoc++) {
        if (iSo % uoc == 0) {
            kiemTra = false;
            break;
        }
    }
    return kiemTra;
}
document.getElementById('btnPrime').onclick = function() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrN.push(arr[i]);
        } else {
            document.getElementById('txtPrime').innerHTML = ' -1';
        }
        for (j = 0; j < arrN.length; j++) {
            if (soNguyenTo(arrN[j])) {
                arrN = arrN[j];
                document.getElementById('txtPrime').innerHTML = arrN;
                break;
            } else {
                document.getElementById('txtPrime').innerHTML = ' -1';
            }
        }
    }
}

// Đếm só nguyên

document.getElementById('btnAddN1').onclick = function() {
    var nhapN1 = Number(document.getElementById('nhapN1').value);
    arrN.push(nhapN1);
    document.getElementById('txtAddN1').innerHTML = arrN;
}

document.getElementById('btnInteger').onclick = function() {
    var dem = 0;
    for (i = 0; i < arrN.length; i++) {
        if (Number.isInteger(arrN[i])) {
            dem++;
        }
    }
    document.getElementById('txtInteger').innerHTML = dem;
}


// So sánh số lượng số dương và số âm

document.getElementById('btnSS').onclick = function() {
    var soDuong = 0;
    var soAm = 0;
    var sS = '';
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            soDuong++;
        } else if (arr[i] < 0) {
            soAm++;
        } else {
            soAm++;
            soDuong++;
        }
    }
    if (soDuong > soAm) {
        sS = 'Số Dương > Số Âm';
    } else if (soDuong < soAm) {
        sS = 'Số Âm > Số Dương';
    } else {
        sS = 'Số Dương = Số Âm';
    }
    document.getElementById('txtSS').innerHTML = sS;
}