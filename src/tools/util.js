export function filterPath(path, filterObj){

    let newPath = '';
    let realpath = ''
    //没有传path
    if(!path){
        return;
    }

    //不是对象
    if(typeof filterObj !== 'object' && !filterObj){
        return;
    }

    //不是数组
    if(!(filterObj instanceof Array)){
        return 
    }

    //获取数组
    let pathArr = path.split('/').filter( i => i);
    
    //循环数组,去掉数组中涉及的参数
    filterObj.forEach(ele => {
        if(ele === 'pid'){
            let itemIndex = pathArr.every( (item, index) => item.length < 15)
            if(!itemIndex){
                pathArr = delEleFromArray(pathArr,function(param){ return param.length > 15})
            }
        }
    })
    pathArr.forEach(ele => {
        newPath += `/${ele}`
    });

    return {
        filterpath:newPath,
        realpath:path
    }
}

function delEleFromArray(array, checkpm){
    let indexTarget;
    array.forEach((ele,index) => {
        if(checkpm(ele)){
            indexTarget = index
            return;
        }
    })
    array.splice(indexTarget,1)
    return array
}