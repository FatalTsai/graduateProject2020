var glob=require('glob')
var fs=require('fs')
var path = require('path')
// var getDirectories = function (src, callback) {
//     glob(src + '/**/*', callback);
//   };
//   getDirectories('data/', function (err, res) {
//     if (err) {
//       console.log('Error', err);
//     } else {

//       var fs=require('fs')
//       console.log(res);
//       res.forEach((element,index) => {
//         if(fs.statSync(element).isDirectory()){
//           console.log('delet ',element)
//           delete res[index]
//         }
        
//       });
//       fs.writeFileSync( 'fileList.json', JSON.stringify(res,null,'\t') )

//     }
//   });

function shuffle(arra1) {
  var ctr = arra1.length, temp, index;

  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}




// var fileList = JSON.parse (fs.readFileSync('fileList.json','utf8'))
// var parseFileList = {};
// var frontFileList = new Set();
// fileList.forEach(element => {
//   console.log(element)
//   if(path.extname(element)!= '.txt')
//     parseFileList[element.split('.').slice(0, -1).join('.')] = path.extname(element)

//   frontFileList.add(element.split('.').slice(0, -1).join('.'));
// });

// fs.writeFileSync( 'parseFileList.json', JSON.stringify(parseFileList,null,'\t') )
// fs.writeFileSync( 'frontFileList.json', JSON.stringify(Array.from(frontFileList),null,'\t') )















var frontFileList = JSON.parse (fs.readFileSync('frontFileList.json','utf8'))
frontFileList = shuffle(frontFileList)
fs.writeFileSync( 'ShileList.json', JSON.stringify(frontFileList,null,'\t') )
console.log(frontFileList.length)

var valList = frontFileList.slice(0,frontFileList.length/4);
var trainList = frontFileList.slice(frontFileList.length/4,frontFileList.length)

console.log('valList lenght = ',valList.length)
console.log('trainList lenght = ',trainList.length)

fs.writeFileSync('valList.json',JSON.stringify(valList,null,'\t')) // frontFileList.length/4
fs.writeFileSync('trainList.json',JSON.stringify(trainList,null,'\t'))

var res=''
var parseFileList = JSON.parse(fs.readFileSync('parseFileList.json'))
valList.forEach(element => {
    res=res+'/media/6ef199b6-f7fb-4df2-b134-f47a4bbbd78a/darknet/mask/'+element+parseFileList[element]+'\n'
});
fs.writeFileSync('valList.txt',String(res)) 
res=''
trainList.forEach(element => {
  res=res+'/media/6ef199b6-f7fb-4df2-b134-f47a4bbbd78a/darknet/mask/'+element+parseFileList[element]+'\n'
});

fs.writeFileSync('trainList.txt',String(res)) 




