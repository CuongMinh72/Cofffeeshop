const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Category = mongoose.model('Category', categorySchema);

// Create a few categories
const category1 = new Category({
    name: 'Espresso',
    description: 'Strong and concentrated coffee',
    image: 'espresso.jpg'
});

const category2 = new Category({
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    image: 'cappuccino.jpg'
});

const category3 = new Category({
    name: 'Latte',
    description: 'Espresso with steamed milk',
    image: 'latte.jpg'
});

// Save the categories to the database
category1.save();
category2.save();
category3.save();
    