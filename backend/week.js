class week {

    constructor () {
        this.daysOfWeek = [];
        this.weekdayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        var i;
        for (i = 0; i < 7; i++) {
            this.daysOfWeek.push(new day(this.weekdayNames[i]));
        }
    }

    getWeekDay(num) {
        //var weekdayNum = num % 7; // use mod to stop index error
        return this.daysOfWeek[num % 7];
    }
}

var w = new week();
console.log(w.getWeekDay(142356));