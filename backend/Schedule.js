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

        //exersize right after work
        this.w.daysOfWeek.forEach(d => {
            var f = false;
            var b = false;
            var br = false;
            d.time_slots.forEach(s => {
                if (s.type === 'W')
                    f = true;
                else if (s.type === null && f === true && b === false)
                    b = true;
                else if (s.type === null && f === true && b === true && br === false){
                    s.type = 'E';
                    br = true;
                }
                          
            })
        })

        console.log(this.w.daysOfWeek[0].base + " base of 1st");

        //sets up eating times
        for (var i = 0; i < 6; i ++){
        //first one is done automatically to prevent oob error
        this.w.daysOfWeek[i].time_slots[this.w.daysOfWeek[i].base].type = 'M';
        //2nd during work break (already added)

        //3rd directly after workout
        for (var j = 0; j < 48; j ++){
            if (this.w.daysOfWeek[i].time_slots[j].type === 'E')
                if (this.w.daysOfWeek[i].time_slots[j].slot_num < 47){ //not the last
                    this.w.daysOfWeek[i].time_slots[j+1].type = 'M';
                }

                //last element bleeds into next day
                else {
                    this.w.daysOfWeek[i+1].time_slots[0].type = 'M';
                }
        }
        
        }

        //do the last one seperatly to prevent ioob error
        this.w.daysOfWeek[6].time_slots[this.w.daysOfWeek[6].base].type = 'M';
        //2nd during work break (already added)

        //3rd directly after workout
        for (var j = 0; j < 48; j ++){
            if (this.w.daysOfWeek[6].time_slots[j].type === 'E')
                if (this.w.daysOfWeek[6].time_slots[j].slot_num < 47){ //not the last
                    this.w.daysOfWeek[6].time_slots[j+1].type = 'M';
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
ts.push(new Time_Slot(0,21,'W'));
ts.push(new Time_Slot(1,21,'W'));
ts.push(new Time_Slot(3,21,'W'));
ts.push(new Time_Slot(4,21,'W'));
ts.push(new Time_Slot(5,21,'W'));
ts.push(new Time_Slot(6,21,'W'));

var s = new Schedule(ts);
for (var i = 0; i < 48; i ++){
    console.log(i + " " + s.w.daysOfWeek[6].time_slots[i].type);
}