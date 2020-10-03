class week {

    constructor () {
        var daysOfWeek = [];
        var weekdayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        var i;
        for (i = 0; i < 7; i++) {
            daysOfWeek.push(new day(weekdayNames[i]));
        }
    }

    getWeekDay(num) {
        weekdayNum = num % 7; // use mod to stop index error
        return daysOfWeek[num];
    }
}