# ASSIGNMENT-FROM-JALAN-TECHNOLOGIES

### program is written using node js is the runtime of javascript built with chrome v8 engine require modules for completing the task and you must have node js installed in your operating system if not then, go to this link and download and install it in your system :

> https://nodejs.org/en/download/

according to your operating system.


### Answer about time and space complexity
> let's sum it out the two loops take T(N) + T(N) + T(1) + T(1) + T(1)
> the complexity of whole program is T(N) or T(n) and constant were ignored as for they take constant time
> Time-Complexity of Program is : T(N).
> 
> Space-complexity of program is heavily depended on the array as for this program if we consider a number variable in 
> javascript take 8 bytes per number to store it 
> The time complexity of the program is 8 * 6 for one array and another also take 8 * 6;
> so total space-complexity is : 48 + 48 = 96 bytes
> 
> hence, question is solved.

## Answer 1 : 
In your terminal locate to this assignment folder and start running the programs : 

    PS C:\Users\Gupta\Desktop\assignment> node question_1.js

output is : 

    PS C:\Users\Gupta\Desktop\assignment> node question_1.js
    
    The given array is :
    [ 1, 3, 2, 7, 4, 6 ]
    Enter the value of d, d = 0 turn left to right and d = 1 is vice-versa : 0
    Enter the value of p i.e., where 0<p<N, p is breaking point of array : 2
    PS C:\Users\Gupta\Desktop\assignment> node question_1.js
    
    The given array is :
    [ 1, 3, 2, 7, 4, 6 ]
    Enter the value of d, d = 0 turn left to right and d = 1 is vice-versa : 0
    Enter the value of p i.e., where 0<p<N, p is breaking point of array : 2
    [ 2, 7, 4, 6, 1, 3 ]
    
    PS C:\Users\Gupta\Desktop\assignment> node question_1.js
    
    The given array is :
    [ 1, 3, 2, 7, 4, 6 ]
    Enter the value of d, d = 0 turn left to right and d = 1 is vice-versa : 1
    Enter the value of p i.e., where 0<p<N, p is breaking point of array : 2
    [ 6, 4, 1, 3, 2, 7 ]
    
    PS C:\Users\Gupta\Desktop\assignment> node question_1.js
    
    The given array is :
    [ 1, 3, 2, 7, 4, 6 ]
    Enter the value of d, d = 0 turn left to right and d = 1 is vice-versa : 0
    Enter the value of p i.e., where 0<p<N, p is breaking point of array : 0
    please check the value of p because it is out of constraints


Answer 2 :

    PS C:\Users\Gupta\Desktop\assignment> node question_2.js
    Enter the Number of alarms you want : 1
    1
> this show number of alarm i as a user want is 1
    Alarm is ready! to tick

    17:14:42
> show the current time according to question

    17:14:42
    [
      'Sunday = 1',
      'Monday = 2',
      'Tuesday = 3',
      'Wednesday = 4',
      'Thursday = 5',
      'Friday = 6',
      'Saturday = 7'
    ]
    Enter the day(1-7), hours(24 hrs format), minutes(0-60) of alarm 1 :
    17:14:42
> This shows current time again to enter 

    Enter the day you want to set the Alarm : 4
> here I enter 4 and it as a day says wednesday, but if you enter another it will rang at that time enter the correctly as shown in array of days see up

    Enter hrs : 17
> enter hours in 24 hrs format

    Enter Min : 15
> enter min from 0 to 59

    Alarm No : 1 | 4 17 15

    Alarm No : 1 | 4 17 15

> before the run this comes automatically for deleting an alarm, if you press 0 or greater than N or any other character it will not be deleted and goes forward to automatically run the alarm
    Enter the Alarm You want to delete by number 1 to N as your given alarms to as your number of alarms : l
    cannot perform operation because no such alarm exist!
    Alarm No : 1 | 4 17 15

    Lets run the alarm
    17:14:55
    17:14:55
    Time is up - Ring! Ring! Ring! Ring!
> if alarm is on time it will rang automatically

    17:15:6
    Do you want to snooze the time for 5 minutes : y & n ?y

> if y it will snoozes and if other number of character it will stop and only snoozes 3 times only

    17:15:6
    Time is up - Ring! Ring! Ring! Ring!
    Do you want to snooze the time for 5 minutes : y & n ?n
    Your time is up tick-tick, 3 times snoozes by you or you stop the alarm

> Now question is complete, thank you.
    
