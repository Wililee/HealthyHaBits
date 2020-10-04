//AutoGenerates a Schedule based on the pre determined inputs
class Schedule{
    //user data is the list of timeslots in which the user is working
    constructor(userData){
        //creates a week
        this.w = new week;
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

            //first trys to find a base
            //only do this if the base isnt already set
            if (d.base !== null)
            d.time_slots.forEach(s =>{
                if (s.slot_num === 0 && s.type === 'W'){
                    flag = true;
                }
                
                //this would be the first blank after so just set flag to true
                if (s.type === null){
                        flag = false;
                }

                //sets the base time to 1h before
                if (s.type === 'W' && flag === false){
                    d.base = s.slot_num - 2;
                }
            })
        })  

        //Sets the sleeping time to be 9 hours before the base and bleeds into previous day (unless day = 0)
        //does first one manunally to prevent oob error
        if (this.w.daysOfWeek.base < RecommendedSleepNum){
            for (var i = 0; i <= this.w.daysOfWeek.base; i ++)
                this.daysOfWeek.time_slots[i].type = 'S';
        } else {
            for (var i = this.w.daysOfWeek.base - RecommendedSleepNum; i <= this.w.daysOfWeek.base; i ++)
                this.daysOfWeek.time_slots[i].type = 'S';
        }

        //bleeds into previous day if its too early
        
        for (var index = 0; index < 7; index ++){
            if (this.w.daysOfWeek.base < RecommendedSleepNum){
                for (var i = 0; i <= this.w.daysOfWeek.base; i ++)
                    this.daysOfWeek.time_slots[i].type = 'S';
                //bleeds into day before
                var remainder = RecommendedSleepNum - this.w.daysOfWeek.base;
                for (var i = 23 - (RecommendedSleepNum - this.w.daysOfWeek.base); i <= 23; i ++)
                    this.w.daysOfWeek[index -1].time_slots[i].type = 'S';
            } else {
                for (var i = this.w.daysOfWeek.base - RecommendedSleepNum; i <= this.w.daysOfWeek.base; i ++)
                    this.daysOfWeek.time_slots[i].type = 'S';
            }
            
        }

    }
}

//start end time with food gap
//auto insert a food gap
var ts = [];
ts.push(new time_slot(2,20,'W'));
ts.push(new time_slot(2,21,'W'));
ts.push(new time_slot(2,22,'W'));
ts.push(new time_slot(2,23,'W'));
ts.push(new time_slot(2,24,'W'));
ts.push(new time_slot(2,25,'W'));
ts.push(new time_slot(2,26,'W'));
ts.push(new time_slot(2,27,'W'));
ts.push(new time_slot(2,28,'W'));
ts.push(new time_slot(2,29,'W'));