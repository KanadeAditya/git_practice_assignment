let num= 12325
let palindrome =  num.toString();
let c=0;
for ( i=0 ; i<palindrome.length ; i++){
    if(palindrome[i]==palindrome[palindrome.length-1-i]){
        c++;
    }
}

