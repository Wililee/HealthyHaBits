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
                h += 0.5;
        return h;
        });
    }
    
    // Overwrites time_slots[start...end] with Exercise Time_Slot objects
    addExercise(start, end, calories_burned, workout) {
        for (var i = start ; i < end; i++)
            this.time_slots[i] = new Exercise(this.day_of_week, i, 'E', calories_burned/(end-start+1), workout);
    }

    // Overwrites time_slots[start...end] with Meal Time_Slot objects
    addMeal(start, end, food_group) {
        for (var i = start ; i < end; i++)
            this.time_slots[i] = new Meal(this.day_of_week, i, 'M', food_group);
    }

    // Overwrites time_slots[start...end] with Sleep Time_Slot objects
    addSleep(start, end, sleep_quality, sleep_type) {
        for (var i = start ; i < end; i++)
            this.time_slots[i] = new Sleep(this.day_of_week, i, 'S', sleep_quality, sleep_type);
    }

    // Overwrites time_slots[start...end] with Null Time_Slot objects
    clearSlots(start, end) {
        for (var i = start ; i < end; i++)
            this.time_slots[i] = new Time_Slot(this.day_of_week, i, null);
    }
    
}