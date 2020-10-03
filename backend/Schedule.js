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
        var base =0;
    }

}