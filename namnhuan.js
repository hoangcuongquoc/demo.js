function namNhuan (nam){
    if (nam%4==0 && nam%100!=0)
        return 'năm nhuận '
    else return 'năm không nhuận ' 
}
console.log(namnhuan(2000))