function Reset() {
    document.getElementById("a").value = null;
    document.getElementById("b").value = null;
    document.getElementById("kq").value = null;
    document.getElementById("log").innerText ="";
}
function Cong() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = parseFloat(a) + parseFloat(b);
    console.log(c);
    checkSo(a,b,c);
}
function Tru() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = parseFloat(a) - parseFloat(b);
    checkSo(a,b,c);
}
function Nhan() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = parseFloat(a) * parseFloat(b);
    checkSo(a,b,c);
}
function Chia() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    if(b==0){
        document.getElementById("log").innerText = "Vui long nhap b khac 0";
        document.getElementById("b").value = null;
        document.getElementById("kq").value = null;
    }
    var c = parseFloat(a) / parseFloat(b);
    checkSo(a,b,c);
}
function checkSo(a,b,c){
    if(isNaN(c)== false){
        document.getElementById("kq").value = c;
        document.getElementById("log").innerText ="";
    }
    else{
        if(isNaN(a) == true || isNaN(b) == true){
            document.getElementById("log").innerText = "Vui lòng nhập a và b ở dạng số";
            document.getElementById("a").value = null;
            document.getElementById("b").value = null;
            document.getElementById("kq").value = null;
        }
        else{
            if(isNaN(a) == true){
                document.getElementById("log").innerText = "Vui lòng nhập a ở dạng số";
                document.getElementById("a").value = null;
                document.getElementById("kq").value = null;
            }
            else{
                document.getElementById("log").innerText = "Vui lòng nhập b ở dạng số";
                document.getElementById("b ").value = null;
                document.getElementById("kq").value = null;
            }
        }

    }
}
