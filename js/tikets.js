let calculoT=document.getElementById('totalPago');
var categoria= document.getElementById('categorias');
var opciones= document.querySelectorAll('option');
var btn_resumen= document.getElementById('btn_resumen');
var btn_borrar= document.getElementById('btn_reset');
var cantidad= document.getElementById('cantidad');
   
console.log(categoria.selectedIndex);
    
    console.log(opciones);   

function validar_email(e){
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(e)){
        return true
    } else {
        return false
    }
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(e))? true:false;
}

function validar_datos(){
    let name= document.getElementById('name').value;
    let lastName= document.getElementById('lastname').value;
    let email= document.getElementById('email').value;
    //console.log( cantidad.value);
    if (name ===""){
        alert('Debe ingresar un Nombre');
        name.focus();        
    } else if ( lastName==="") {
        alert('Debe ingresar Apellido');
        lastName.focus();        
    } else if (email===""){ //(!validar_email(email)
        alert('El email ingresado es incorrecto');
        email.focus();        
    } else if (cantidad.value==='' || cantidad.value<=0){
        alert('Debe ingresar la candidad de tikcets que desee adquirir');
        cantidad.focus();
    } else if (categoria.value===''){
        alert('Debe ingresar la categoria a la que pertenece');
        categoria.focus();
    } else {
        return true
    }

}   
var precio=200, descuento, totalAPagar;
    
    function calcularTotal(){
        if (validar_datos()){
            
            for (const key in opciones) {
                if (Object.hasOwnProperty.call(opciones, key)) {
                    const element = opciones[key];
                    
                    if (element.value==='Estudiante' && element.selected){
                        descuento=precio*0.80;                       
                        totalAPagar= (precio-descuento)* cantidad.value;                       
                        document.getElementById('montoTotal').innerText=totalAPagar;                        
                        break
                    } else if (element.value==='Trainee' && element.selected) {
                        descuento=precio*0.50;                         
                        totalAPagar= (precio-descuento)* cantidad.value;                       
                        document.getElementById('montoTotal').innerText=totalAPagar;                        
                        break
                    }  else if (element.value==='Junior' && element.selected) {
                        descuento=precio*0.15;                        
                        totalAPagar= (precio-descuento)* cantidad.value;                       
                        document.getElementById('montoTotal').innerText=totalAPagar;                        
                        break
                    }  else if (element.value==='publico' && element.selected) {                        
                        totalAPagar= precio* cantidad.value;                        
                        document.getElementById('montoTotal').innerText=totalAPagar;                        
                        break
                     } 
                }
            }
        } else {
            alert('Hubo un error al validar los datos')
        }
    }

 
btn_resumen.addEventListener('click', calcularTotal);
btn_borrar.addEventListener('click', ()=>{
    document.getElementById('montoTotal').innerText="";
  
})






