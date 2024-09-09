//immedialtely invoked function expression IIFE


(function chai() {
    console.log(`DB CONNECTED`);//named iife
    
})();

( (name) => {
    console.log(`APPA ${name}`);    // unamed iief
})('aniket');
// FUNCTION KO WRAP KARNA HEY PARENTHESIS() AND THIS FUN IS CALLED IIEF 

