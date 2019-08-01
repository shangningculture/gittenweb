
const fs=require("fs");
const p=require("path");
function deleteFolder(path) {
    let files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            let curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}
var arr_wx = ['GetgXzMV', 'yhj45sd1gth'];

arr_wx.forEach(item => {
  let path=p.join(__dirname,"./" + item);
  deleteFolder(path);
})