# Oscilloscopes and serial protocols

## Assignment 8, Part 2: Final Project

## Part II (Week 13, Assignment #8)

Submission

1. Summary

Oscilloscope warmup:

1) Visualize simple continuous signals:
Visualize the following signals, using the Auto regime and default settings (trigger on a rising edge on CH1). For each signal, take a video of the setup (the source wire and connection of the oscilloscope probe) and the display of the oscilloscope, while varying one of the signal properties (wave shape, frequency, amplitude) using the controls of the source. Signals:
  
  
    i) Configure the OUT of the built-in function generator on the workstation:
        
   [out.js](out.js)
    
    ii) Write a one-line micro:bit program to set an analog pin to emit PWM pulses:
    
   [PWM_pulse](PWM_pulse)
    
    iii) Write a loop that varies the duty cycle, up and down, between 5% and 95%, in steps of 5%:
    
   [PMW_5percent](PMW_5percent)
   
   iv) 
   
   [servo.js](servo.js)
        
    
## I2C Warm Up

  1. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on         them?
    
The disadvantages of UART is that it requires two devices that have the same clock rate.  It is also difficult to     implement in terms of software due to the time complexity. The disadvantages of UART are the number of pins requiered due to  the amount of devices needed. I2C improves them by allowing more than one master and being able to connect to 1008 slave devices. Software is also easier to implement.

2. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?

SDA is the data signal from the slave device and SCL is the clock signal from the master device.

3. What distinguishes the master and the slaves?

The slave can write and read data to the slave, however, the slaves cannot do the same to the master.  Slaves cannot initiate transfer and they have to obey when called opon by the master.

4. How are the two types of protocol frames different?

The address frame first must be generated and lets the slave know where the information needs to be sent by the master.  The data frame first is sent to the SDA which is chosen by the master or slave depending on either a read or write calling.

5. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?

The most appropriate trigger for capturing an I2C frame on the oscilloscope is SDA becasue of the SDA's falling edge.

## First steps with I2C

1. IC2 file : 








