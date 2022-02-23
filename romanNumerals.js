/*
Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

For reference, these are the building blocks for how we encode numbers with Roman numerals:

    Decimal : Roman
    1 : I
    5 : V
    10 : X
    50 : L
    100 : C
    500 : D
    1,000 : M

For example:

toRoman(5)  // 'V'

toRoman(267)  // 'CCLXVII'

Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for example, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

For example:

toRoman(99)  // 'LXXXXVIIII'
*/

function toRoman(num) {
    // this function will work up to num < 10,000
    let roman = ''
    const chars = [
        ['I','V'],  // 1, 5
        ['X','L'],  // 10, 50
        ['C','D'],  // 100, 500
        ['M']  // 1000
    ]
    
    let i = 0  // index of the chars array
    while (num > 0) {
        let localNum = num % 10
        let localRoman = ''
        if(localNum > 4 && chars[i].length > 1) {
            localRoman = chars[i][1]
            localNum -= 5
        }
        localRoman += chars[i][0].repeat(localNum)
        num /= 10
        num = Math.floor(num)
        roman = localRoman + roman
        i++
    }

    return roman
}

function testToRoman(inp, exp) {
    const res = toRoman(inp)
    let passed = false
    if (res === exp) {
        passed = 'true '
    }
    console.log("passed:", passed, ` inp: ${inp}  res: '${res}'  exp: '${exp}'`)
}

// testToRoman(1,'I')
// testToRoman(5,'V')
// testToRoman(10,'X')
// testToRoman(20,'XX')
// testToRoman(50,'L')
// testToRoman(100,'C')
// testToRoman(200,'CC')
// testToRoman(500,'D')
// testToRoman(1000,'M')

testToRoman(267,'CCLXVII')
testToRoman(99,'LXXXXVIIII')
testToRoman(1000,'M')
testToRoman(9000,'MMMMMMMMM')

// console.log(`repeat(3): '${'#'.repeat(3)}'`)