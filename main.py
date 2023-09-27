def on_button_pressed_ab():
    global item, counter
    while not (input.button_is_pressed(Button.B)):
        led.unplot(0, item)
        if input.button_is_pressed(Button.A):
            item = item + 1
            if item > item_max:
                item = 0
            while input.button_is_pressed(Button.A):
                basic.pause(1)
        if input.button_is_pressed(Button.B):
            basic.show_icon(IconNames.YES)
            basic.show_number(item)
            basic.show_leds("""
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                """)
            while input.button_is_pressed(Button.B):
                basic.pause(1)
        counter = counter + 1
        if counter == 20:
            counter = 0
        if counter < 10:
            led.plot(0, item)
        basic.pause(10)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

item_max = 0
counter = 0
item = 0
item = 0
counter = 0
item_max = 4
led.stop_animation()
basic.show_leds("""
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    """)
led.unplot(0, item)

def on_forever():
    pass
basic.forever(on_forever)
