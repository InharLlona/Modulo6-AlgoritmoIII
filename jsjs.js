var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];

  var Cantidad = [
    { 
      nombre :"doscientos",
      qtt : 5
    },
    { 
      nombre :"cien",
      qtt : 5
    },
    { 
      nombre :"cincuenta",
      qtt : 5
    },
    { 
      nombre :"veinte",
      qtt : 5
    },
    { 
      nombre :"diez",
      qtt : 5
    },
    { 
      nombre :"cinco",
      qtt : 5
    },
    { 
      nombre :"dos",
      qtt : 5
    },
    { 
      nombre :"uno",
      qtt : 5
    },
    { 
      nombre :"cincuenta cent" ,
      qtt : 5
    },
    { 
      nombre :"veinte cent",
      qtt : 5
    },
    { 
      nombre :"diez cent",
      qtt : 5
    },
    { 
      nombre :"cinco cent",
      qtt : 5
    },
  ];

  // Datos
  var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];
  
  //Relleno automatico generador random tre true false
  for(j=0;j<4;j++){
    console.log(myTeam[j].name);
    for(i=0;i<8;i++){
        num = Math.trunc( Math.random() * 2);
        myTeam[j].availability[i]=num;
        if(num==0){pon="NO";
        }else{pon="SI";}
        console.log(WORK_HOURS[i] + " " + pon);
        }
    }
    console.log(myTeam);
   
    comprobarHorario();

    function comprobarHorario(){
    var hecho = false;
    var hora ;
    var i = 0;
     do{
         if(myTeam[0].availability[i]){
            if(myTeam[1].availability[i]){
                if(myTeam[2].availability[i]){
                    if(myTeam[3].availability[i]){
                        hecho = true;
                        hora = WORK_HOURS[i];
                    }
                }
            }
         }
         i++;
    }while ((i<8) && (hecho!=true))
    if(hecho==true){console.log("Hueco encontrado en el horario " + hora )
    }else{console.log("Lo siento. No hay hueco disponible en el equipo")}
}

///////////CALCULADORA DE CAMBIO
//CREAMOS LOS ELEMENTOS html
function crearelementos (felemento,fclase,fidentificador,fcontenedor,fplace){
  var tArea = document.createElement(felemento);
  tArea.setAttribute("class",fclase);
  tArea.setAttribute("id",fidentificador);
  tArea.setAttribute("placeholder", fplace);
  var elemento = document.getElementById(fcontenedor);
  elemento.appendChild(tArea);
} 
//////Creamos los contenedores
crearelementos ("input","cInput","idInput","idTotal","Cantidad a pagar");
crearelementos ("input","cInput","idInput1","idTotal","Importe");
crearelementos ("button","cCButton","idButton","idTotal");

document.getElementById("idButton").innerText= "Calcular Cambio";

document.getElementById("idButton").addEventListener("click",()=>calcularCambio(document.getElementById("idInput").value,document.getElementById("idInput1").value))

function calcularCambio (precio,pagado){
  console.log("//////////////////SU CAMBIO ES DE////////////////")
  var dif = pagado - precio;
  if (dif>=0) {
  dif = calcular(dif,200,0,"billetes de 200 euros","billete de 200 euros")
  dif = calcular(dif,100,1,"billetes de 100 euros","billete de 100 euros")
  dif = calcular(dif,50,2,"billetes de 50 euros","billete de 50 euros")
  dif = calcular(dif,20,3,"billetes de 20 euros","billete de 20 euros")
  dif = calcular(dif,10,4,"billetes de 10 euros","billete de 10 euros")
  dif = calcular(dif,5,5,"billetes de 5 euros","billete de 5 euros")
  dif = calcular(dif,2,6,"monedas de 2 euros","moneda de 2 euros")
  dif = calcular(dif,1,7,"monedas de 1 euro","monedas de 1 euro")
  dif = calcular(dif,0.5,8,"monedas de 50 centimos","moneda de 50 centimos")
  dif = calcular(dif,0.2,9,"monedas de 20 centimos","moneda de 20 centimos")
  dif = calcular(dif,0.1,10,"monedas de 10 centimos","moneda de 10 centimos")
  dif = calcular(dif,0.05,11,"monedas de 5 centimos","monedas de 5 centimos")

  if (dif!=0){console.log("Lo sentimos, nos hemos quedados sin cambio. Voy a por cambio")
  for(i=0; i<Cantidad.length; i++){
     Cantidad[i].qtt = 10;}
  console.log("Volvemos a tener cambio, pruebe de nuevo")}
  }else {console.log("Lo siento, tiene que pagas mas")}
  console.log("LA RESERVA EN LA CAJA ES DE:");
  for(i=0; i<Cantidad.length; i++){
  console.log(Cantidad[i].nombre + " " + Cantidad[i].qtt);}
}
///DIRECTAMENTE EJECUTO EL ELERCICIO CON CUENTA DE LA CAJA DE RESERVA
function calcular (fdif,num,qt,msg,msg1){
  var tcambio = 0;
  if((fdif/num >= 1) && (Cantidad[qt].qtt >= Math.trunc(fdif/num))){
    tcambio= Math.trunc(fdif/num);
    Cantidad[qt].qtt = Cantidad[qt].qtt - tcambio;
    fdif = fdif - (num*tcambio);
  }
  if(tcambio>1){console.log(tcambio +" " + msg)}
  else if(tcambio==1){console.log(tcambio + " " + msg1)}
  return fdif;
}