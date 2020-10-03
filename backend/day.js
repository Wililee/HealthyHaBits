class day {
    constructor (day_of_week){
        this.day_of_week = day_of_week;
        //creates time slot objs
        time_slot time_slots;
        //type,starttime(1-48)
        for (var i = 0; i < 48; i ++)
            time_slots.append(new time_slot(null, i));
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