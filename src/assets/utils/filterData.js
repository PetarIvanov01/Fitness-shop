
const filters = [
    [
        "category", {
            title: 'Category',
            options: [
                {
                    value: 'All Categories'
                },
                {
                    value: 'Machines'
                },
                {
                    value: 'Weights'
                },
                {
                    value: 'Cardio'
                }
            ]
        }
    ],
    [
        "rating", {
            title: 'Rating',
            options: [
                {
                    value: 'All Ratings'
                },
                {
                    value: '5'
                }
            ]
        }
    ],
    [
        "brand", {
            title: 'Brand',
            options: [
                {
                    value: 'All Brands'
                },
                {
                    value: 'Brand1'
                }
            ]
        }
    ]
]

export default filters;