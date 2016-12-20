enum DisplayPattern {
    horizontal,
    vertical
}

// console.log(DisplayPattern)
// console.log(typeof DisplayPattern[DisplayPattern.horizontal])

enum A {
    horizontal=<any> 'horizontal',
    vertical=<any> 'vertical'
}

console.log(DisplayPattern)
console.log(DisplayPattern[DisplayPattern.horizontal])
console.log(A)
