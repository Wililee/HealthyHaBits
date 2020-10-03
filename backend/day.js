class day {
    constructor (day_of_week){
        this.day_of_week = day_of_week; //just the name of the week
        //creates time slot objs
        this.time_slots = [];
        //type,starttime(1-48)
        for (var i = 0; i < 48; i ++)
            this.time_slots.push(new time_slot(this.day_of_week, i, null));
    }

    numHoursExercise(){
        var h = 0;
        this.time_slots.forEach(s => {
            if (s.type === "E")
                h += 1;
        return h;
        });
    }
    
}