class user { // Calculate data trends and generate insights
    constructor () {

        this.week = new week();
        this.targetDailySleep;
        this.targetWeeklyAerobics = 150;
        this.targetWeeklyStrength = 60;
        this.targetWeeklyExercise = 210;
        this.targetCaloricConsumption;
        this.proteinCalories
    }

    getExerciseInsight() {
        (this.targetWeeklyExercise - this.week.getWeekActivityTime('E'))/this.targetWeeklyExercise;

    }
}