function IO(a, b, method) {//a是原地址，b是本地地址,c是选择方法
    switch (method) {
        case  1:
            downloadFile(a, b);//下载文件
        case 2:
            deleteFile(b);//删除文件
        case 3:
            fileExist(b);//判断文件是否存在
        default:
            log("方法错误");
    }
}
//文件操作方法

function Version(){

}

function search(search){
    fetch(url);
}