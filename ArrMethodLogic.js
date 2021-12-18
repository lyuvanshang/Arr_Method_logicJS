//Thực gọi từng phần tử trong mảng và thực hiện chức năng lên từng phần tử đó và in ra mảng 
// forEach logic
Array.prototype.forEach2 = function (callback)
{
    for(let index in this)
    {   
        if(this.hasOwnPropety(index)){
        callback(this[index],index)
        }
    }
}
var arrS = [1,2,3,4,5,6,6]
arrS.forEach2(function (value,index)
{
    console.log(value,index)
})

//Kiểm tra tất cả các phần tử trong mảng có thỏa mãn một điều kiện nào đó hay không \?
// every logic
Array.prototype.every2 = function (callback)
{
    for(let index in this)
    {   
        if(this.hasOwnPropety(index)){
            if(!callback(this[index]))
            {
                return false
            }
        }  
    }
    return true
}

var ars = [1,3,4,5,6,8,66,777,4442,2343]
var even = ars.every2(function (value)
{
    return value%2 == 0
})
// Kiem tra tung phan tu thoa man dieu kien neu co phan ru thoa man dieu 

//some logic 
Array.prototype.some2 = function (callback)
{
    
    for(let index in this)
    {   if(this.hasOwnPropety(index)){
             if(callback(this[index]))
            {
                 return true
                 break
            }
        }  
    }
    return true
}
var ars = [1,3,4,5,6,8,66,777,4442,2343]
var even = ars.some2(function (value)
{
     return value%2 == 0
})
console.log(even)



//Tra ve gia tri dau tien thoa man dieu kien kiem tra
//find logic 
Array.prototype.find2 = function (callback)
{
    for(let index in this)
    {   
        if(this.hasOwnProperty(index)){
            if(callback(this[index]))
            {
                return this[index]
            }
        }
    }
    return undefined
}
var ars = [1,3,4,5,6,8,66,777,4442,2343]
var even = ars.find2(function (value)
{
    return value%2 == 0
})
console.log(even)


//  tức là sẽ lặp qua qua các phần tử, sau đó tùy vào từng bài toán mà sẽ quyết định chọn phần tử đó hay không. 
//Cuối cùng hàm này sẽ trả về một mảng các phần tử đã chọn.
//filter logic

Array.prototype.filter2 = function (callback)
{   
    let newArr = []
    for(let index in this)
    {   if(this.hasOwnProperty(index)){
        let result = callback(this[index],index)
            if(result)
            {
                newArr.push(this[index])
            }
        }   
    }
    return newArr
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var even = words.filter(function (value)
{
    return value.length > 6
})
console.log(even)

//Нàm dùng để lặp qua các phần tử của mảng và cho phép xử lý giá trị của phần tử đó and push in newArr
//map logic

Array.prototype.map2 = function (callback)
{   
    let newArr = []
    for(let index in this)
    {   
        if( this.hasOwnProperty(index){
            let result =  callback(this[index],index)
            newArr.push(result)
        }
    }
    return newArr
}
var ars = [1,3,4,5,6,8,66,777,4442,2343]
var even = ars.map2(function (value,index)
{
    return value* 10
})
console.log(even)

//một phương thức sẵn có được sử dụng để thực thi một hàm lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất. 
//Là một phương thức quan trọng hay sử dụng trong lập trình hàm.
// reduce logic 
//reduce se co gia tri khoi tao initialValue


Array.prototype.reduce2 = function (callback,result)
{
    let i = 0
    let arrLength = this.length
    //neu khong khai bao gia tri initial thi no se gan cho phan tu dau tien cua mang 
    if (result === null)
    {   
        result = this[0]
        i = 1
    }
    for(;i<arrLength; i++)
    {   //gan bien result cho ham callback
        result = callback(result,this[i],i,this)
    }
    return result
}

var ars = [1,3,4,5,6,8,66,777,4442,2343]
var even = ars.reduce2(function (result,value)
{
    return result + value
    // khai bao initialValue(result) = 0
},0)
console.log(even)
