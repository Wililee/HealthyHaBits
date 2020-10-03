class Meal extends Time_Slot {

    constructor(day_of_week, slot_num, type, sleep_quality, sleep_type) {
        super(day_of_week, slot_num, type);
        // Integer value indicating how many calories were gained
        this.calories_gained = calories_gained;
        // Char value indicating food group
        // V = Fruits and Veggies, D = Dairy, M = Meat and Alternatives, G = Grains
        this.food_group = food_group;
    }

    // Returns the number of calories gained
    getCaloriesGained(){
        return this.calories_gained;
    }

    // Returns the food group of the meal
    getFoodGroup(){
        return this.food_group;
    }
}