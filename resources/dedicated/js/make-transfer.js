document.addEventListener('DOMContentLoaded', function() {
    //variables
    var search1 = false;
    
    //evento busqueda

    var searchButton = document.getElementById("inpt_cbu_search_button");

    searchButton.addEventListener("click",function(){
        let input_cbu_search = document.getElementById("inpt_cbu_search");
        /*aca se verifica si existe algun cbu o alias habilitado (en el futuro
        se verificara en la base de datos)
        CBU de ejemplo: 0123456789012345678901
        Alias de ejemplo: bee.bank.bank
        */
        if(input_cbu_search.value=="0123456789012345678901" || input_cbu_search.value=="bee.bank.bank"){
            let input_destinatario = document.getElementById("inpt_destinatario");
            let input_origen = document.getElementById("inpt_origen");
            let input_banco = document.getElementById("inpt_banco");
            let input_alias = document.getElementById("inpt_alias");
            let input_cbu = document.getElementById("inpt_cbu");
            let input_cuil = document.getElementById("inpt_cuil");

            input_destinatario.value="Nombre SegundoNombre Apellido";
            input_banco.value="Otro banco";
            input_origen.value="BeeBank";
            input_alias.value="bee.bank.bank";
            input_cbu.value="0123456789012345678901";
            input_cuil.value="11-11111111-1";

            search1 = true;
        }
        else{
            alert("Usuario/Cuenta inexistente");
            search1 = false;
        }
    });
    
    //evento transferencia
    
    var transferButton = document.getElementById("inpt_transferir");

    transferButton.addEventListener("click",function(){
        let input_monto = document.getElementById("inpt_monto");
        let input_checkbox1 = document.getElementById("inpt_check");

        if(search1==false){
            alert("Asegurese de que haya un CBU/Alias valido");
        }
        else if(input_monto.value==""||input_monto.value==" "){
            alert("Ingrese un monto valido");
        }
        else if(input_checkbox1.checked==false){
            alert("Por favor confirme la transferencia antes de proseguir")
        }
        else{
            alert("Transferencia exitosa!!");
        }
    });
});