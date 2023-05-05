
function save(){
    const texto = document.getElementById("mensaje").value;
    document.getElementById("mensaje").value="";
    const modtexto= texto.replaceAll("a","ai").replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("u","ufat");
    document.getElementById("mensajefin").value=modtexto;
    console.log(texto)

}
function unsave(){
    const texto = document.getElementById("mensaje").value;
    document.getElementById("mensaje").value="";
    const modtexto= texto.replaceAll(/(imes)/g,"i").replaceAll(/(ai)/g,"a").replaceAll(/(enter)/g,"e").replaceAll(/(ober)/g,"o").replaceAll(/(ufat)/g,"u");
    document.getElementById("mensajefin").value=modtexto;
    console.log(texto)
}

function shown(){
    var x = document.getElementById('copymsj');
    x.style.display = 'block';
}
function hidde(){
    var x = document.getElementById('copymsj');
    x.style.display = 'none';
}
function copy(){
    var copyText = document.getElementById("mensajefin");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    shown()
    setTimeout(hidde,1000)
}
