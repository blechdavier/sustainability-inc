type ResearchEntry = {
    initialParagraph: string;
    quantity: string;
    emissions: string;
    otherConcerns: string;
    sources: string[];
}

/*

- corn
- walnuts
- steak
- sushi
- sweater
- gaming console
- iphone
- gas car
- electric car
- sports car
- house
- private jet

*/

export const RESEARCH: ResearchEntry[] = [
    {
        initialParagraph: "Corn is a staple food in many parts of the world. It is a cereal grain that is grown in many countries. It is a major food crop in the United States, Mexico, and Canada. It is also a major feed crop for livestock.",
        quantity: "1 8-inch ear per purchase",
        emissions: "Sweet corn has an emissions rate of 0.45 kg CO₂e per kg. Since each cob has a mass of 370g, this means that each cob has an emissions rate of 0.166 kg CO₂e.",
        otherConcerns: "Corn's other concerns are lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nisl ni",
        sources: ["https://apps.carboncloud.com/climatehub/agricultural-reports/benchmarks/4b61b2ed-7251-4baa-b535-c2deef0828aa"]
    },
    {
        initialParagraph: "Walnuts are a type of tree nut commonly used in cooking and snacking. They are a good source of healthy fats, protein, and various vitamins and minerals.",
        quantity: "1 8oz bag per purchase",
        emissions: "Walnuts have an emissions rate of 0.43 kg CO₂e per kg. Each bag has 8oz of walnuts, which is 0.227 kg. This means that each bag of walnuts has an emissions rate of 0.098 kg CO₂e.",
        otherConcerns: "Walnuts are a high calorie food, so some people may not find them suitable for their particular diet. They are also high in fat, so they may not be suitable for people who are trying to lose weight.",
        sources: ["https://ourworldindata.org/environmental-impacts-of-food"]
    },
    {
        initialParagraph: "Steak is a type of meat from cows. It is a popular food in many countries, and is often served at restaurants and special events.",
        quantity: "1 8oz steak per purchase",
        emissions: "Steak from a beef herd has a very high emissions rate of 99.48kg CO₂e per kg. Each steak is 8oz, which is 0.227 kg. This means that each steak has an emissions rate of 22.5 kg CO₂e.",
        otherConcerns: "One concern about steak is that it can cause heart disease. This is because it is high in saturated fat, which can increase the risk of heart disease.",
        sources: ["https://ourworldindata.org/environmental-impacts-of-food"]
    },
    {
        initialParagraph: "Sushi is a Japanese dish that consists of cooked rice and raw fish. It is often served with vegetables and other ingredients.",
        quantity: "1-person portion per purchase",
        emissions: "Sushi has an emissions rate of 1.36kg CO₂e per serving. This can depend on the type of fish used, if it's been shipped on a plane, and other factors.",
        otherConcerns: "Fishing can be harmful to the environment. This is because it can cause overfishing, which can lead to the extinction of certain species.",
        sources: ["https://foodfootprint.nl/en/foodprintfinder/sushi/"]
    },
    {
        initialParagraph: "A sweater is a piece of clothing that is worn on the upper body. It can be made of wool, cotton, or other materials.",
        quantity: "1 sweater per purchase",
        emissions: "On average, a sweater has an emissions rate of 52.5kg CO₂e per kg over its lifetime. This can depend on the type of material used, and other factors.",
        otherConcerns: "Buying sweaters second-hand can help reduce the environmental impact of clothing. Buying second-hand clothing can also save you money, and it's pretty fun!",
        sources: ["https://core.ac.uk/download/pdf/232978686.pdf"]
    },
    {
        initialParagraph: "A gaming console is a device that is used to play video games. It can be connected to a TV, and can be used to play games with other people.",
        quantity: "1 gaming console per purchase",
        emissions: "A PS4 is estimated to have emitted 89kg CO₂e just from manufacturing. A console draws about 200W of power, and over the lifetime of the console, it will emit 0.2kg CO₂e per hour for an additional 292kg CO₂e, bringing the total to 381kg CO₂e.",
        otherConcerns: "Gaming consoles can be harmful to the environment. This is because they are made from materials that are difficult to recycle, and they use a lot of energy.",
        sources: ["https://news.mongabay.com/2022/10/playing-dangerously-the-environmental-impact-of-video-gaming-consoles/"]
    },
    {
        initialParagraph: "An iPhone is a smartphone that is made by Apple. It is a popular device that is used for many different things, including taking photos, playing games, and making phone calls.",
        quantity: "1 iPhone per purchase",
        emissions: "An iPhone 13 Pro emits 69kg CO₂e from manufacturing. It draws about 10W of power, and over the lifetime of the phone, it will emit 0.01kg CO₂e per hour for an additional 29.2kg CO₂e, bringing the total to 98.2kg CO₂e.",
        otherConcerns: "Smartphones can be harmful to the environment. This is because they are made from materials that are difficult to recycle, and they use a lot of energy.",
        sources: ["https://8billiontrees.com/carbon-offsets-credits/carbon-footprint-of-iphone/"]
    },
    {
        initialParagraph: "Gas-powered cars are vehicles that are powered by gasoline. They are a popular type of car that is used for many different things, including commuting to work and going on long road trips.",
        quantity: "1 gas-powered car per purchase",
        emissions: "A typical passenger vehicle emits about 4.6 metric tons of CO₂ per year. Assuming it lasts 10 years, that's 46 metric tons of CO₂ per car, in addition to the emissions from manufacturing, which can be about 10 metric tons before the car even hits the road. That's a total of 56 metric tons of CO₂ per car.",
        otherConcerns: "Car-centric cities are less efficient than cities that are designed around public transportation. Moving away from cars can help make it easier for people to get around.",
        sources: [
            "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
            "https://www.hotcars.com/the-truth-about-the-carbon-footprint-of-a-new-car-that-no-ones-talking-about/"
        ]
    },
    {
        initialParagraph: "An electric car is a vehicle that is powered by electricity. They are a popular type of car that is used for many different things, including commuting to work and going on long road trips.",
        quantity: "1 electric car per purchase",
        emissions: "Across the nation, the average emissions per year for an all-electric vehicle is about 992kg CO₂e. This is about 1/5th of the emissions of a gas-powered car. Manufacturing the battery for an electric car can emit about 10 metric tons of CO₂, which is the largest source of emissions for an electric car.",
        otherConcerns: "Lithium mining for electric car batteries can be harmful to the environment and to people. Laborers are paid low wages and work in dangerous conditions.",
        sources: [
            "https://afdc.energy.gov/vehicles/electric_emissions.html",
            "https://climate.mit.edu/ask-mit/are-electric-vehicles-definitely-better-climate-gas-powered-cars"
        ]
    },
    {
        initialParagraph: "A sports car is a type of gas-powered vehicle designed for speed. They're popular for racing and for driving on the road.",
        quantity: "1 sports car per purchase",
        emissions: "The fuel economy of a sports car is about the same as a regular car. This means that they have the same emissions as a regular car.",
        otherConcerns: "Cars in general can be harmful to the environment. This is because they are made from materials that are difficult to recycle, and they use a lot of energy.",
        sources: ["https://www.iseecars.com/best-mpg/best-gas-mileage-sports-cars"]
    },
    {
        initialParagraph: "A house is often a person's largest purchase. It is a place where people live.",
        quantity: "1 average house per purchase",
        emissions: "Construction of a house can emit about 50 metric tons of CO₂. Heating and cooling a house in addition to heating water can use about 5.5 metric tons of CO₂ per year. Over 40 years, that's about 220 metric tons of CO₂, for a total of 270 metric tons of CO₂.",
        otherConcerns: "Disparities in housing can cause people to live in unhealthy conditions. This can lead to health problems, and can also cause people to spend more money on healthcare.",
        sources: ["https://www.ccfpd.org/Portals/0/Assets/PDF/Facts_Chart.pdf"]
    },
    {
        initialParagraph: "A private jet is a type of plane that is used for private travel. It is often used by celebrities and other wealthy people.",
        quantity: "One year of private jet travel per purchase",
        emissions: "A private jet can emit about 2 metric tons of CO₂ per hour. Elon Musk spent 351.48 hours in a private jet in 2022, which is 703 metric tons of CO₂.",
        otherConcerns: "Private jets are wasteful and can be harmful to the environment. Some people use private jets to travel short distances, which is unnecessary. Elon's shortest flight in 2022 was 6 minutes long.",
        sources: [
            "https://www.theguardian.com/environment/2023/jan/26/flying-shame-the-scandalous-rise-of-private-jets",
            "https://grndcntrl.net/falconlanding/wrapped22/"
        ]
    },
]