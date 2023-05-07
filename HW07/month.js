function translate(english){
    return month[english];
}
var month={
    "January":"一月",
    "February":"二月", 
    "March": "三月",
    "April" :"四月",
    "May" :"五月",
    "June" :"六月",
    "July" :"七月",
    "August":"八月",
    "September":"九月",
    "October":"十月",
    "November":"十一月" ,
    "December":"十二月",
}

console.log("January",translate("January"));
console.log("July",translate("July"));
console.log("October",translate("October"));