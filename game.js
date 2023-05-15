let text=document.querySelector('.text');
let turn='x';
let square=[]; 
function end(n1,n2,n3){
    text.innerHTML=`${square[n1]} winner`;
    document.getElementById('item'+n1).style.background='#000';
    document.getElementById('item'+n2).style.background='#000';
    document.getElementById('item'+n3).style.background='#000';
    setInterval(function(){text.innerHTML+='.'},1000)
    setTimeout(() => {
        location.reload()
    }, 4000);


}
function winner(){
  for (let i=1;i<10;i++){
    square[i] =document.getElementById('item'+i).innerHTML;

  }
  if (square[1]==square[2]&&square[2]==square[3]&&square[1]!=''){
      end(1,2,3);
  }
  if (square[4]==square[5]&&square[5]==square[6]&&square[5]!=''){
    end(4,5,6);
  }
  if (square[7]==square[8]&&square[8]==square[9]&&square[8]!=''){
    end(7,8,9);
  }
  if (square[1]==square[4]&&square[4]==square[7]&&square[1]!=''){
    end(1,4,7);
  }
  if (square[2]==square[5]&&square[5]==square[8]&&square[5]!=''){
    end(2,5,8);
  }
  if (square[3]==square[6]&&square[6]==square[9]&&square[6]!=''){
    end(3,6,9);
  }
  if (square[1]==square[5]&&square[5]==square[9]&&square[5]!=''){
    end(1,5,9);
  }
  if (square[3]==square[5]&&square[5]==square[7]&&square[5]!=''){
    end(3,5,7);

}
}
function game(id)
{
 let e=document.getElementById(id);
    if (turn === 'x' && e.innerHTML == '') 
    {
        e.innerHTML='X';
        turn='o';
        text.innerHTML='O';
    }else if (turn === 'o' && e.innerHTML =='') {
        e.innerHTML='O';
        turn='x';
        text.innerHTML='X';

    }
    winner();
}
