function calc()
{
    var n1 = Number(document.getElementById("num1").value); /*This dictates the first value*/

    var n2 = Number(document.getElementById("num2").value); /*This dictates the second value*/
 
    var result = n1 * n2; /*This dictates the operation*/

    document.getElementById("totalcost").value = String(result); /*This collects the data of the operation*/

    document.getElementById("totalcost").innerHTML = String(result); 

}
