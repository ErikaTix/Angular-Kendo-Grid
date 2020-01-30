import { Button } from '@progress/kendo-angular-buttons';

export const sampleProducts = [
    {
        ProductID: 1,
        Name: 'Chai',
        SupplierID: 1,
        RuleID: 1,
        ModifyAt: '10 boxes x 20 bags',
        Notifications: 10,
        Active: false,
        Category: {
            RuleID: 1,
            CategoryName: 'Beverages',
            Modify: 'Soft drinks, coffees, teas, beers, and ales'
        },
        CategoryName: new Date(1996, 8, 20)
    },
    {
        ProductID: 2,
        Name: 'Chang',
        SupplierID: 1,
        RuleID: 1,
        ModifyAt: '24 - 12 oz bottles',
        Notifications: 25,
        Active: false,
        Category: {
            RuleID: 1,
            CategoryName: 'Beverages',
            Modify: 'Soft drinks, coffees, teas, beers, and ales'
        },
        CategoryName: new Date(1996, 7, 12)
    },
    {
        ProductID: 3,
        Name: 'Aniseed Syrup',
        SupplierID: 1,
        RuleID: 2,
        ModifyAt: '12 - 550 ml bottles',
        Notifications: 25,
        Active: false,
        Category: {
            RuleID: 2,
            CategoryName: 'Condiments',
            Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        },
        CategoryName: new Date(1996, 8, 26)
    },
    {
        ProductID: 4,
        Name: 'Chef Anton\'s Cajun Seasoning',
        SupplierID: 2,
        RuleID: 2,
        ModifyAt: '48 - 6 oz jars',
        Notifications: 0,
        Active: false,
        Category: {
            RuleID: 2,
            CategoryName: 'Condiments',
            Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        },
        CategoryName: new Date(1996, 9, 19)
    },
    {
        ProductID: 5,
        Name: 'Chef Anton\'s Gumbo Mix',
        SupplierID: 2,
        RuleID: 2,
        ModifyAt: '36 boxes',
        Notifications: 0,
        Active: true,
        Category: {
            RuleID: 2,
            CategoryName: 'Condiments',
            Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        },
        CategoryName: new Date(1996, 7, 17)
    },
    {
        ProductID: 6,
        Name: 'Grandma\'s Boysenberry Spread',
        SupplierID: 3,
        RuleID: 2,
        ModifyAt: '12 - 8 oz jars',
        Notifications: 25,
        Active: false,
        Category: {
            RuleID: 2,
            CategoryName: 'Condiments',
            Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        },
        CategoryName: new Date(1996, 9, 19)
    },
    {
        ProductID: 7,
        Name: 'Uncle Bob\'s Organic Dried Pears',
        SupplierID: 3,
        RuleID: 7,
        ModifyAt: '12 - 1 lb pkgs.',
        Notifications: 10,
        Active: false,
        Category: {
            RuleID: 7,
            CategoryName: 'Produce',
            Modify: 'Dried fruit and bean curd'
        },
        CategoryName: new Date(1996, 7, 22)
    },
    {
        ProductID: 8,
        Name: 'Northwoods Cranberry Sauce',
        SupplierID: 3,
        RuleID: 2,
        ModifyAt: '12 - 12 oz jars',
        Notifications: 0,
        Active: false,
        Category: {
            RuleID: 2,
            CategoryName: 'Condiments',
            Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        },
        CategoryName: new Date(1996, 11, 1)
    },
    {
        ProductID: 9,
        Name: 'Mishi Kobe Niku',
        SupplierID: 4,
        RuleID: 6,
        ModifyAt: '18 - 500 g pkgs.',
        Notifications: 0,
        Active: true,
        Category: {
            RuleID: 6,
            CategoryName: 'Meat/Poultry',
            Modify: 'Prepared meats'
        },
        CategoryName: new Date(1997, 1, 21)
    },
    {
        ProductID: 10,
        Name: 'Ikura',
        SupplierID: 4,
        RuleID: 8,
        ModifyAt: '12 - 200 ml jars',
        Notifications: 0,
        Active: false,
        Category: {
            RuleID: 8,
            CategoryName: 'Seafood',
            Modify: 'Seaweed and fish'
        },
        CategoryName: new Date(1996, 8, 5)
    }
];

