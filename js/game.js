 var canvas = document.getElementById("miCanvas"), contexto = canvas.getContext("2d");
        
        var spriteSheep = new Image(), x=10,y=10;
        
        spriteSheep.onload=function(){
            setInterval(actualizarJuego,1000/33); //bucle principal
        };
        
        function actualizarJuego(){
            contexto.fillStyle = "white"; //limpio el canvas
            contexto.fillRect(0,0,640,480);
            //--------------------------------------------            
            contexto.drawImage(spriteSheep,5,6,25,16,x,y,25,16);
            //drawImage(archivo de imagen, origen x, origen y, origen ancho, origen alto,destino x, destino y, destino ancho, destino alto)
            x++; //aumento en uno la posición x de la imagen
        };
        
        spriteSheep.src="img/1942.png";
        