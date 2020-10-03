//AutoGenerates a Schedule based on the pre determined inputs
/*
This will be the dynamic
*/
class Schedule{
    //user data is the list of timeslots in which the user is working
    constructor(userData){
        //creates a week
        this.w = new week;
        userData.forEach(slot => {
            var dow = slot.day_of_week;
            var sn = slot.slot_num;
            //updates all the timeslots in the given week
            w.daysOfWeek[dow].time_slots[sn] = slot;
        });

        //auto adds the exercise,eating and sleepign slots
        //what to do if there is no base?
        w.daysOfWeek.forEach(d =>{
            var base;
            var flag = false;

            //first trys to find a base
            d.time_slots.forEach(s =>{
                if (s.slot_num === 0){
                    flag = true;
                }
                
                //this would be the first blank after so just set flag to true
                if (s.type === null){
                    //determine if there is more than 8h ahead
                    var temp = false;
                    
                }
                if (s.type === 'W' && flag === false){

                }
            })
        })
        
        
    }

}