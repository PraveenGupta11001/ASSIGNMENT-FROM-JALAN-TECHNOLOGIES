const ps = require('prompt-sync');
const prompt = ps();

// globally declaring the the array of weeks to clarify the input that you needed
var days = ['Sunday = 1','Monday = 2','Tuesday = 3', 'Wednesday = 4', 'Thursday = 5', 'Friday = 6', 'Saturday = 7'];
var min;
let snoozeTime = 0;
let check ;
let N = prompt('Enter the Number of alarms you want : ');

// creating array 2d to store user's alarm data with day,hours and minutes
var AlarmNumber = Array.from(Array(Number(N)), () => new Array(3));
console.log(AlarmNumber.length);

// created class in javascript using the keyword class
class Alarm{

    // when object is created newAlarm constructor will call back itself without calling it.
    constructor (){
        console.log('Alarm is ready! to tick');
        console.log();
    }

    // show current time to user by using javascript time and date 
    showCurrentTime(){
        // console.log();
        var data = new Date();
        let currentTime = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
        console.log(currentTime);
    }
    
    // create the number of alarms user want and run it automatically
    createUserAlarm(){
                this.showCurrentTime();

                for(var i = 0; i<AlarmNumber.length; i++){
                    console.log(days);
                    console.log('Enter the day(1-7), hours(24 hrs format), minutes(0-60) of alarm ' + (i+1) + ' : ');
                    newAlarm.showCurrentTime();
                    // console.log();
                    // using 2d array to store the data of user's alarms
                    AlarmNumber[i][0] = prompt('Enter the day you want to set the Alarm : ');
                    AlarmNumber[i][1] = prompt('Enter hrs : ');
                    AlarmNumber[i][2] = prompt('Enter Min : ');
                    this.showUserAlarms();
                }

                var status = 0;
                for(var i = 0; i<Number(AlarmNumber.length); i++){
                    var userDay = AlarmNumber[i][0];
                    var userHr = AlarmNumber[i][1];
                    min = AlarmNumber[i][2];
                    console.log('Lets run the alarm');
                    check = setInterval(() => {
                        this.showCurrentTime();

                        // check the alarm timing if current then it will buzz or rang
                        var data = new Date();
                        if((Number(userDay) - 1) == data.getDay() && userHr == data.getHours() && min == data.getMinutes()){
                            console.log('Time is up - Ring! Ring! Ring! Ring!');
                            this.showCurrentTime();
                                // have snooze function in it and have limited 3 times of snoozing after five minutes as asked in question
                                let flag = 'n';
                                    flag = prompt('Do you want to snooze the time for 5 minutes : y & n ?');
                                    
                                    if(flag == 'y' && snoozeTime < 3){
                    
                                        // needed explicit type casting in js because the snoozeTime global variable becomes string
                                        Number(snoozeTime);
                                        snoozeTime = Number(snoozeTime) + Number(1);
                                        
                                        // increment the snooze time by five minutes
                                        min = Number(min) + Number(5);
                    
                                        // setTimeout well not much needed but still for showing 1sec = 1ooo ms gap in it
                                        setTimeout(() => {}, 1000)
                                    }
                                    else{
                                        console.log('Your time is up tick-tick, 3 times snoozes by you or you stop the alarm');
                                        console.log();
                    
                                        // stopping the clock of infinite loop 
                                        clearInterval(check);        
                                    
                                }
                            }
        
                            else{
                                if(status != min){
                                    this.showCurrentTime();
                                    status = min;
                                }
                            }     
                    },1000);
                }

                newAlarm.deleteAlarm();
                newAlarm.showUserAlarms();
    }

    // show all user's alarms using number 3 remember that
    showUserAlarms(){
        for(var i = 0; i<AlarmNumber.length; i++){
            console.log('Alarm No : 1 | ' + AlarmNumber[i][0], AlarmNumber[i][1], AlarmNumber[i][2]);
        }console.log();
    }

    // delete an user's alarm
    deleteAlarm(){
        this.showUserAlarms();
        let toDel = prompt('Enter the Alarm You want to delete by number 1 to N as your given alarms to as your number of alarms : ');
        if(toDel < 1 && AlarmNumber.length <= toDel){
            AlarmNumber.splice((toDel - 1), toDel);
        }
        else {
            console.log('cannot perform operation because no such alarm exist!');
        }
    }    
}



// creating object in javascript
let newAlarm = new Alarm();

// create user's alarm as first task
newAlarm.showCurrentTime();
newAlarm.createUserAlarm();
newAlarm.showCurrentTime();