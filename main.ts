input.onButtonPressed(Button.A, function () {
    guess += -1
    basic.showNumber(guess)
})
input.onButtonPressed(Button.AB, function () {
    counter += 1
    if (guess == answer) {
        basic.showString("Y")
        basic.showNumber(counter)
        answer = randint(0, 9)
        guess = 0
        counter = 0
    } else {
        basic.showString("N")
    }
})
input.onButtonPressed(Button.B, function () {
    guess += 1
    basic.showNumber(guess)
})
let answer = 0
let guess = 0
let counter = 0
counter = 0
guess = 5
answer = randint(0, 9)
basic.showNumber(guess)
