class Day {
    constructor (day_of_week){
        this.day_of_week = day_of_week; //just the name of the week
        //creates time slot objs
        this.time_slots = [];
        //type,starttime(1-48)
        for (var i = 0; i < 48; i ++)
            this.time_slots.push(new Time_Slot(this.day_of_week, i, null));
    }

    //A represents the activity such as:
    //E: exercise, W: working, M: Meal, S: Sleep
    numHoursActivity(A){
        var h = 0;
        this.time_slots.forEach(s => {
            if (s.type === A)
                h += 1;
        return h;
        });
    }    
    
}