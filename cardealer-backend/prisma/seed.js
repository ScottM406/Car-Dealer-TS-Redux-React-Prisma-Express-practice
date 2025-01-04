const prisma = require("../prisma")

const seed = async () => {

  const makes = [
    {
      name: "Chevy",
      description: "Chevrolet, commonly referred to as Chevy, is an iconic American automobile brand known for its reliable trucks, performance-oriented sports cars, and versatile SUVs. With a legacy dating back to 1911, Chevy combines innovation with tradition in its diverse vehicle lineup,",
      models: [
        { name: "Silverado", factoryIncentive: true },
        { name: "Corvette" },
        { name: "Camaro" }
      ]
    },
    {
      name: "Ford",
      description: "Ford Motor Company, founded by Henry Ford in 1903, is a pioneer in the automotive industry, famous for its durable trucks, versatile SUVs, and the legendary Mustang. Ford continues to lead with advancements in automotive technology and a strong commitment to performance and reliability.",
      models: [
        { name: "F-150" },
        { name: "Mustang" }
      ]
    },
    {
      name: "Dodge",
      description: "Dodge, a division of Stellantis, is renowned for its bold and powerful vehicles, especially its muscle cars and robust trucks. With a history of performance-driven engineering, Dodge offers a thrilling driving experience and distinctive, aggressive designs.",
      models: [
        { name: "RAM 1500"},
        { name: "Charger"},
        { name: "Challenger"}
      ]
    }
  ]

  for (const makeData of makes) {
    const { models, ...makeDetails } = makeData;
    await prisma.make.create({
      data: {
        ...makeDetails,
        models: {
          create:models.map((model) => ({
            ...model
          }))
        }
      }
    });
  }

const allModels = await prisma.model.findMany();

const testCars = [
  {
    headline: "Test ZR1 Corvette",
    description: "This is a test car for use in site development.",
    image: "https://www.motortrend.com/files/66aab54c164f580008b698e7/2025chevroletcorvetteblackconvert.jpg?w=768&width=768&q=75&format=webp",
    year: 2025,
    miles: 4,
    drivetrain: "RWD",
    engine: "6.2L V8",
    color: "Black",
    MPG_city: 16,
    MPG_highway: 25,
    modelId: allModels[7].id,
    features: [
      "ZR1 Package",
      "Advanced Infotainment System",
      "Wireless Smartphone Charging",
      "Heads-Up Display",
      "Premium Bose Sound System",
      "Surround-View Camera",
      "Smart Keyless Entry",
      "Customizable Ambient Lighting",
      "Heated and Ventilated Seats",
      "Leather Upholstery",
      "Carbon Fiber Interior Trim",
      "Memory Seat Settings",
      "Dual-Zone Climate Control",
      "Automatic Dimming Rearview Mirror",
      "Enhanced Navigation System",
      "Adaptive Cruise Control",
      "Remote Start",
      "Digital Instrument Cluster",
      "Rear Cross Traffic Alert",
      "Apple CarPlay and Android Auto",
      "Wi-Fi Hotspot",
      "Blind Spot Monitoring",
      "Advanced Parking Assist",
      "19-inch Alloy Wheels",
      "Premium Paint Options",
      "LED Headlights and Taillights",
      "Blackout Appearance Package"
    ],
    price: 194999 
  },
  {
    headline: "Test Challenger Hellcat",
    description: "This is a test car for use in site development.",
    image: "https://bringatrailer.com/wp-content/uploads/2023/02/2023_dodge_challenger-srt-hellcat-widebody-jailbreak-redeye-last-call_A-3-62209-scaled.jpg",
    year: 2023,
    miles: 12588,
    drivetrain: "RWD",
    engine: "Supercharged 6.2L V8",
    color: "Red",
    MPG_city: 13,
    MPG_highway: 22,
    modelId: allModels[2].id,
    features: [
      "SRT Hellcat Package",
      "Advanced Infotainment System",
      "Heads-Up Display",
      "Smart Keyless Entry",
      "Customizable Ambient Lighting",
      "Heated and Ventilated Seats",
      "Leather Upholstery",
      "Memory Seat Settings",
      "Dual-Zone Climate Control",
      "Automatic Dimming Rearview Mirror",
      "Enhanced Navigation System",
      "Adaptive Cruise Control",
      "Remote Start",
      "Digital Instrument Cluster",
      "Rear Cross Traffic Alert",
      "Apple CarPlay and Android Auto",
      "Wi-Fi Hotspot",
      "Blind Spot Monitoring",
      "Advanced Parking Assist",
      "LED Headlights and Taillights",
    ],
    price: 92999 
  }
]

  for (const carData of testCars) {
    await prisma.carsOnLot.create({
      data: carData
    });
  }

};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });