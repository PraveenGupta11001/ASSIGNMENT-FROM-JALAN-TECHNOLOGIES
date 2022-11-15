// 1:50pm to --
const ps = require('prompt-sync');
const prompt = ps();

// globally declaring the the array of weeks to clarify the input that you needed
var days = ['Sunday = 1','Monday = 2','Tuesday = 3', 'Wednesday = 4', 'Thursday = 5', 'Friday = 6', 'Saturday = 7'];
var min;
let snoozeTime = 0;
var AlarmNumber = new Array(2);


// created class in javascript using the keyword class
class Alarm{

    // when object is created this constructor will call back itself without calling it.
    constructor (){
        console.log('Alarm is ready! to tick');
        console.log();
    }

    // show current time to user by using javascript time and date 
    showCurrentTime(){
        console.log();
        var data = new Date();
        let currentTime = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
        console.log(currentTime);
    }

    // check the alarm timing if current then it will buzz or rang
    checkAlarm(day, hr, min){
        var data = new Date();
        console.log();
        if((day - 1) == data.getDay() && hr == data.getHours() && min == data.getMinutes()){
            console.log('Time is up - Buzz Buzz');
            console.log();
            return true;
        }
        else{
            return false;
        }        
    }

    // have snooze function in it and have limited 3 times of snoozing after five minutes as asked in question
    createAlarm(userDay, userHr, min){
        this.showCurrentTime();
        console.log(days)

        let check = setInterval(() => {
            let matchTime = this.checkAlarm(Number(userDay), userHr, min);
            this.showCurrentTime();

            if(matchTime){
                let flag = 'n';
                flag = prompt('Do you want to snooze the time for 5 minutes : y & n ?');
                
                if(flag == 'y' && snoozeTime < 1){

                    // needed explicit type casting in js because the snoozeTime global variable becomes string
                    Number(snoozeTime);
                    snoozeTime = Number(snoozeTime) + Number(1);
                    
                    // increment the snooze time by five minutes
                    min = Number(min) + Number(5);

                    // setTimeout well not much needed but still for showing 1sec = 1ooo ms gap in it
                    setTimeout(() => {}, 1000)
                }
                else{
                    console.log('Your time is up tick-tick');
                    console.log();

                    // stopping the clock of infinite loop 
                    clearInterval(check);        
                }
            }

        },1000);
    }

    // this create number of user alarms
    createUserAlarm(){
        console.log();
        let userAlarm = prompt('Enter the number of alarm you want : ');

        let N = 2;
        for(var i = 0; i<N; i++){
            AlarmNumber[i] = new Array(2);
        }

        for(var i = 0; i<userAlarm; i++){
            console.log('Enter the day(1-7), hours(24 hrs format), minutes(0-60) of alarm ' + (i+1) + ' : ');
            this.showCurrentTime();
            console.log();
            // using 2d array to store the data of user's alarms
            AlarmNumber[i][0] = prompt('Enter the day you want to set the Alarm : ');
            AlarmNumber[i][1] = prompt('Enter hrs : ');
            AlarmNumber[i][2] = prompt('Enter Min : ');
            console.log();
        }
    }

    // run the alarm with snooze system
    runAlarm(){
        let runAlarmNumber = prompt('Enter the number of alarm you want to run : ');
        runAlarmNumber = Number(runAlarmNumber) - Number(1);
        console.log(AlarmNumber[runAlarmNumber][0], AlarmNumber[runAlarmNumber][1], AlarmNumber[runAlarmNumber][2]);
        newAlarm.createAlarm(AlarmNumber[runAlarmNumber][0], AlarmNumber[runAlarmNumber][1], AlarmNumber[runAlarmNumber][2]);
    }

    // show all user's alarms using number 3 remember that
    showUserAlarms(){
        for(var i in AlarmNumber){
            console.log(AlarmNumber[i][0], AlarmNumber[i][1], AlarmNumber[i][2]);
        }
    }

    // delete an user's alarm
    deleteAlarm(){
        let toDel = prompt('Enter the Alarm You want to delete by number 1 to as your number of alarms : ');
        AlarmNumber.splice((toDel - 1), toDel);
    }

    // using switch case call it rapidly and required function to perform
    runWholeAlarm(){
        

        let value = prompt('Enter the value to perform operation of the Alarm clock : ');
        switch(Number(value)){
            case 1: 
                this.showCurrentTime();
                break;

            case 2 :
                this.createUserAlarm();
                break;

            case 3 :
                this.showUserAlarms();
                break;

            case 4 : 
                this.runAlarm();
                break;

            case 5 : 
                this.deleteAlarm();
                break;

            default:
                console.log('Please enter a valid input and try again! ')
        }

    }
    
}

// creating object in javascript
let newAlarm = new Alarm();
console.log('1 to show current time\n2 : create user alarm \n3 : show number of alarms user have\n4 : to run the alarm and snooze it 3 times\n5 : delete an alarm of user created');
console.log();
newAlarm.runWholeAlarm();

let start = setInterval(function(){
    console.log();
    var user = prompt('Do you want to run alarm operation again : press y or n : ');
    if(user == 'y' || user == 'Y'){
        console.log();
        console.log('1 to show current time\n2 : create user alarm \n3 : show number of alarms user have\n4 : to run the alarm and snooze it 3 times\n5 : delete an alarm of user created');
        console.log();
        newAlarm.runWholeAlarm();
    }
    else{
        clearInterval(start);
    }
},1000);