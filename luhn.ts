const program =require('commander');
const { spawnSync } = require('child_process')
console.log("Enter Number: ")
var stdin = process.openStdin();


stdin.addListener("data", function(d) {
    console.log("Enter Number: ")
    var trimmedString:string=d.toString().replace(/\s/g, "");
    if(trimmedString.match(/[^$,.\d]/)||trimmedString.length<2){
        process.on('exit', function(code) { // retrive status code
            return console.log(`${code}`);
        });
         process.exit(42) //set exist status through global process code
    }
    Luhns(trimmedString);
});
 function Luhns(digits:string){
     var digitLength:number = digits.length;
     var sum:number=0;
     var parity:number = digitLength%2;
     for (let i = 0;i<digitLength;i++){
        var singleDigit:number = parseInt(digits[i])
        sum+=((i%2!=parity)?singleDigit:((singleDigit*2>9)?(singleDigit*2)-9:singleDigit*2));
         }
         if (!(sum % 10)) {
         process.on('exit', function(code) { // retrive status code
            return console.log(`${code}`);
        });
            process.exit(0) //set exist status through global process code
         }

         process.on('exit', function(code) { // retrive status code
            return console.log(`${code}`);
        });
         process.exit(42) //set exist status through global process code
 }
 program.parse(process.argv)