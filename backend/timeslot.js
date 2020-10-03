class timeslot{

    constructor (day_of_week, slot_num, type){
        // Integer value representing day of week
        this.day_of_week = day_of_week;
        // Integer value representing the n'th half-hour slot of the day
        this.slot_num = slot_num;
        // Char value representing activity that will be completed during timeslot
        this.type = type;
    }

    // Returns the day of the timeslot
    getDay(){
        return this.day_of_week;
    }

    // Returns the position of the timeslot
    getSlot(){
        return this.slot_num;
    }

    // Returns timeslot type
    getType(){
        return this.type;
    }
}