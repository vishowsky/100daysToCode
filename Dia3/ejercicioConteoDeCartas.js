let contador = 0;

function cc(carta) {

switch(carta){
  case 1: case 2: case 3: case 4: case 5: case 6:
  contador++;
  break;
  case 7: case 8: case 9:
  contador;
  break
  case 10: case 'J': case 'Q': case 'K': case 'A':
  contador--;
  break;
}
  if(contador > 0){
    return contador + ' Apostar'
  }else{
    return contador + ' Esperar'
  }  
}

cc(2); cc(3); cc(7); cc('K'); cc('A');