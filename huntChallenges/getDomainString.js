/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet

: Use replace on the parts of the url you want gone. You can replace with an empty string ''. Then split the string using . as the seperator and take the first part [0]


*/

function domainName(str){
    //console.log(str)
   let splitDomain= str.replace('https://www.', '').replace('http://', '').replace('www.', '').split('.')
   console.log(splitDomain[0])
  
  }
  
  domainName("https://www.cnet.com") == "cnet"
  domainName("http://github.com/carbonfive/raygun") == "github" 
  domainName("http://www.zombie-bites.com") == "zombie-bites"