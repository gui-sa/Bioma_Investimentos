List unzip (List li){
  List unzipped = [];
  
  li.forEach((i)=>{
    unzipped.addAll(i)
  });
  unzipped.sort();
  return unzipped;
}

void main() {

  var inputReceived =  [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
  var out = unzip(inputReceived);
  print(out);
}

