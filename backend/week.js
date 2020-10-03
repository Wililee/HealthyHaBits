class Week {

    constructor () {
        this.daysOfWeek = [];
        this.weekdayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        var i;
        for (i = 0; i < 7; i++) {

            this.daysOfWeek.push(new Day(this.weekdayNames[i]));
        }
    }

    getWeekDay(num) {
        return this.daysOfWeek[num % 7];
    }

    getWeekActivityTime(A) {
        var i;
        var sum = 0;
        for (i = 0; i < 7; i++) {
            var instance = this.daysOfWeek[i];
            sum = sum + instance.numHoursActivity(A); // currently having a NaN error
        }
        
        return sum;
    }

    getWeekAvgActivityTime(A) {
        return this.getWeekActivityTime(A)/7;
    }

    getDayBase(num) { // base is defined as the moment you wake up
        return this.daysOfWeek[num].base();
    } 
}

var w = new Week();
console.log(w.getWeekActivityTime('S'));