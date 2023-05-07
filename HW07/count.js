function count(list){
    var a={}
    for(var x of list)
    {
        if (x in a)
        {
            a[x]+=1
        }
        else
        {
            a[x]=1
        }
    }
    return a
}

var list = ['we', 'know', 'what', 'we', 'know']
console.log(count(list))