export const products = [{
    ProductID: 1,
    Name: 'Chai',
    SupplierID: 1,
    RuleID: 1,
    ModifyAt: '10 boxes x 20 bags',
    UnitPrice: 18.0000,
    UnitsInStock: 39,
    Notifications: 10,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 2,
    Name: 'Chang',
    SupplierID: 1,
    RuleID: 1,
    ModifyAt: '24 - 12 oz bottles',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 3,
    Name: 'Aniseed Syrup',
    SupplierID: 1,
    RuleID: 2,
    ModifyAt: '12 - 550 ml bottles',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 4,
    Name: 'Chef Anton\'s Cajun Seasoning',
    SupplierID: 2,
    RuleID: 2,
    ModifyAt: '48 - 6 oz jars',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 5,
    Name: 'Chef Anton\'s Gumbo Mix',
    SupplierID: 2,
    RuleID: 2,
    ModifyAt: '36 boxes',
    Notifications: 0,
    Active: true,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 6,
    Name: 'Grandma\'s Boysenberry Spread',
    SupplierID: 3,
    RuleID: 2,
    ModifyAt: '12 - 8 oz jars',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 7,
    Name: 'Uncle Bob\'s Organic Dried Pears',
    SupplierID: 3,
    RuleID: 7,
    ModifyAt: '12 - 1 lb pkgs.',
    Notifications: 10,
    Active: false,
    Category: {
        RuleID: 7,
        CategoryName: 'Produce',
        Modify: 'Dried fruit and bean curd'
    }
}, {
    ProductID: 8,
    Name: 'Northwoods Cranberry Sauce',
    SupplierID: 3,
    RuleID: 2,
    ModifyAt: '12 - 12 oz jars',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 9,
    Name: 'Mishi Kobe Niku',
    SupplierID: 4,
    RuleID: 6,
    ModifyAt: '18 - 500 g pkgs.',
    Notifications: 0,
    Active: true,
    Category: {
        RuleID: 6,
        CategoryName: 'Meat/Poultry',
        Modify: 'Prepared meats'
    }
}, {
    ProductID: 10,
    Name: 'Ikura',
    SupplierID: 4,
    RuleID: 8,
    ModifyAt: '12 - 200 ml jars',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 11,
    Name: 'Queso Cabrales',
    SupplierID: 5,
    RuleID: 4,
    ModifyAt: '1 kg pkg.',
    Notifications: 30,
    Active: false,
    Category: {
        RuleID: 4,
        CategoryName: 'Dairy Products',
        Modify: 'Cheeses'
    }
}, {
    ProductID: 12,
    Name: 'Queso Manchego La Pastora',
    SupplierID: 5,
    RuleID: 4,
    ModifyAt: '10 - 500 g pkgs.',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 4,
        CategoryName: 'Dairy Products',
        Modify: 'Cheeses'
    }
}, {
    ProductID: 13,
    Name: 'Konbu',
    SupplierID: 6,
    RuleID: 8,
    ModifyAt: '2 kg box',
    Notifications: 5,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 14,
    Name: 'Tofu',
    SupplierID: 6,
    RuleID: 7,
    ModifyAt: '40 - 100 g pkgs.',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 7,
        CategoryName: 'Produce',
        Modify: 'Dried fruit and bean curd'
    }
}, {
    ProductID: 15,
    Name: 'Genen Shouyu',
    SupplierID: 6,
    RuleID: 2,
    ModifyAt: '24 - 250 ml bottles',
    Notifications: 5,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 16,
    Name: 'Pavlova',
    SupplierID: 7,
    RuleID: 3,
    ModifyAt: '32 - 500 g boxes',
    Notifications: 10,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 17,
    Name: 'Alice Mutton',
    SupplierID: 7,
    RuleID: 6,
    ModifyAt: '20 - 1 kg tins',
    Notifications: 0,
    Active: true,
    Category: {
        RuleID: 6,
        CategoryName: 'Meat/Poultry',
        Modify: 'Prepared meats'
    }
}, {
    ProductID: 18,
    Name: 'Carnarvon Tigers',
    SupplierID: 7,
    RuleID: 8,
    ModifyAt: '16 kg pkg.',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 19,
    Name: 'Teatime Chocolate Biscuits',
    SupplierID: 8,
    RuleID: 3,
    ModifyAt: '10 boxes x 12 pieces',
    Notifications: 5,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 20,
    Name: 'Sir Rodney\'s Marmalade',
    SupplierID: 8,
    RuleID: 3,
    ModifyAt: '30 gift boxes',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 21,
    Name: 'Sir Rodney\'s Scones',
    SupplierID: 8,
    RuleID: 3,
    ModifyAt: '24 pkgs. x 4 pieces',
    Notifications: 5,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 22,
    Name: 'Gustaf\'s Knäckebröd',
    SupplierID: 9,
    RuleID: 5,
    ModifyAt: '24 - 500 g pkgs.',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 5,
        CategoryName: 'Grains/Cereals',
        Modify: 'Breads, crackers, pasta, and cereal'
    }
}, {
    ProductID: 23,
    Name: 'Tunnbröd',
    SupplierID: 9,
    RuleID: 5,
    ModifyAt: '12 - 250 g pkgs.',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 5,
        CategoryName: 'Grains/Cereals',
        Modify: 'Breads, crackers, pasta, and cereal'
    }
}, {
    ProductID: 24,
    Name: 'Guaraná Fantástica',
    SupplierID: 10,
    RuleID: 1,
    ModifyAt: '12 - 355 ml cans',
    Notifications: 0,
    Active: true,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 25,
    Name: 'NuNuCa Nuß-Nougat-Creme',
    SupplierID: 11,
    RuleID: 3,
    ModifyAt: '20 - 450 g glasses',
    Notifications: 30,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 26,
    Name: 'Gumbär Gummibärchen',
    SupplierID: 11,
    RuleID: 3,
    ModifyAt: '100 - 250 g bags',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 27,
    Name: 'Schoggi Schokolade',
    SupplierID: 11,
    RuleID: 3,
    ModifyAt: '100 - 100 g pieces',
    Notifications: 30,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 28,
    Name: 'Rössle Sauerkraut',
    SupplierID: 12,
    RuleID: 7,
    ModifyAt: '25 - 825 g cans',
    Notifications: 0,
    Active: true,
    Category: {
        RuleID: 7,
        CategoryName: 'Produce',
        Modify: 'Dried fruit and bean curd'
    }
}, {
    ProductID: 29,
    Name: 'Thüringer Rostbratwurst',
    SupplierID: 12,
    RuleID: 6,
    ModifyAt: '50 bags x 30 sausgs.',
    Notifications: 0,
    Active: true,
    Category: {
        RuleID: 6,
        CategoryName: 'Meat/Poultry',
        Modify: 'Prepared meats'
    }
}, {
    ProductID: 30,
    Name: 'Nord-Ost Matjeshering',
    SupplierID: 13,
    RuleID: 8,
    ModifyAt: '10 - 200 g glasses',
    Notifications: 15,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 31,
    Name: 'Gorgonzola Telino',
    SupplierID: 14,
    RuleID: 4,
    ModifyAt: '12 - 100 g pkgs',
    Notifications: 20,
    Active: false,
    Category: {
        RuleID: 4,
        CategoryName: 'Dairy Products',
        Modify: 'Cheeses'
    }
}, {
    ProductID: 32,
    Name: 'Mascarpone Fabioli',
    SupplierID: 14,
    RuleID: 4,
    ModifyAt: '24 - 200 g pkgs.',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 4,
        CategoryName: 'Dairy Products',
        Modify: 'Cheeses'
    }
}, {
    ProductID: 33,
    Name: 'Geitost',
    SupplierID: 15,
    RuleID: 4,
    ModifyAt: '500 g',
    Notifications: 20,
    Active: false,
    Category: {
        RuleID: 4,
        CategoryName: 'Dairy Products',
        Modify: 'Cheeses'
    }
}, {
    ProductID: 34,
    Name: 'Sasquatch Ale',
    SupplierID: 16,
    RuleID: 1,
    ModifyAt: '24 - 12 oz bottles',
    Notifications: 15,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 35,
    Name: 'Steeleye Stout',
    SupplierID: 16,
    RuleID: 1,
    ModifyAt: '24 - 12 oz bottles',
    Notifications: 15,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 36,
    Name: 'Inlagd Sill',
    SupplierID: 17,
    RuleID: 8,
    ModifyAt: '24 - 250 g  jars',
    Notifications: 20,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 37,
    Name: 'Gravad lax',
    SupplierID: 17,
    RuleID: 8,
    ModifyAt: '12 - 500 g pkgs.',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 38,
    Name: 'Côte de Blaye',
    SupplierID: 18,
    RuleID: 1,
    ModifyAt: '12 - 75 cl bottles',
    Notifications: 15,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 39,
    Name: 'Chartreuse verte',
    SupplierID: 18,
    RuleID: 1,
    ModifyAt: '750 cc per bottle',
    Notifications: 5,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 40,
    Name: 'Boston Crab Meat',
    SupplierID: 19,
    RuleID: 8,
    ModifyAt: '24 - 4 oz tins',
    Notifications: 30,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 41,
    Name: 'Jack\'s New England Clam Chowder',
    SupplierID: 19,
    RuleID: 8,
    ModifyAt: '12 - 12 oz cans',
    Notifications: 10,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 42,
    Name: 'Singaporean Hokkien Fried Mee',
    SupplierID: 20,
    RuleID: 5,
    ModifyAt: '32 - 1 kg pkgs.',
    Notifications: 0,
    Active: true,
    Category: {
        RuleID: 5,
        CategoryName: 'Grains/Cereals',
        Modify: 'Breads, crackers, pasta, and cereal'
    }
}, {
    ProductID: 43,
    Name: 'Ipoh Coffee',
    SupplierID: 20,
    RuleID: 1,
    ModifyAt: '16 - 500 g tins',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 44,
    Name: 'Gula Malacca',
    SupplierID: 20,
    RuleID: 2,
    ModifyAt: '20 - 2 kg bags',
    Notifications: 15,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 45,
    Name: 'Rogede sild',
    SupplierID: 21,
    RuleID: 8,
    ModifyAt: '1k pkg.',
    Notifications: 15,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 46,
    Name: 'Spegesild',
    SupplierID: 21,
    RuleID: 8,
    ModifyAt: '4 - 450 g glasses',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 47,
    Name: 'Zaanse koeken',
    SupplierID: 22,
    RuleID: 3,
    ModifyAt: '10 - 4 oz boxes',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 48,
    Name: 'Chocolade',
    SupplierID: 22,
    RuleID: 3,
    ModifyAt: '10 pkgs.',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 49,
    Name: 'Maxilaku',
    SupplierID: 23,
    RuleID: 3,
    ModifyAt: '24 - 50 g pkgs.',
    Notifications: 15,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 50,
    Name: 'Valkoinen suklaa',
    SupplierID: 23,
    RuleID: 3,
    ModifyAt: '12 - 100 g bars',
    Notifications: 30,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 51,
    Name: 'Manjimup Dried Apples',
    SupplierID: 24,
    RuleID: 7,
    ModifyAt: '50 - 300 g pkgs.',
    Notifications: 10,
    Active: false,
    Category: {
        RuleID: 7,
        CategoryName: 'Produce',
        Modify: 'Dried fruit and bean curd'
    }
}, {
    ProductID: 52,
    Name: 'Filo Mix',
    SupplierID: 24,
    RuleID: 5,
    ModifyAt: '16 - 2 kg boxes',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 5,
        CategoryName: 'Grains/Cereals',
        Modify: 'Breads, crackers, pasta, and cereal'
    }
}, {
    ProductID: 53,
    Name: 'Perth Pasties',
    SupplierID: 24,
    RuleID: 6,
    ModifyAt: '48 pieces',
    Notifications: 0,
    Active: true,
    Category: {
        RuleID: 6,
        CategoryName: 'Meat/Poultry',
        Modify: 'Prepared meats'
    }
}, {
    ProductID: 54,
    Name: 'Tourtière',
    SupplierID: 25,
    RuleID: 6,
    ModifyAt: '16 pies',
    Notifications: 10,
    Active: false,
    Category: {
        RuleID: 6,
        CategoryName: 'Meat/Poultry',
        Modify: 'Prepared meats'
    }
}, {
    ProductID: 55,
    Name: 'Pâté chinois',
    SupplierID: 25,
    RuleID: 6,
    ModifyAt: '24 boxes x 2 pies',
    Notifications: 20,
    Active: false,
    Category: {
        RuleID: 6,
        CategoryName: 'Meat/Poultry',
        Modify: 'Prepared meats'
    }
}, {
    ProductID: 56,
    Name: 'Gnocchi di nonna Alice',
    SupplierID: 26,
    RuleID: 5,
    ModifyAt: '24 - 250 g pkgs.',
    Notifications: 30,
    Active: false,
    Category: {
        RuleID: 5,
        CategoryName: 'Grains/Cereals',
        Modify: 'Breads, crackers, pasta, and cereal'
    }
}, {
    ProductID: 57,
    Name: 'Ravioli Angelo',
    SupplierID: 26,
    RuleID: 5,
    ModifyAt: '24 - 250 g pkgs.',
    Notifications: 20,
    Active: false,
    Category: {
        RuleID: 5,
        CategoryName: 'Grains/Cereals',
        Modify: 'Breads, crackers, pasta, and cereal'
    }
}, {
    ProductID: 58,
    Name: 'Escargots de Bourgogne',
    SupplierID: 27,
    RuleID: 8,
    ModifyAt: '24 pieces',
    Notifications: 20,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 59,
    Name: 'Raclette Courdavault',
    SupplierID: 28,
    RuleID: 4,
    ModifyAt: '5 kg pkg.',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 4,
        CategoryName: 'Dairy Products',
        Modify: 'Cheeses'
    }
}, {
    ProductID: 60,
    Name: 'Camembert Pierrot',
    SupplierID: 28,
    RuleID: 4,
    ModifyAt: '15 - 300 g rounds',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 4,
        CategoryName: 'Dairy Products',
        Modify: 'Cheeses'
    }
}, {
    ProductID: 61,
    Name: 'Sirop d\'érable',
    SupplierID: 29,
    RuleID: 2,
    ModifyAt: '24 - 500 ml bottles',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 62,
    Name: 'Tarte au sucre',
    SupplierID: 29,
    RuleID: 3,
    ModifyAt: '48 pies',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 63,
    Name: 'Vegie-spread',
    SupplierID: 7,
    RuleID: 2,
    ModifyAt: '15 - 625 g jars',
    Notifications: 5,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 64,
    Name: 'Wimmers gute Semmelknödel',
    SupplierID: 12,
    RuleID: 5,
    ModifyAt: '20 bags x 4 pieces',
    Notifications: 30,
    Active: false,
    Category: {
        RuleID: 5,
        CategoryName: 'Grains/Cereals',
        Modify: 'Breads, crackers, pasta, and cereal'
    }
}, {
    ProductID: 65,
    Name: 'Louisiana Fiery Hot Pepper Sauce',
    SupplierID: 2,
    RuleID: 2,
    ModifyAt: '32 - 8 oz bottles',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 66,
    Name: 'Louisiana Hot Spiced Okra',
    SupplierID: 2,
    RuleID: 2,
    ModifyAt: '24 - 8 oz jars',
    Notifications: 20,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}, {
    ProductID: 67,
    Name: 'Laughing Lumberjack Lager',
    SupplierID: 16,
    RuleID: 1,
    ModifyAt: '24 - 12 oz bottles',
    Notifications: 10,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 68,
    Name: 'Scottish Longbreads',
    SupplierID: 8,
    RuleID: 3,
    ModifyAt: '10 boxes x 8 pieces',
    Notifications: 15,
    Active: false,
    Category: {
        RuleID: 3,
        CategoryName: 'Confections',
        Modify: 'Desserts, candies, and sweet breads'
    }
}, {
    ProductID: 69,
    Name: 'Gudbrandsdalsost',
    SupplierID: 15,
    RuleID: 4,
    ModifyAt: '10 kg pkg.',
    Notifications: 15,
    Active: false,
    Category: {
        RuleID: 4,
        CategoryName: 'Dairy Products',
        Modify: 'Cheeses'
    }
}, {
    ProductID: 70,
    Name: 'Outback Lager',
    SupplierID: 7,
    RuleID: 1,
    ModifyAt: '24 - 355 ml bottles',
    Notifications: 30,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 71,
    Name: 'Flotemysost',
    SupplierID: 15,
    RuleID: 4,
    ModifyAt: '10 - 500 g pkgs.',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 4,
        CategoryName: 'Dairy Products',
        Modify: 'Cheeses'
    }
}, {
    ProductID: 72,
    Name: 'Mozzarella di Giovanni',
    SupplierID: 14,
    RuleID: 4,
    ModifyAt: '24 - 200 g pkgs.',
    Notifications: 0,
    Active: false,
    Category: {
        RuleID: 4,
        CategoryName: 'Dairy Products',
        Modify: 'Cheeses'
    }
}, {
    ProductID: 73,
    Name: 'Röd Kaviar',
    SupplierID: 17,
    RuleID: 8,
    ModifyAt: '24 - 150 g jars',
    Notifications: 5,
    Active: false,
    Category: {
        RuleID: 8,
        CategoryName: 'Seafood',
        Modify: 'Seaweed and fish'
    }
}, {
    ProductID: 74,
    Name: 'Longlife Tofu',
    SupplierID: 4,
    RuleID: 7,
    ModifyAt: '5 kg pkg.',
    Notifications: 5,
    Active: false,
    Category: {
        RuleID: 7,
        CategoryName: 'Produce',
        Modify: 'Dried fruit and bean curd'
    }
}, {
    ProductID: 75,
    Name: 'Rhönbräu Klosterbier',
    SupplierID: 12,
    RuleID: 1,
    ModifyAt: '24 - 0.5 l bottles',
    Notifications: 25,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 76,
    Name: 'Lakkalikööri',
    SupplierID: 23,
    RuleID: 1,
    ModifyAt: '500 ml',
    Notifications: 20,
    Active: false,
    Category: {
        RuleID: 1,
        CategoryName: 'Beverages',
        Modify: 'Soft drinks, coffees, teas, beers, and ales'
    }
}, {
    ProductID: 77,
    Name: 'Original Frankfurter grüne Soße',
    SupplierID: 12,
    RuleID: 2,
    ModifyAt: '12 boxes',
    Notifications: 15,
    Active: false,
    Category: {
        RuleID: 2,
        CategoryName: 'Condiments',
        Modify: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
}];
