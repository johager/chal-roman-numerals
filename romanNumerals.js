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
    // convert to old-school Roman numerals (9 -> VIIII)
    // this function will work for num < 10,000
    // it cycles through the 1s, 10s, 100s, then 1000s

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
        if (localNum > 0) {
            let localRoman = ''
            if (localNum > 4 && chars[i].length > 1) {
                localRoman = chars[i][1]
                localNum -= 5
            }
            if (localNum > 0) {
                localRoman += chars[i][0].repeat(localNum)
            }
            roman = localRoman + roman
        }
        num = Math.floor(num / 10)
        i++
    }

    return roman
}

function toRoman2(num) {
    // convert to new-school Roman numerals (9 -> IX and 4 -> IV)
    // this function will work for num < 10,000
    // it cycles through the 1s, 10s, 100s, then 1000s

    let roman = ''
    const chars = [
        ['I','V'],  // 1, 5
        ['X','L'],  // 10, 50
        ['C','D'],  // 100, 500
        ['M'],  // 1000
        []  // 10000
    ]
    
    let i = 0  // index of the chars array
    while (num > 0) {
        let localNum = num % 10
        if (localNum > 0) {
            let localRoman = ''
            if (localNum === 9 && chars[i+1].length > 0) {
                localRoman = chars[i][0] + chars[i+1][0]
            } else {
                if (localNum > 3 && chars[i].length > 1) {
                    if (localNum  == 4) {
                        localNum -= 4
                        localRoman = chars[i][0] + chars[i][1]
                    } else {
                        localRoman = chars[i][1]
                        localNum -= 5    
                    }
                }
                if (localNum > 0) {
                    localRoman += chars[i][0].repeat(localNum)
                }
            }
            roman = localRoman + roman
        }
        num = Math.floor(num / 10)
        i++
    }

    return roman
}

function test(func, inp, exp) {
    const res = func(inp)
    let passed = false
    if (res === exp) {
        passed = 'true '
    }
    console.log("passed:", passed, ` func: ${func.name}  inp: ${inp}  res: '${res}'  exp: '${exp}'`)
}

// test(toRoman,1,'I')
// test(toRoman,5,'V')
// test(toRoman,10,'X')
// test(toRoman,20,'XX')
// test(toRoman,50,'L')
// test(toRoman,100,'C')
// test(toRoman,200,'CC')
// test(toRoman,500,'D')
// test(toRoman,1000,'M')

// test(toRoman,4,'IIII')
test(toRoman,267,'CCLXVII')
test(toRoman,99,'LXXXXVIIII')
// test(toRoman,1000,'M')
// test(toRoman,9000,'MMMMMMMMM')
// test(toRoman,9999,'MMMMMMMMMDCCCCLXXXXVIIII')

test(toRoman2,4,'IV')
test(toRoman2,9,'IX')
test(toRoman2,267,'CCLXVII')
test(toRoman2,99,'XCIX')
test(toRoman2,494,'CDXCIV')
test(toRoman2,900,'CM')
test(toRoman2,1000,'M')
// test(toRoman2,9000,'MMMMMMMMM')
// test(toRoman2,9999,'MMMMMMMMMCMXCIX')

// console.log(`repeat(3): '${'#'.repeat(3)}'`)