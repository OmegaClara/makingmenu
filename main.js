var itens = [];
function submit() {
    var item1 = document.getElementById("itm1").value;
    var item2 = document.getElementById("itm2").value;
    var item3 = document.getElementById("itm3").value;
    var item4 = document.getElementById("itm4").value;
    var item5 = document.getElementById("itm5").value;
    var item6 = document.getElementById("itm6").value;

    itens.push(item1);
    itens.push(item2);
    itens.push(item3);
    itens.push(item4);
    itens.push(item5);
    itens.push(item6);

    console.log(itens);
    document.getElementById("Order").innerHTML= itens;
}
