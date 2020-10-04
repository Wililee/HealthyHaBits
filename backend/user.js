class user { // Calculate data trends and generate insights
// Can be an assesment of how good the generated schedule is to use
// Still a work-in progress

    constructor (name, age, gender, height, weight) {
        this.week = new Week();

        this.targetAverageDailySleep = 8;
        
        this.targetWeekSleepHours = 56;
        this.targetWeekExerciseHours = 3.5;
        this.targetWeekEatingHours = 1.5;

        // Target daily values of nutrients
        this.targetAverageDailyCalories = 2000;
        this.targetAverageDailyFibre = 25; // grams
        this.targetAverageDailyProtein = 0.8*weight; //assuming weight is in kg
        this.targetAverageDailyCarbs = 900; // arbitrary
        this.targetAverageDailyVitamins = 40; // arbitrary

        // below values not yet used in any data calculations
        this.targetAverageDailyWater = 1; // daily water measured in gallons
    }      

    newWeek() {
        this.week = new Week();
    }

    getSleepConsistencyInsight() {
        var averageHourVariation;
        var sum;
        
        for (i = 0; i < 7; i++) { // iterate through the week
            if (i < 6) { // to prevent index overflow error
                var delta = this.week.getDayBase(i+1) - this.week.getDayBase(i); // Calculate the difference in base times
                sum = sum + abs(delta); // sum will represent # of timeslots in between base times
            }
        }
        averageHourVariation = sum/14; // divide by 2*7 to convert from total half hours to average hours
        return ("Your sleep start times vary by an average of " + averageHourVariation + " hours each night.");
    }

    getAverageSleepInsight() {
        var delta = this.targetAverageDailySleep - this.week.getWeekAvgActivityTime('S'); // find the difference between avg. hours slept each night and the target
        if (delta > 0) { // if statements to determine how to communicate to user how they match up to to expected.
            return ("You slept an average of " + (this.week.getWeekAvgActivityTime('S')) + " which is " + abs(delta) + " hours UNDER the target amount.");
        } else if (delta < 0) {
            return ("You slept an average of " + (this.week.getWeekAvgActivityTime('S')) + " which is " + abs(delta) + " hours OVER the target amount.");
        }
        return ("You slept the perfect amount this week!")
    }

    getActivityPercentage(A) { // Calculates if the scheduler has scheduled all of the necessary activities
        var percentage = 100*Math.round(this.getWeekAvgActivityTime(A)/this.targetWeekSleepHours);
        return percentage;
    }

    getNutritionalPercentage(category) { // Calcultaes if you have enough fibre/protein/carbs. etc. planned
        var averageNutrient = this.week.getWeeklyNutrient(category)/7;
        var percentage = averageFibre/this.getNutrient(category);
        return percentage;
    }

    getNutrient(category) { 
        var categories = ["calories", "protein", 'fibre', 'carbohydrates', 'vitamins'];
        if (category === "calories") { // I know this is kind of lazy programming sorry
            return this.targetAverageDailyCalories;
        } else if (category === 'fibre') {
            return this.targetAverageDailyFibre;
        } else if (category === "protein") {
            return this.targetAverageDailyProtein;
        } else if (category === 'carbohydrates') {
            return this.targetAverageDailyCarbs;
        } else if (category === 'vitamins') {
            return this.targetAverageDailyVitamins;
        }
    }
}