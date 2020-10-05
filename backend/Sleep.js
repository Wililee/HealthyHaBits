class Sleep extends Time_Slot {

    constructor(day_of_week, slot_num, type, sleep_quality, sleep_type) {
        super(day_of_week, slot_num, type);
        // Char value indicating quality of sleep
        // G = Good, M = Medium, B = Bad
        this.sleep_quality = sleep_quality;
        // Char value indicating type of sleep
        // N = Nap, F = Full
        this.sleep_type = sleep_type;
    }

    // Returns the number of calories burned
    getSleepQuality(){
        return this.sleep_quality;
    }
    
    // Returns the type of workout completed
    getSleepType(){
        return this.sleep_type;
    }
}