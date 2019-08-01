
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
var arr_wx = ['MTU0Njc1NDYwMDYwOS3nlJ_lj5E=','MTU0NjU2NTk4ODA2Ni3nlLfnp5E=','MTU0NjU4MTUwMTM4NC3nmb3phZI=','MTU1NTQ2OTk4MzgyMy3lh4_ogqU=','MTU0Njc1NDYwMDYwOS3nlJ_lj5E=','MTU0Njk0NDMyNTI2Mi3pu5Hlj5E=','MTU0NzAwMjExNzg2NC3npZvmlpE=','MTU0NzAxNzc1MzM0OC3kuK3oja8=','MTU0NzAzMDQ1MjMzNS3lh4_ogqU=','MTU0NzExOTQ2NjI3OC3lh4_ogqU=','MTU0NzAxNzc1MzM0OC3kuK3oja8=','MTU0NzE5OTI0MTk5My3lh4_ogqU=','MTU0NzE5OTI0MjA5NS3lh4_ogqU=','MTU0NzE5OTI0MjE5Ni3lh4_ogqU=','MTU0NzE5OTI0MjI5OC3lh4_ogqU=','MTU0NzE5OTI0MjM5OS3lh4_ogqU=','MTU1NTMxMjA2NzAzNi3nlLfnp5E=','MTU1NTMxMjQ4ODYyNC3nlLfnp5E=','MTU1NTMxMjU1MzE2OS3lh4_ogqU=','MTU1NTMxMjY3OTEzMi3nlLfnp5E=','MTU1NTQwNzcxNDY3OS3lh4_ogqU=','MTU1NTU2OTMyMzUzMy3lh4_ogqU=','MTU1NTY0MDE4MzY0Mi3lh4_ogqU=','MTU1NTY0MDE5MjIwOS3lh4_ogqU=','MTU2MTUyOTc3OTcxNS3lh4_ogqU='];

arr_wx.forEach(item => {
  let path=p.join(__dirname,"./" + item);
  deleteFolder(path);
})