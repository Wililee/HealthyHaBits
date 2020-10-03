class Exercise extends Time_Slot {

    constructor(day_of_week, slot_num, type, calories_burned, workout) {
        super(day_of_week, slot_num, type);
        // Integer value indicating how many calories were burned
        this.calories_burned = calories_burned;
        // String value indicating what workout was done
        this.workout = workout;
    }

    // Returns the number of calories burned
    getCalories(){
        return this.calories_burned;
    }
    // Returns the type of workout completed
    workout(){
        return this.workout;
    }

}