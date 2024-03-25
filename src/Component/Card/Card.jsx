import Price from "./Price";


const Card = () => {

    const options = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities during off-peak hours",
                "Use of cardio equipment",
                "Access to locker rooms and showers",
                
                
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "24/7 access to gym facilities",
                "Full access to all equipment and classes",
                "Personal training session every month",
                "State-of-the-art fitness equipment",
                "Personal training services for tailored fitness plans and guidance"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "24/7 access to gym facilities",
                "Full access to all equipment, classes, and amenities",
                "Unlimited personal training sessions",
                "Nutritional counseling sessions",
                "Dedicated cardio area with treadmills, ellipticals, and bikes",
                "Variety of strength training machines and free weights",
                "Spacious workout floors for functional training and stretching",
                "Group exercise classes including yoga, Pilates, and spinning",
                "Luxurious amenities such as sauna, steam room, and showers"
                
            ]
        }
    ]



    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-6 mt-10 ">
            {
                options.map(price => <Price
                    priceob={price}
                    key={price.id}>

                </Price>)
            }

        </div>
    );
};

export default Card;