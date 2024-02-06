const isPalindromePermutation = (str) => {
    let start = 0

    let end = str.length - 1

    while (start < end) {

        while (str[start] === ' ') {
            start++
        }
        while (str[end] === ' ') {
            end--
        }

        if (str[start].toLowerCase() !== str[end].toLowerCase()) {
            return false
        }
        start++
        end--
    }

    return true
}

console.log(isPalindromePermutation("taco cat"))  // true (перестановка "tacocat" - палиндром)
console.log(isPalindromePermutation("abcde")); // false (нет перестановок, чтобы получился палиндром)

