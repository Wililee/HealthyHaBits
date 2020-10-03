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
        var sum;
        for (i = 0; i < 7; i++) {
            sum += this.daysOfWeek[i].numHoursActivity(A);
        }
        return sum;
    }

    getWeekAvgActivityTime(A) {
        return this.getWeekActivityTime(A)/7;
    }
}

var w = new Week();
console.log(w.getWeekSleepTime);