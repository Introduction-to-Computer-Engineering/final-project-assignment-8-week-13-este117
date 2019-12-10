basic.forever(function () {
    pins.i2cWriteNumber(0x07, 2055, NumberFormat.Int8LE)
    basic.pause(100) //pause
}) 
