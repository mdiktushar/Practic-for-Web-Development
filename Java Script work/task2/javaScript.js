var Q = prompt("Would you like to start the app? Y/N ");

var arr = new Array;

function add(){
    var s = prompt("Enter the Student name you want to add: ");
    arr.push(s);
}
function remove(){
    var s = prompt("Enter the Student name you want to remove: ");
    for(var i=0; i<arr.length; i++){
        if(arr[i] == s){
            arr.splice(i,1);
            break;
        }
    }
}

if(Q == 'Y'){
    while(true){
        var fun = prompt("What you like to do? add, display, remove or quit? ");
        if(fun == "quit"){
            alert("Thank you for using. Please reload the page to use this application again");
            break;
        }
        if(fun == 'add')
            add();
        else if(fun == 'remove')
            remove();
        else if(fun == 'display')
            console.log(arr);

    }
}