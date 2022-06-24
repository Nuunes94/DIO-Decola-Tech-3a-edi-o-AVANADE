//solucação 1
function verificaPalindramo (string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

//solução 2
function verificaPalindramo (string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log (verificaPalindramo("bafo"));