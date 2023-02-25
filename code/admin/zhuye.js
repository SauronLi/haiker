function  main(){

    let path="https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/haiker/main/code/admin/config.json";
    let d = JSON.parse(fetch(path))
    setResult(d);
}