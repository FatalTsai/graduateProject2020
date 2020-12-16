var glob=require('glob')
var fs=require('fs')
var path = require('path')


console.log(fs.statSync('data/yolo_train2/mask_993.txt').isDirectory())