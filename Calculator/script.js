function calculate_display(){
    try{
        document.getElementById("display").value=eval(document.getElementById("display").value);
    }
    catch(error){
        document.getElementById("display").value="ERROR💀";
    }
}