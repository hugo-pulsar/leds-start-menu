input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    while (!input.buttonIsPressed(Button.B)) {
        led.unplot(0, item)
        if (input.buttonIsPressed(Button.A)) {
            item = item + 1
            if (item > item_max) {
                item = 0
            }
            
            while (input.buttonIsPressed(Button.A)) {
                basic.pause(1)
            }
        }
        
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Yes)
            basic.showNumber(item)
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                `)
            while (input.buttonIsPressed(Button.B)) {
                basic.pause(1)
            }
        }
        
        counter = counter + 1
        if (counter == 20) {
            counter = 0
        }
        
        if (counter < 10) {
            led.plot(0, item)
        }
        
        basic.pause(10)
    }
})
let item_max = 0
let counter = 0
let item = 0
item = 0
counter = 0
item_max = 4
led.stopAnimation()
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
led.unplot(0, item)
basic.forever(function on_forever() {
    
})
