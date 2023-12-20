document.write("How many numbers of vowels of in their string"+"<br>");
document.write("---------------------------------------------"+"<br>");
let s="sanjeev";
document.write("The given string is : "+s+"<br>");
let c=0;
for(let i=0;i<s.length;i++){
    if(s[i]=="a" || s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u" )
    {
        c++;
    }
}
document.write("Number of Vowels in the String : "+c);