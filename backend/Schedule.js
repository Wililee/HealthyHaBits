//AutoGenerates a Schedule based on the pre determined inputs
class Schedule{
    //user data is the list of timeslots in which the user is working
    constructor(userData){
        //creates a week
        this.w = new Week;
        userData.forEach(slot => {
            var dow = slot.day_of_week;
            var sn = slot.slot_num;
            //updates all the timeslots in the given week
            this.w.daysOfWeek[dow].time_slots[sn] = slot;
        });

        //auto adds the exercise,eating and sleepign slots
        //what to do if there is no base?
        var RecommendedSleepNum = 18;
        this.w.daysOfWeek.forEach(d =>{
            var flag = false;
            var lock = false;
            //first trys to find a base
            //only do this if the base isnt already set
            
            d.time_slots.forEach(s =>{
                if (s.slot_num === 0 && s.type === 'W'){
                    flag = true;
                }   
                //this would be the first blank after so just set flag to true
                else if (s.type === null && flag === true){
                        flag = false;
                }
                //sets the base time to 1h before
                else if (s.type === 'W' && flag === false && lock === false){
                    d.base = s.slot_num - 2;
                    lock = true;
                }
            })
        })  

        console.log(this.w.daysOfWeek[2].base + " base");

        //Sets the sleeping time to be 9 hours before the base and bleeds into previous day (unless day = 0)
        //does first one manunally to prevent oob error
        if (this.w.daysOfWeek[0].base < RecommendedSleepNum){
            for (var i = 0; i < this.w.daysOfWeek[0].base; i ++)
                this.w.daysOfWeek[0].time_slots[i].type = 'S';
        } else {
            for (var i = this.w.daysOfWeek[0].base - RecommendedSleepNum; i < this.w.daysOfWeek[0].base; i ++)
                this.w.daysOfWeek[0].time_slots[i].type = 'S';
        }

        //bleeds into previous day if its too early
        
        for (var index = 1; index < 7; index ++){
            if (this.w.daysOfWeek[index].base < RecommendedSleepNum){
                for (var i = 0; i < this.w.daysOfWeek[index].base; i ++)
                    this.w.daysOfWeek[index].time_slots[i].type = 'S';
                //bleeds into day before
                for (var i = 47 - (RecommendedSleepNum - this.w.daysOfWeek[index].base); i <= 47; i ++)
                    this.w.daysOfWeek[index - 1].time_slots[i].type = 'S';
            } else {
                for (var i = this.w.daysOfWeek[index].base - RecommendedSleepNum; i < this.w.daysOfWeek[index].base; i ++)
                    this.w.daysOfWeek[index].time_slots[i].type = 'S';
            }
            
        }


    }
}

//start end time with food gap
//auto insert a food gap
var ts = [];

ts.push(new Time_Slot(2,21,'W'));
ts.push(new Time_Slot(2,22,'W'));
ts.push(new Time_Slot(2,23,'W'));
ts.push(new Time_Slot(2,24,'W'));
ts.push(new Time_Slot(2,25,'W'));
ts.push(new Time_Slot(2,26,'W'));
ts.push(new Time_Slot(2,27,'W'));
ts.push(new Time_Slot(2,28,'W'));
ts.push(new Time_Slot(2,29,'W'));

var s = new Schedule(ts);
for (var i = 0; i < 48; i ++){
    console.log(i + " " + s.w.daysOfWeek[2].time_slots[i].type);
}