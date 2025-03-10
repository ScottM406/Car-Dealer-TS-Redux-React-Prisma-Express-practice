const makes = [
  {
    name: "Acura",
    description: "Acura, the luxury vehicle division of Honda Motor Co., Ltd., was launched in 1986. Known for its precision-crafted performance and innovative technology, Acura offers a range of luxurious and high-performance vehicles that blend comfort and style with advanced engineering.",
    models: [
      { name: "TLX" },
      { name: "MDX" },
      { name: "RDX" },
      { name: "ILX" },
      { name: "RLX" },
      { name: "NSX" },
      { name: "Integra" },
      { name: "Legend" },
      { name: "Vigor" },
      { name: "RSX" },
      { name: "TSX" },
      { name: "ZDX" },
      { name: "CL" },
      { name: "SLX" },
      { name: "CSX" },
      { name: "EL" },
      { name: "TL" },
      { name: "RL" },
    ]
  },
  {
    name: "Audi",
    description: "Audi AG, a subsidiary of the Volkswagen Group, was founded in 1909. Known for its luxurious and high-performance vehicles, Audi combines advanced technology, innovative design, and exceptional craftsmanship to offer a range of cars that deliver a premium driving experience.",
    models: [
      { name: "A3" },
      { name: "A4" },
      { name: "A5" },
      { name: "A6" },
      { name: "A7" },
      { name: "A8" },
      { name: "Q2" },
      { name: "Q3" },
      { name: "Q5" },
      { name: "Q7" },
      { name: "Q8" },
      { name: "TT" },
      { name: "R8" },
      { name: "e-tron" },
      { name: "RS3" },
      { name: "RS4" },
      { name: "RS5" },
      { name: "RS6" },
      { name: "RS7" },
      { name: "RS Q8" },
      { name: "S3" },
      { name: "S4" },
      { name: "S5" },
      { name: "S6" },
      { name: "S7" },
      { name: "S8" },
      { name: "SQ5" },
      { name: "SQ7" },
      { name: "SQ8" },
      { name: "Allroad" },
      { name: "Cabriolet" },
      { name: "Coupe" },
      { name: "Quattro" },
      { name: "100" },
      { name: "200" },
      { name: "80" },
      { name: "90" }
    ]
  },    
  {
    name: "Chevrolet",
    description: "Chevrolet, commonly referred to as Chevy, is an iconic American automobile brand known for its reliable trucks, performance-oriented sports cars, and versatile SUVs. With a legacy dating back to 1911, Chevy combines innovation with tradition in its diverse vehicle lineup.",
    models: [
      { name: "Silverado" },
      { name: "Corvette" },
      { name: "Camaro" },
      { name: "Malibu" },
      { name: "Impala" },
      { name: "Equinox" },
      { name: "Traverse" },
      { name: "Tahoe" },
      { name: "Suburban" },
      { name: "Trailblazer" },
      { name: "Colorado" },
      { name: "Blazer" },
      { name: "Trax" },
      { name: "Sonic (Chevy)" },
      { name: "Spark" },
      { name: "Bolt" },
      { name: "Cavalier" },
      { name: "Astro" },
      { name: "Beretta" },
      { name: "Caprice" },
      { name: "Lumina" },
      { name: "Monte Carlo" },
      { name: "Nova" },
      { name: "Chevelle" },
      { name: "SS" },
      { name: "Venture" },
      { name: "Avalanche" },
      { name: "Express" },
      { name: "HHR" },
      { name: "LUV" },
      { name: "Rodeo" },
      { name: "S-10" },
      { name: "SSR" },
      { name: "Tavera" },
      { name: "Uplander" },
      { name: "Aveo" },
      { name: "Orlando" },
      { name: "Zafira" },
      { name: "Volt" },
      { name: "Cobalt" },
      { name: "Tracker" },
      { name: "El Camino" },
      { name: "2500" },
      { name: "3500" }
    ]
  },
  {
    name: "Chrysler",
    description: "Chrysler, founded in 1925 by Walter Chrysler, has a rich history of innovation and luxury in the automotive industry. Known for its stylish designs and advanced technology, Chrysler continues to offer a blend of comfort, performance, and sophistication with a range of cars and minivans.",
    models: [
      { name: "300" },
      { name: "Pacifica" },
      { name: "Voyager" },
      { name: "Crossfire" },
      { name: "PT Cruiser" },
      { name: "Sebring" },
      { name: "Town & Country" },
      { name: "Concorde" },
      { name: "LHS" },
      { name: "New Yorker" },
      { name: "Imperial" },
      { name: "LeBaron" },
      { name: "Cirrus" },
      { name: "Fifth Avenue" },
      { name: "Newport" },
      { name: "Cordoba" },
      { name: "Laser" },
      { name: "TC by Maserati" },
      { name: "Saratoga" },
      { name: "Crown Imperial" },
      { name: "Windsor" },
      { name: "Airflow" },
      { name: "Royal" },
      { name: "Fury" },
      { name: "Valiant" },
      { name: "St. Regis" },
      { name: "Dakota (Chrystler)" }
    ]
  },   
  {
    name: "Dodge",
    description: "Dodge, a division of Stellantis, is renowned for its bold and powerful vehicles, especially its muscle cars and robust trucks. With a history of performance-driven engineering, Dodge offers a thrilling driving experience and distinctive, aggressive designs.",
    models: [
      { name: "Charger" },
      { name: "Challenger" },
      { name: "Durango" },
      { name: "Grand Caravan" },
      { name: "Journey" },
      { name: "Dart" },
      { name: "Avenger" },
      { name: "Magnum" },
      { name: "Neon" },
      { name: "Stratus" },
      { name: "Viper" },
      { name: "Nitro" },
      { name: "Dakota" },
      { name: "Ram 1500" },
      { name: "Ram 2500" },
      { name: "Ram 3500" },
      { name: "Caliber" },
      { name: "Intrepid" },
      { name: "Stealth" },
      { name: "Spirit" },
      { name: "Shadow" },
      { name: "Daytona" },
      { name: "Lancer (Dodge)" },
      { name: "Mirada" },
      { name: "Aspen" },
      { name: "Monaco" },
      { name: "Diplomat" },
      { name: "Omni" },
      { name: "Polara" },
      { name: "Colt" },
      { name: "Aries" },
      { name: "Demon" },
      { name: "Super Bee" },
      { name: "Coronet" },
      { name: "Custom 880" },
      { name: "Meadowbrook" },
      { name: "Rampage" },
      { name: "Swinger" },
      { name: "Warlock" },
      { name: "Wayfarer" }
    ]  
  },
  {
    name: "Ford",
    description: "Ford Motor Company, founded by Henry Ford in 1903, is a pioneer in the automotive industry, famous for its durable trucks, versatile SUVs, and the legendary Mustang. Ford continues to lead with advancements in automotive technology and a strong commitment to performance and reliability.",
    models: [
      { name: "F-150" },
      { name: "Mustang" },
      { name: "Explorer" },
      { name: "Escape" },
      { name: "Bronco" },
      { name: "Edge" },
      { name: "Fusion" },
      { name: "Focus" },
      { name: "Taurus" },
      { name: "Ranger" },
      { name: "Expedition" },
      { name: "Maverick" },
      { name: "Fiesta" },
      { name: "EcoSport" },
      { name: "Transit" },
      { name: "Transit Connect" },
      { name: "Excursion" },
      { name: "Freestyle" },
      { name: "Flex" },
      { name: "Crown Victoria" },
      { name: "Thunderbird" },
      { name: "Continentnal" },
      { name: "LTD" },
      { name: "Galaxie" },
      { name: "Fairlane" },
      { name: "Falcon" },
      { name: "Granada" },
      { name: "Pinto" },
      { name: "Tempo" },
      { name: "Windstar" },
      { name: "Aerostar" },
      { name: "C-Max" },
      { name: "Ka" },
      { name: "Focus RS" },
      { name: "Sierra" },
      { name: "F-250" },
      { name: "F-350" },
      { name: "Cortina" },
      { name: "Escort" },
      { name: "Cobra" },
      { name: "GT" },
      { name: "Probe" },
      { name: "Taurus SHO" },
      { name: "Lightning" }
    ]  
  },
  {
    name: "Genesis",
    description: "Genesis Motors, the luxury vehicle division of Hyundai Motor Company, was founded in 2015. Known for its blend of refined design, cutting-edge technology, and exceptional performance, Genesis offers a range of luxury sedans and SUVs that deliver a premium driving experience.",
    models: [
      { name: "G70" },
      { name: "G80" },
      { name: "G90" },
      { name: "GV70" },
      { name: "GV80" },
      { name: "GV60" },
      { name: "Essentia" },
      { name: "Mint" }
    ]
  },  
  {
    name: "Honda",
    description: "Honda Motor Co., Ltd., founded in 1948 by Soichiro Honda and Takeo Fujisawa, is known for its innovative and reliable vehicles. With a focus on engineering excellence and sustainability, Honda offers a wide range of cars, motorcycles, and power equipment that have won the hearts of millions worldwide.",
    models: [
      { name: "Accord" },
      { name: "Civic" },
      { name: "CR-V" },
      { name: "Pilot" },
      { name: "Odyssey" },
      { name: "Fit" },
      { name: "HR-V" },
      { name: "Ridgeline" },
      { name: "Insight" },
      { name: "Passport" },
      { name: "Element" },
      { name: "Prelude" },
      { name: "S2000" },
      { name: "Crosstour" },
      { name: "CR-Z" },
      { name: "Del Sol" },
      { name: "Integra (Honda)" },
      { name: "Beat" },
      { name: "Stream" },
      { name: "Acty" },
      { name: "NSX (Honda)" },
      { name: "Clarity" },
      { name: "Ballade" },
      { name: "Brio" },
      { name: "City" },
      { name: "Freed" },
      { name: "Jazz" },
      { name: "Logo" },
      { name: "Mobilio" },
      { name: "Shuttle" },
      { name: "Z" },
      { name: "Vamos" },
      { name: "Avancier" },
      { name: "Torneo" },
      { name: "Orthia" },
      { name: "CR-X" },
      { name: "Stepwgn" }
    ]
  },
  {
    name: "Jeep",
    description: "Jeep, a brand of American automobiles, has its roots dating back to 1941. Known for its rugged and versatile vehicles, Jeep has become synonymous with off-road adventures and durable performance. With iconic models like the Wrangler and Grand Cherokee, Jeep continues to embody freedom, adventure, and resilience.",
    models: [
      { name: "Wrangler" },
      { name: "Grand Cherokee" },
      { name: "Cherokee" },
      { name: "Renegade" },
      { name: "Compass" },
      { name: "Gladiator" },
      { name: "Patriot" },
      { name: "Liberty" },
      { name: "Commander" },
      { name: "Wagoneer" },
      { name: "Grand Wagoneer" },
      { name: "Comanche" },
      { name: "CJ" },
      { name: "J10" },
      { name: "J20" },
      { name: "Scrambler" },
      { name: "Truck" },
      { name: "FC" },
      { name: "DJ" },
      { name: "Tornado" },
      { name: "Hurricane" },
      { name: "Universal" },
      { name: "FJ" },
      { name: "Renegade II" },
      { name: "Liberté" },
      { name: "DJ-5" },
      { name: "Fleetvan" },
      { name: "Jeepster" }
    ]
  },
  {
    name: "Kia",
    description: "Kia Motors Corporation, founded in 1944, is South Korea's oldest car manufacturer. Known for its affordable and reliable vehicles, Kia has gained a reputation for combining stylish design with advanced technology. With a diverse lineup of cars and SUVs, Kia continues to deliver quality and value to customers worldwide.",
    models: [
      { name: "Sorento" },
      { name: "Sportage" },
      { name: "Telluride" },
      { name: "Soul" },
      { name: "Seltos" },
      { name: "Carnival" },
      { name: "Optima" },
      { name: "K5" },
      { name: "Stinger" },
      { name: "Rio" },
      { name: "Forte" },
      { name: "Sedona" },
      { name: "Cadenza" },
      { name: "Niro" },
      { name: "Sonic" },
      { name: "Amanti" },
      { name: "Sephia" },
      { name: "Spectra" },
      { name: "Borrego" },
      { name: "K900" },
      { name: "Rondo" },
      { name: "Picanto" },
      { name: "Venga" },
      { name: "Carens" },
      { name: "Shuma" },
      { name: "XCeed" },
      { name: "Stonic" },
      { name: "EV6" },
      { name: "Ray" },
      { name: "ProCeed" }
    ]
  },  
  {
    name: "Lexus",
    description: "Lexus, the luxury vehicle division of Toyota Motor Corporation, was launched in 1989. Known for its refinement, cutting-edge technology, and exceptional craftsmanship, Lexus offers a range of luxury cars and SUVs that deliver outstanding performance and comfort.",
    models: [
      { name: "ES" },
      { name: "LS" },
      { name: "RX" },
      { name: "NX" },
      { name: "GX" },
      { name: "LX" },
      { name: "IS" },
      { name: "RC" },
      { name: "GS" },
      { name: "UX" },
      { name: "CT" },
      { name: "LC" },
      { name: "HS" },
      { name: "SC" },
      { name: "LFA" },
      { name: "ES 300h" },
      { name: "RX 450h" },
      { name: "NX 300h" },
      { name: "LS 500h" },
      { name: "GS 450h" },
      { name: "RC F" },
      { name: "IS F" },
      { name: "GS F" },
      { name: "GS 300" },
      { name: "RX 300" },
      { name: "LX 470" },
      { name: "RX 350" },
      { name: "RX 330" },
      { name: "ES 330" },
      { name: "IS 300" },
      { name: "ES 250" }
    ]
  },  
  {
    name: "Mercedes-Benz",
    description: "Mercedes-Benz, a division of the German company Daimler AG, was founded in 1926. Renowned for its luxury vehicles, advanced technology, and engineering excellence, Mercedes-Benz offers a wide range of cars, trucks, and SUVs that embody sophistication, performance, and cutting-edge innovation.",
    models: [
      { name: "C-Class" },
      { name: "E-Class" },
      { name: "S-Class" },
      { name: "A-Class" },
      { name: "B-Class" },
      { name: "GLA" },
      { name: "GLB" },
      { name: "GLC" },
      { name: "GLE" },
      { name: "GLS" },
      { name: "G-Class" },
      { name: "CLA" },
      { name: "CLS" },
      { name: "SL" },
      { name: "SLC" },
      { name: "SLS AMG" },
      { name: "AMG GT" },
      { name: "EQC" },
      { name: "EQA" },
      { name: "EQB" },
      { name: "EQE" },
      { name: "EQS" },
      { name: "Sprinter" },
      { name: "V-Class" },
      { name: "Vito" },
      { name: "Actros" },
      { name: "X-Class" },
      { name: "Maybach" },
      { name: "190" },
      { name: "250" },
      { name: "280" },
      { name: "300 (Mercedes)" },
      { name: "500" },
      { name: "600" },
      { name: "220" },
      { name: "230" },
      { name: "240" },
      { name: "260" },
      { name: "350" },
      { name: "380" },
      { name: "450" },
      { name: "460" },
      { name: "560" }
    ]
  },  
  {
    name: "Mitsubishi",
    description: "Mitsubishi Motors Corporation, founded in 1970, is part of the Mitsubishi Group, one of Japan's largest industrial groups. Known for its innovation and rugged performance, Mitsubishi offers a range of vehicles, from compact cars to robust SUVs, that deliver reliability and advanced technology.",
    models: [
      { name: "Outlander" },
      { name: "Eclipse Cross" },
      { name: "Mirage" },
      { name: "Lancer" },
      { name: "Pajero" },
      { name: "Montero" },
      { name: "ASX" },
      { name: "Delica" },
      { name: "Galant" },
      { name: "Eclipse" },
      { name: "3000GT" },
      { name: "Diamante" },
      { name: "Endeavor" },
      { name: "Raider" },
      { name: "Starion" },
      { name: "Challenger (Mitsubishi)" },
      { name: "Grandis" },
      { name: "Colt (Mitsubishi)" },
      { name: "Outlander Sport" },
      { name: "i-MiEV" },
      { name: "RVR" },
      { name: "Space Star" },
      { name: "Lancer Evolution" },
      { name: "Sigma" },
      { name: "Tredia" },
      { name: "Cordia" },
      { name: "FTO" },
      { name: "GTO" },
      { name: "Minica" },
      { name: "Minicab" },
      { name: "Debonair" },
      { name: "Chariot" },
      { name: "Galan VR-4" },
      { name: "Jeep J3" }
    ]
  },
  {
    name: "Mercury",
    description: "Mercury, a division of the Ford Motor Company, was founded in 1938 to offer premium vehicles that bridged the gap between Ford's standard lineup and Lincoln's luxury models. Known for its stylish design and comfortable ride, Mercury produced a range of cars and SUVs that combined performance and sophistication until the brand was discontinued in 2010.",
    models: [
      { name: "Grand Marquis" },
      { name: "Milan" },
      { name: "Mariner" },
      { name: "Mountaineer" },
      { name: "Sable" },
      { name: "Mystique" },
      { name: "Cougar" },
      { name: "Monterey" },
      { name: "Villager" },
      { name: "Capri" },
      { name: "Marauder" },
      { name: "Tracer" },
      { name: "Topaz" },
      { name: "Lynx" },
      { name: "Zephyr" },
      { name: "Bobcat" },
      { name: "Monarch" },
      { name: "Comet" },
      { name: "Montego" },
      { name: "Cyclone" },
      { name: "Marquis" },
      { name: "Turnpike Cruiser" },
      { name: "Park Lane" },
      { name: "Breezeway" },
      { name: "Voyager (Mercury)" },
      { name: "Custom" },
      { name: "Medalist" }
    ]
  },        
  {
    name: "Nissan",
    description: "Nissan Motor Co., Ltd., founded in 1933, is a Japanese automaker known for its innovation, reliability, and advanced technology. With a diverse lineup of cars, trucks, and SUVs, Nissan continues to push the boundaries of automotive design and performance.",
    models: [
      { name: "Altima" },
      { name: "Maxima" },
      { name: "Sentra" },
      { name: "Versa" },
      { name: "Rogue" },
      { name: "Murano" },
      { name: "Pathfinder" },
      { name: "Armada" },
      { name: "Titan" },
      { name: "Frontier" },
      { name: "Leaf" },
      { name: "370Z" },
      { name: "GT-R" },
      { name: "Kicks" },
      { name: "Juke" },
      { name: "Xterra" },
      { name: "Cube" },
      { name: "Quest" },
      { name: "370Z Roadster" },
      { name: "200SX" },
      { name: "240SX" },
      { name: "300ZX" },
      { name: "Pulsar" },
      { name: "Stanza" },
      { name: "NX (Nissan)" },
      { name: "Murano CrossCabriolet" },
      { name: "NV200" },
      { name: "NV3500" },
      { name: "Prairie" },
      { name: "D21" },
      { name: "Figaro" },
      { name: "Bluebird" },
      { name: "Axxess" },
      { name: "Cedric" },
      { name: "Gloria" },
      { name: "Laurel" },
      { name: "Silvia" },
      { name: "Skyline" },
      { name: "Stagea" },
      { name: "Sunny" },
      { name: "Teana" },
      { name: "Terrano" }
    ]
  },
  {
    name: "Oldsmobile",
    description: "Oldsmobile, a division of General Motors, was founded in 1897 by Ransom E. Olds. Known for its innovative engineering and stylish design, Oldsmobile produced a range of cars that combined performance, comfort, and advanced technology. The brand was discontinued in 2004, but its legacy continues to be cherished by automotive enthusiasts.",
    models: [
      { name: "Alero" },
      { name: "Aurora" },
      { name: "Bravada" },
      { name: "Intrigue" },
      { name: "Silhouette" },
      { name: "Achieva" },
      { name: "Cutlass" },
      { name: "Cutlass Supreme" },
      { name: "Eighty-Eight" },
      { name: "Ninety-Eight" },
      { name: "Toronado" },
      { name: "Calais" },
      { name: "Ciera" },
      { name: "Firenza" },
      { name: "Omega" },
      { name: "Starfire" },
      { name: "Jetstar" },
      { name: "F-85" },
      { name: "Dynamic 88" },
      { name: "Jetfire" },
      { name: "Vista Cruiser" },
      { name: "Delmont 88" },
      { name: "Delta 88" },
      { name: "Custom Cruiser" },
      { name: "442" },
      { name: "LSS" },
      { name: "Cutlass Ciera" },
      { name: "Cutlass Calais" },
      { name: "Super 88" },
      { name: "Golden Rocket" },
      { name: "Brougham" },
      { name: "Futuramic" }
    ]
  },
  {
    name: "Saab",
    description: "Saab Automobile AB, originally an aircraft manufacturer, was founded in 1945. Known for its innovative design, turbocharging technology, and safety features, Saab produced a range of distinctive cars that blended performance, comfort, and Scandinavian style until the brand ceased operations in 2012.",
    models: [
      { name: "9-3" },
      { name: "9-5" },
      { name: "9-4X" },
      { name: "9-7X" },
      { name: "900" },
      { name: "9000" },
      { name: "99" },
      { name: "96" },
      { name: "95" },
      { name: "Sonett" },
      { name: "Aero" },
      { name: "Turbo X" },
      { name: "900 Turbo" },
      { name: "900 SPG" },
      { name: "9000 CD" },
      { name: "9000 Aero" },
      { name: "900 Convertible" },
      { name: "900 SE" },
      { name: "99 Turbo" },
      { name: "9-3 Convertible" },
      { name: "9-5 Aero" },
      { name: "9-3 SportCombi" },
      { name: "9-4X Aero" },
      { name: "9-7X Aero" },
      { name: "9-3X" }
    ]
  },  
  {
    name: "Toyota",
    description: "Toyota Motor Corporation, founded by Kiichiro Toyoda in 1937, is renowned for its reliable and fuel-efficient vehicles. With a broad range of cars, trucks, and SUVs, Toyota is a global leader in the automotive industry and a pioneer in hybrid technology.",
    models: [
      { name: "Camry" },
      { name: "Corolla" },
      { name: "Prius" },
      { name: "Highlander" },
      { name: "RAV4" },
      { name: "Tacoma" },
      { name: "Tundra" },
      { name: "4Runner" },
      { name: "Sienna" },
      { name: "Avalon" },
      { name: "Sequoia" },
      { name: "Supra" },
      { name: "Land Cruiser" },
      { name: "Yaris" },
      { name: "C-HR" },
      { name: "Venza" },
      { name: "Matrix" },
      { name: "Solara" },
      { name: "Celica" },
      { name: "FJ Cruiser" },
      { name: "Echo" },
      { name: "MR2" },
      { name: "Previa" },
      { name: "Corona" },
      { name: "Tercel" },
      { name: "Starlet" },
      { name: "Paseo" },
      { name: "Van" },
      { name: "Hilux" },
      { name: "Caldina" },
      { name: "Carina" },
      { name: "Mark II" },
      { name: "Crown" },
      { name: "Cressida" },
      { name: "Chaser" },
      { name: "Soarer" },
      { name: "Verossa" },
      { name: "FJ55" },
      { name: "Century" },
      { name: "Corona Mark II" },
      { name: "Blizzard" }
    ]
  },
  {
    name: "Volkswagen",
    description: "Volkswagen, a German automaker founded in 1937, is renowned for its reliable and innovative vehicles. Known for its iconic models like the Beetle and the Golf, Volkswagen offers a diverse range of cars that combine quality, performance, and advanced technology.",
    models: [
      { name: "Golf" },
      { name: "Passat" },
      { name: "Jetta" },
      { name: "Beetle" },
      { name: "Tiguan" },
      { name: "Atlas" },
      { name: "Arteon" },
      { name: "Touareg" },
      { name: "CC" },
      { name: "Eos" },
      { name: "Polo" },
      { name: "Scirocco" },
      { name: "Transporter" },
      { name: "Amarok" },
      { name: "Fox" },
      { name: "Phaeton" },
      { name: "Touran" },
      { name: "Sharan" },
      { name: "Up!" },
      { name: "ID.3" },
      { name: "ID.4" },
      { name: "ID.Buzz" },
      { name: "Corrado" },
      { name: "Routan" },
      { name: "Cabrio" },
      { name: "Karmann Ghia" },
      { name: "Thing" },
      { name: "Squareback" },
      { name: "Fastback" },
      { name: "Notchback" },
      { name: "Type 3" },
      { name: "Type 4" },
      { name: "Rabbit" },
      { name: "Vanagon" },
      { name: "Eurovan" },
      { name: "Lupo" },
      { name: "Santana" },
      { name: "Dasher" },
      { name: "Quantum" },
      { name: "Passat Wagon" }
    ]
  }  
];

//The function below finds duplicate models and logs them in the console.

const findDuplicateModelNames = (makes) => {
  const modelNames = new Map();
  const duplicates = new Set();

  makes.forEach(make => {
    make.models.forEach(model => {
      if (modelNames.has(model.name)) {
        duplicates.add(model.name);
      } else {
        modelNames.set(model.name, true);
      }
    });
  });

  return Array.from(duplicates);
};

const duplicateNames = findDuplicateModelNames(makes);
console.log(duplicateNames);


module.exports = makes;