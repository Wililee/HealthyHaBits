class Meal extends Time_Slot {

    constructor(day_of_week, slot_num, type, food_groups) {
        super(day_of_week, slot_num, type);
        // Key indexed array containing amount of each food-group is present in the meal
        // V = Fruits and Veggies, D = Dairy, M = Meat and Alternatives, G = Grains
        this.food_group = food_group;
        categories = ["calories", "protein", 'fibre', 'carbohydrates', 'vitamins'];
        // Key indexed array containing nutritional information of food; initially set to 0
        this.nutritional_info = [];
        for (category in categories){
            this.nutritional_info[category] = 0;
        }
    }

    // Returns the amount of a food group the meal contains
    getFoodGroup(group){
        return this.food_group[group];
    }

    // Returns nutritional information of a certain category
    getNutritionalInfo(category){
        return this.nutritional_info[category];
    }

    // Updates nutritional information of a certain category
    addNutritionalInfo(category, amount){
        this.nutritional_info[category] = amount;
    }
}