function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  var flag = false;
  if (document.getElementById("check").checked) {
    flag = true;
    document.getElementById("text").style.backgroundColor = 'red';
  }
  else{
    flag = false;
    document.getElementById("text").style.backgroundColor = '#ffffff';
  }
}
