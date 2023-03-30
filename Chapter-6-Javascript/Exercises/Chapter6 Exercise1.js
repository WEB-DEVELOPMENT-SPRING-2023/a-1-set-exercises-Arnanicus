function calc()
{
    var n1 = Number(document.getElementById("num1").value);

    var n2 = Number(document.getElementById("num2").value);

    var result = n1 * n2;

    document.getElementById("totalcost").value = String(result);

    document.getElementById("totalcost").innerHTML = String(result);

}
