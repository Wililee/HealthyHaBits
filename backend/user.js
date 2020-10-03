class user { // Calculate data trends and generate insights

// Still a work-in progress, not really sure what I am doing with this

    constructor (name, age, gender, height, weight) {
        this.targetAverageDailySleep = 8;
        this.targetAverageDailyWater = 1; // daily water measured in gallons (as of now)

        if (gender === "male") {
            this.targetAverageDailyCalories = 120;
        } else if (gender === "female") {
            this.targetAverageDailyCalories = 90; // measured in micrograms
        }        
    }

    newWeek() {
        this.week = new Week();
    }

    getSleepTimeInsight() {
        var delta = this.targetAverageDailySleep - this.week.getWeekAvgActivityTime('S');
        var guideline;
        if (delta > 0) {
            return ("You slept " + abs(delta) + " hours under the target amount.")
        } else if (delta < 0) {
            return ("You slept " + abs(delta) + " hours over the target amount.")
        }  else {
            return ("You slept the perfect amount this week!")
        }
    }
}