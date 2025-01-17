const products =[
  {
    id: 1,
    name: "Golden Pothos",
    category: "IndoorPlants",
    images: [
      "golden_pothos_1.jpg",
      "golden_pothos_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-001",
    description: [
      "A resilient indoor plant with vibrant green and yellow leaves.",
      "Perfect for beginners due to its easy-care nature.",
      "Thrives in low to bright indirect light and purifies the air."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "Solomon Islands",
    scientific_name: "Epipremnum aureum"
  },
  {
    id: 2,
    name: "Boston Fern",
    category: "Ferns",
    images: [
      "boston_fern_1.jpg",
      "boston_fern_2.jpg"
    ],
    price: 14.99,
    sku: "PP-PLT-002",
    description: [
      "A lush, green fern with arching fronds that add a tropical feel to any space.",
      "Prefers high humidity and indirect light.",
      "Known for its air-purifying qualities."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Keep soil moist",
    origin_country: "Tropical regions",
    scientific_name: "Nephrolepis exaltata"
  },
  {
    id: 3,
    name: "Zebra Haworthia",
    category: "Succulents",
    images: [
      "zebra_haworthia_1.jpg",
      "zebra_haworthia_2.jpg"
    ],
    price: 9.99,
    sku: "PP-PLT-003",
    description: [
      "A small succulent with striking white stripes across its dark green leaves.",
      "Ideal for sunny windowsills or office desks.",
      "Low maintenance, requiring minimal watering."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "South Africa",
    scientific_name: "Haworthiopsis attenuata"
  },
  {
    id: 4,
    name: "Rosemary",
    category: "Herbs",
    images: [
      "rosemary_plant_1.jpg",
      "rosemary_plant_2.jpg"
    ],
    price: 7.99,
    sku: "PP-HRB-004",
    description: [
      "A fragrant herb that is a staple in Mediterranean cuisine.",
      "Thrives in full sun and well-drained soil.",
      "Ideal for kitchen gardens and herb containers."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 10 days",
    origin_country: "Mediterranean",
    scientific_name: "Salvia rosmarinus"
  },
  {
    id: 5,
    name: "Lavender",
    category: "Herbs",
    images: [
      "lavender_plant_1.jpg",
      "lavender_plant_2.jpg"
    ],
    price: 8.99,
    sku: "PP-HRB-005",
    description: [
      "A beloved herb known for its calming fragrance and beautiful purple flowers.",
      "Requires full sun and well-drained soil.",
      "Commonly used in aromatherapy and as a natural insect repellent."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia"
  },
  {
    id: 6,
    name: "Snake Plant",
    category: "IndoorPlants",
    images: [
      "snake_plant_1.jpg",
      "snake_plant_2.jpg"
    ],
    price: 19.99,
    sku: "PP-PLT-006",
    description: [
      "A hardy indoor plant that thrives in low light and neglect.",
      "Known for its air-purifying qualities.",
      "Also known as 'Mother-in-Law's Tongue'."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "West Africa",
    scientific_name: "Sansevieria trifasciata"
  },
  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    images: [
      "aloe_vera_1.jpg",
      "aloe_vera_2.jpg"
    ],
    price: 9.99,
    sku: "PP-SUC-007",
    description: [
      "A succulent plant renowned for its soothing, medicinal gel.",
      "Requires minimal watering and prefers bright, indirect light.",
      "Perfect for indoor cultivation."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 3 weeks",
    origin_country: "Arabian Peninsula",
    scientific_name: "Aloe vera"
  },
  {
    id: 8,
    name: "Rose",
    category: "FloweringShrubs",
    images: [
      "rose_plant_1.jpg",
      "rose_plant_2.jpg"
    ],
    price: 15.99,
    sku: "PP-FLS-008",
    description: [
      "A classic flowering shrub known for its beautiful and fragrant blooms.",
      "Requires full sun and regular watering.",
      "Perfect for garden beds, borders, and containers."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 3-4 days",
    origin_country: "Asia",
    scientific_name: "Rosa"
  },
  {
    id: 9,
    name: "Spider Plant",
    category: "IndoorPlants",
    images: [
      "spider_plant_1.jpg",
      "spider_plant_2.jpg"
    ],
    price: 10.99,
    sku: "PP-PLT-009",
    description: [
      "An easy-care indoor plant with long, arching leaves that are green with white stripes.",
      "Perfect for hanging baskets and air purification.",
      "Thrives in indirect light and needs minimal attention."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "South Africa",
    scientific_name: "Chlorophytum comosum"
  },
  {
    id: 11,
    name: "Japanese Maple",
    category: "Trees",
    images: [
      "japanese_maple_1.jpg",
      "japanese_maple_2.jpg"
    ],
    price: 59.99,
    sku: "PP-TRE-011",
    description: [
      "A small, ornamental tree with finely textured leaves that change color with the seasons.",
      "Perfect for gardens and patios.",
      "Known for its vibrant fall colors."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Weekly",
    origin_country: "Japan",
    scientific_name: "Acer palmatum"
  },
  {
    id: 12,
    name: "Venus Flytrap",
    category: "CarnivorousPlants",
    images: [
      "venus_flytrap_1.jpg",
      "venus_flytrap_2.jpg"
    ],
    price: 14.99,
    sku: "PP-CRN-012",
    description: [
      "A fascinating carnivorous plant that captures and digests insects.",
      "Requires bright, direct light and high humidity.",
      "Grows best in a soil mixture of sphagnum moss and sand or perlite."
    ],
    light_requirements: "Bright, direct light",
    watering_cycle: "Keep soil moist",
    origin_country: "United States",
    scientific_name: "Dionaea muscipula"
  },
  {
    id: 13,
    name: "Dwarf Jade Bonsai",
    category: "Bonsai",
    images: [
      "dwarf_jade_bonsai_1.jpg",
      "dwarf_jade_bonsai_2.jpg"
    ],
    price: 45.99,
    sku: "PP-BNS-013",
    description: [
      "A miniature bonsai with thick, glossy leaves, known for its compact size and longevity.",
      "Thrives in bright light and should be placed near a sunny window or under grow lights.",
      "Symbolizes good fortune and is considered a traditional indoor bonsai plant."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2 weeks",
    origin_country: "South Africa",
    scientific_name: "Portulacaria afra"
  },
  {
    id: 14,
    name: "Monstera Deliciosa",
    category: "IndoorPlants",
    images: [
      "monstera_deliciosa_1.jpg",
      "monstera_deliciosa_2.jpg"
    ],
    price: 34.99,
    sku: "PP-PLT-014",
    description: [
      "Famous for its large, split leaves that create a bold statement in any room.",
      "Requires bright, indirect light to maintain its lush appearance.",
      "Likes to be watered every 10 days, with soil kept slightly moist but not soggy."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 10 days",
    origin_country: "Mexico",
    scientific_name: "Monstera deliciosa"
  },
  {
    id: 15,
    name: "Peace Lily",
    category: "IndoorPlants",
    images: [
      "peace_lily_1.jpg",
      "peace_lily_2.jpg"
    ],
    price: 24.99,
    sku: "PP-PLT-015",
    description: [
      "Elegant white blooms that stand out against dark green foliage.",
      "Thrives in low to medium light, making it ideal for indoor environments.",
      "Prefers to be kept consistently moist, but not waterlogged."
    ],
    light_requirements: "Low to medium light",
    watering_cycle: "Weekly",
    origin_country: "Central and South America",
    scientific_name: "Spathiphyllum"
  },
  {
    id: 16,
    name: "Fiddle Leaf Fig",
    category: "IndoorPlants",
    images: [
      "fiddle_leaf_fig_1.jpg",
      "fiddle_leaf_fig_2.jpg"
    ],
    price: 29.99,
    sku: "PP-PLT-016",
    description: [
      "Large, violin-shaped leaves that add a striking presence to any room.",
      "Prefers bright, indirect light to thrive and maintain its vibrant green color.",
      "Requires weekly watering, allowing the soil to dry out slightly between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly",
    origin_country: "West Africa",
    scientific_name: "Ficus lyrata"
  },
  {
    id: 17,
    name: "English Ivy",
    category: "Climbers",
    images: [
      "english_ivy_1.jpg",
      "english_ivy_2.jpg"
    ],
    price: 14.99,
    sku: "PP-CLM-017",
    description: [
      "A versatile plant that can climb, trail, or be used as ground cover.",
      "Prefers medium to bright light and adapts well to various indoor conditions.",
      "Known for its ability to purify air, particularly in reducing mold levels."
    ],
    light_requirements: "Medium to bright light",
    watering_cycle: "Weekly",
    origin_country: "Europe",
    scientific_name: "Hedera helix"
  },
  {
    id: 18,
    name: "Lavender 'Munstead'",
    category: "Herbs",
    images: [
      "lavender_munstead_1.jpg",
      "lavender_munstead_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-018",
    description: [
      "A compact variety of lavender known for its aromatic foliage and deep purple flowers.",
      "Thrives in full sun and well-drained soil, suitable for herb gardens, borders, and rock gardens.",
      "Requires minimal watering once established, about once every 7-10 days."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Munstead'"
  },
  {
    id: 19,
    name: "Air Plant (Tillandsia)",
    category: "AirPlants",
    images: [
      "air_plant_1.jpg",
      "air_plant_2.jpg"
    ],
    price: 7.99,
    sku: "PP-AIR-019",
    description: [
      "An easy-to-care-for plant that doesn't require soil, making it perfect for hanging displays or terrariums.",
      "Prefers bright, indirect light and should be misted with water two to three times a week.",
      "Absorbs nutrients through its leaves and is known for its unique, sculptural appearance."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Mist 2-3 times a week",
    origin_country: "Americas",
    scientific_name: "Tillandsia"
  },
  {
    id: 20,
    name: "Blue Fescue Grass",
    category: "OrnamentalGrasses",
    images: [
      "blue_fescue_grass_1.jpg",
      "blue_fescue_grass_2.jpg"
    ],
    price: 9.99,
    sku: "PP-ORN-020",
    description: [
      "A compact ornamental grass with striking blue-gray foliage.",
      "Thrives in full sun and is drought-tolerant once established, making it ideal for low-maintenance gardens.",
      "Perfect for borders, rock gardens, or as a groundcover to add texture and color."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 2 weeks",
    origin_country: "Europe",
    scientific_name: "Festuca glauca"
  },
  {
    id: 21,
    name: "Rosemary",
    category: "Herbs",
    images: [
      "rosemary_1.jpg",
      "rosemary_2.jpg"
    ],
    price: 7.99,
    sku: "PP-HRB-021",
    description: [
      "An aromatic herb that is a staple in Mediterranean cuisine.",
      "Thrives in full sun, making it ideal for outdoor herb gardens or sunny windowsills.",
      "Known for its needle-like leaves and woody stems, which are highly fragrant."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 10 days",
    origin_country: "Mediterranean",
    scientific_name: "Salvia rosmarinus"
  },
  {
    id: 22,
    name: "Succulent Potting Mix",
    category: "Soils",
    images: [
      "succulent_potting_mix_1.jpg"
    ],
    price: 9.99,
    sku: "PP-SOIL-022",
    description: [
      "A specially formulated potting mix for succulents and cacti.",
      "Promotes drainage and prevents root rot.",
      "Enriched with organic matter for healthy growth."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 23,
    name: "Orchid Bark Mix",
    category: "Soils",
    images: [
      "orchid_bark_mix_1.jpg"
    ],
    price: 14.99,
    sku: "PP-SOIL-023",
    description: [
      "A premium bark mix for orchids, providing excellent drainage and aeration.",
      "Suitable for a variety of orchid species.",
      "Helps promote healthy root growth and vibrant blooms."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 24,
    name: "Cactus Soil Mix",
    category: "Soils",
    images: [
      "cactus_soil_mix_1.jpg"
    ],
    price: 9.99,
    sku: "PP-SOIL-024",
    description: [
      "A fast-draining soil mix ideal for cacti and succulents.",
      "Enhances root health and prevents overwatering issues.",
      "Contains organic materials to support plant growth."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 25,
    name: "Organic Potting Soil",
    category: "Soils",
    images: [
      "organic_potting_soil_1.jpg"
    ],
    price: 12.99,
    sku: "PP-SOIL-025",
    description: [
      "A rich, organic potting soil blend perfect for all types of plants.",
      "Promotes healthy root development and strong plant growth.",
      "Ideal for container gardening and indoor plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 26,
    name: "Hanging Plant Hook",
    category: "GardeningTools",
    images: [
      "hanging_plant_hook_1.jpg"
    ],
    price: 4.99,
    sku: "PP-TOOL-026",
    description: [
      "A durable metal hook for hanging plants indoors or outdoors.",
      "Easy to install and supports a variety of hanging plant sizes.",
      "Ideal for balconies, patios, and indoor hanging displays."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 27,
    name: "Bamboo Stakes",
    category: "GardeningTools",
    images: [
      "bamboo_stakes_1.jpg"
    ],
    price: 7.99,
    sku: "PP-TOOL-027",
    description: [
      "Strong, eco-friendly bamboo stakes for supporting climbing plants and vegetables.",
      "Perfect for outdoor gardens and container plants.",
      "Available in various sizes to suit different plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Vietnam",
    scientific_name: "N/A"
  },
  {
    id: 28,
    name: "Pruning Shears",
    category: "GardeningTools",
    images: [
      "pruning_shears_1.jpg"
    ],
    price: 19.99,
    sku: "PP-TOOL-028",
    description: [
      "High-quality pruning shears with sharp, stainless steel blades.",
      "Ergonomic handle for comfortable use.",
      "Perfect for trimming and shaping plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Germany",
    scientific_name: "N/A"
  },
  {
    id: 29,
    name: "Watering Can",
    category: "GardeningTools",
    images: [
      "watering_can_1.jpg"
    ],
    price: 12.99,
    sku: "PP-TOOL-029",
    description: [
      "A stylish and functional watering can with a long spout for easy watering.",
      "Ideal for both indoor and outdoor plants.",
      "Made of durable, rust-resistant material."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "China",
    scientific_name: "N/A"
  },
  {
    id: 30,
    name: "Terracotta Pot",
    category: "GardeningTools",
    images: [
      "terracotta_pot_1.jpg"
    ],
    price: 5.99,
    sku: "PP-TOOL-030",
    description: [
      "A classic terracotta pot perfect for indoor and outdoor plants.",
      "Provides excellent air circulation and drainage.",
      "Available in various sizes to fit different plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Italy",
    scientific_name: "N/A"
  },
  {
    id: 31,
    name: "Blueberry Bush",
    category: "EdiblePlants",
    images: [
      "blueberry_bush_1.jpg",
      "blueberry_bush_2.jpg"
    ],
    price: 22.99,
    sku: "PP-EDB-031",
    description: [
      "A fruit-bearing shrub that produces sweet, nutritious blueberries in the summer.",
      "Thrives in full sun and acidic, well-drained soil.",
      "Perfect for garden beds and large containers."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 2-3 days",
    origin_country: "North America",
    scientific_name: "Vaccinium corymbosum"
  },
  {
    id: 32,
    name: "Peach Tree",
    category: "Trees",
    images: [
      "peach_tree_1.jpg",
      "peach_tree_2.jpg"
    ],
    price: 45.99,
    sku: "PP-TRE-032",
    description: [
      "A deciduous fruit tree known for its juicy, sweet peaches that are harvested in summer.",
      "Prefers full sun and well-drained soil.",
      "Loved for its spring blossoms and delicious fruit."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Weekly",
    origin_country: "China",
    scientific_name: "Prunus persica"
  },
  {
    id: 33,
    name: "Cherry Tomato",
    category: "EdiblePlants",
    images: [
      "cherry_tomato_1.jpg",
      "cherry_tomato_2.jpg"
    ],
    price: 5.99,
    sku: "PP-EDB-033",
    description: [
      "A small, sweet variety of tomato that produces clusters of bright red fruit.",
      "Thrives in full sun and well-drained soil.",
      "Ideal for salads, snacking, and fresh recipes."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 2-3 days",
    origin_country: "South America",
    scientific_name: "Solanum lycopersicum var. cerasiforme"
  },
  {
    id: 34,
    name: "Lavender 'Hidcote'",
    category: "Herbs",
    images: [
      "lavender_hidcote_1.jpg",
      "lavender_hidcote_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-034",
    description: [
      "A compact variety of lavender with deep purple flowers and aromatic foliage.",
      "Thrives in full sun and well-drained soil.",
      "Popular in herb gardens and for crafting scented sachets."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Hidcote'"
  },
  {
    id: 35,
    name: "Spiderwort",
    category: "FloweringPerennials",
    images: [
      "spiderwort_1.jpg",
      "spiderwort_2.jpg"
    ],
    price: 8.99,
    sku: "PP-FWP-035",
    description: [
      "A flowering perennial with unique blue-purple flowers and slender leaves.",
      "Thrives in full sun to partial shade and moist soil.",
      "Perfect for garden beds and borders."
    ],
    light_requirements: "Full sun to partial shade",
    watering_cycle: "Every 5-7 days",
    origin_country: "North America",
    scientific_name: "Tradescantia"
  },
  {
    id: 36,
    name: "Golden Barrel Cactus",
    category: "Cacti",
    images: [
      "golden_barrel_cactus_1.jpg",
      "golden_barrel_cactus_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CAC-036",
    description: [
      "A stunning spherical cactus with golden spines that make it a striking centerpiece.",
      "Prefers full sun and can be placed outdoors or near a sunny window.",
      "An excellent plant for beginners due to its low maintenance."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 4 weeks",
    origin_country: "Mexico",
    scientific_name: "Echinocactus grusonii"
  },
  {
    id: 37,
    name: "Dwarf Mondo Grass",
    category: "OrnamentalGrasses",
    images: [
      "dwarf_mondo_grass_1.jpg",
      "dwarf_mondo_grass_2.jpg"
    ],
    price: 8.99,
    sku: "PP-ORN-037",
    description: [
      "A small, clumping ornamental grass with dark green, grass-like foliage.",
      "Prefers partial shade and well-drained soil, suitable for groundcover and borders in shaded areas.",
      "Requires minimal watering, adapting well to low moisture conditions."
    ],
    light_requirements: "Partial shade",
    watering_cycle: "Every 5-7 days",
    origin_country: "Japan",
    scientific_name: "Ophiopogon japonicus"
  },
  {
    id: 38,
    name: "Jade Plant",
    category: "Succulents",
    images: [
      "jade_plant_1.jpg",
      "jade_plant_2.jpg"
    ],
    price: 12.99,
    sku: "PP-SUC-038",
    description: [
      "A popular succulent known for its thick, fleshy leaves and tree-like appearance.",
      "Prefers bright light, ideally placed on a windowsill or well-lit area.",
      "Should be watered sparingly, approximately once every 2-3 weeks, avoiding overwatering."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "South Africa",
    scientific_name: "Crassula ovata"
  },
  {
    id: 39,
    name: "Kalanchoe",
    category: "Succulents",
    images: [
      "kalanchoe_1.jpg",
      "kalanchoe_2.jpg"
    ],
    price: 12.99,
    sku: "PP-SUC-039",
    description: [
      "A succulent plant with fleshy, rounded leaves and clusters of small, colorful flowers.",
      "Prefers bright, indirect light and well-drained soil, making it perfect for indoor settings and sunny windowsills.",
      "Requires infrequent watering, allowing the soil to dry completely between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "Madagascar",
    scientific_name: "Kalanchoe blossfeldiana"
  },
  {
    id: 40,
    name: "Moth Orchid",
    category: "IndoorPlants",
    images: [
      "moth_orchid_1.jpg",
      "moth_orchid_2.jpg"
    ],
    price: 22.99,
    sku: "PP-PLT-040",
    description: [
      "A popular indoor orchid known for its large, colorful blooms and elegant appearance.",
      "Thrives in bright, indirect light and prefers a well-drained orchid mix.",
      "Requires regular watering, allowing the potting mix to dry slightly between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 7-10 days",
    origin_country: "Southeast Asia",
    scientific_name: "Phalaenopsis"
  },
  {
    id: 41,
    name: "Ponytail Palm",
    category: "Palms",
    images: [
      "ponytail_palm_1.jpg",
      "ponytail_palm_2.jpg"
    ],
    price: 19.99,
    sku: "PP-PLM-041",
    description: [
      "An ornamental palm with a distinctive bulbous trunk and long, thin leaves resembling a ponytail.",
      "Thrives in bright, indirect light and well-drained soil.",
      "Requires minimal watering, allowing the soil to dry completely between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "Mexico",
    scientific_name: "Beaucarnea recurvata"
  },
  {
    id: 42,
    name: "Golden Pothos",
    category: "IndoorPlants",
    images: [
      "golden_pothos_1.jpg",
      "golden_pothos_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-042",
    description: [
      "A resilient indoor plant with vibrant green and yellow leaves.",
      "Perfect for beginners due to its easy-care nature.",
      "Thrives in low to bright indirect light and purifies the air."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "Solomon Islands",
    scientific_name: "Epipremnum aureum"
  },
  {
    id: 43,
    name: "Rubber Plant",
    category: "IndoorPlants",
    images: [
      "rubber_plant_1.jpg",
      "rubber_plant_2.jpg"
    ],
    price: 24.99,
    sku: "PP-PLT-043",
    description: [
      "A popular indoor plant known for its glossy, dark green leaves and upright growth habit.",
      "Thrives in bright, indirect light and well-drained soil.",
      "Adds a touch of elegance and greenery to indoor spaces."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 7 days",
    origin_country: "Southeast Asia",
    scientific_name: "Ficus elastica"
  },
  {
    id: 44,
    name: "Bleeding Heart Vine",
    category: "Climbers",
    images: [
      "bleeding_heart_vine_1.jpg",
      "bleeding_heart_vine_2.jpg"
    ],
    price: 18.99,
    sku: "PP-CLM-044",
    description: [
      "A climbing vine with heart-shaped leaves and clusters of bright red, pendulous flowers.",
      "Prefers bright, indirect light and well-drained soil, making it ideal for trellises and garden walls.",
      "Requires regular watering to keep the soil moist, especially during the growing season."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "Tropical regions",
    scientific_name: "Clerodendrum thomsoniae"
  },
  {
    id: 45,
    name: "Lavender",
    category: "Herbs",
    images: [
      "lavender_plant_1.jpg",
      "lavender_plant_2.jpg"
    ],
    price: 8.99,
    sku: "PP-HRB-045",
    description: [
      "A beloved herb known for its calming fragrance and beautiful purple flowers.",
      "Requires full sun and well-drained soil.",
      "Commonly used in aromatherapy and as a natural insect repellent."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia"
  },
  {
    id: 46,
    name: "Golden Barrel Cactus",
    category: "Cacti",
    images: [
      "golden_barrel_cactus_1.jpg",
      "golden_barrel_cactus_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CAC-046",
    description: [
      "A stunning spherical cactus with golden spines that make it a striking centerpiece.",
      "Prefers full sun and can be placed outdoors or near a sunny window.",
      "An excellent plant for beginners due to its low maintenance."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 4 weeks",
    origin_country: "Mexico",
    scientific_name: "Echinocactus grusonii"
  },
  {
    id: 47,
    name: "Hosta",
    category: "Groundcovers",
    images: [
      "hosta_1.jpg",
      "hosta_2.jpg"
    ],
    price: 8.99,
    sku: "PP-GRO-047",
    description: [
      "A shade-loving perennial with large, textured leaves, available in a variety of colors and patterns.",
      "Thrives in partial to full shade, making it perfect for garden borders, under trees, and shaded pathways.",
      "Known for its hardiness and low-maintenance nature."
    ],
    light_requirements: "Partial to full shade",
    watering_cycle: "Every 5-7 days",
    origin_country: "Northeast Asia",
    scientific_name: "Hosta"
  },
  {
    id: 48,
    name: "Snowdrop",
    category: "Bulbs",
    images: [
      "snowdrop_1.jpg",
      "snowdrop_2.jpg"
    ],
    price: 7.99,
    sku: "PP-BLB-048",
    description: [
      "A delicate spring bulb known for its white, teardrop-shaped flowers that bloom early in the season.",
      "Prefers partial shade and well-drained soil, making it suitable for woodland gardens and shaded areas.",
      "Adds a touch of early color to gardens and is perfect for naturalizing under trees or shrubs."
    ],
    light_requirements: "Partial shade",
    watering_cycle: "Every 7-10 days",
    origin_country: "Europe and Asia",
    scientific_name: "Galanthus nivalis"
  },
  {
    id: 49,
    name: "Venus Flytrap",
    category: "CarnivorousPlants",
    images: [
      "venus_flytrap_1.jpg",
      "venus_flytrap_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CRN-049",
    description: [
      "A carnivorous plant known for its jaw-like leaves that trap insects for nutrients.",
      "Thrives in bright light and requires high humidity, making it ideal for terrariums and humid environments.",
      "Requires distilled or rainwater to maintain its health."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2-3 days (keep soil moist)",
    origin_country: "United States",
    scientific_name: "Dionaea muscipula"
  },
  {
    id: 50,
    name: "Organic Fertilizer",
    category: "Soils",
    images: [
      "organic_fertilizer_1.jpg"
    ],
    price: 19.99,
    sku: "PP-SOIL-050",
    description: [
      "A balanced, organic fertilizer that promotes healthy plant growth.",
      "Suitable for all types of plants, including vegetables, flowers, and herbs.",
      "Contains natural ingredients that improve soil fertility."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 51,
    name: "Creeping Thyme",
    category: "EdiblePlants",
    images: [
      "creeping_thyme_1.jpg",
      "creeping_thyme_2.jpg"
    ],
    price: 8.99,
    sku: "PP-HRB-051",
    description: [
      "A low-growing herb with aromatic foliage and small pink or purple flowers.",
      "Thrives in full sun and well-drained soil, making it suitable for herb gardens, groundcover, and between stepping stones.",
      "Used in culinary dishes and for groundcover in sunny garden areas."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Europe and Asia",
    scientific_name: "Thymus serpyllum"
  },
  {
    id: 52,
    name: "Lavender 'Munstead'",
    category: "Herbs",
    images: [
      "lavender_munstead_1.jpg",
      "lavender_munstead_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-052",
    description: [
      "A compact variety of lavender known for its aromatic foliage and deep purple flowers.",
      "Thrives in full sun and well-drained soil, suitable for herb gardens, borders, and rock gardens.",
      "Requires minimal watering once established, about once every 7-10 days."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Munstead'"
  },
  {
    id: 53,
    name: "Bleeding Heart",
    category: "FloweringPerennials",
    images: [
      "bleeding_heart_1.jpg",
      "bleeding_heart_2.jpg"
    ],
    price: 16.99,
    sku: "PP-FWP-053",
    description: [
      "A shade-loving perennial known for its heart-shaped, pink and white flowers that dangle from arching stems.",
      "Prefers partial to full shade and well-drained, moist soil, making it ideal for woodland gardens and shaded borders.",
      "Flowers in spring, providing a burst of color and charm to garden spaces."
    ],
    light_requirements: "Partial to full shade",
    watering_cycle: "Every 3-4 days",
    origin_country: "Asia",
    scientific_name: "Lamprocapnos spectabilis"
  },
  {
    id: 54,
    name: "Lavender 'Hidcote'",
    category: "Herbs",
    images: [
      "lavender_hidcote_1.jpg",
      "lavender_hidcote_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-054",
    description: [
      "A compact variety of lavender with deep purple flowers and aromatic foliage.",
      "Thrives in full sun and well-drained soil, making it ideal for herb gardens and borders.",
      "Popular in herb gardens and for crafting scented sachets."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Hidcote'"
  },
  {
    id: 55,
    name: "String of Pearls",
    category: "Succulents",
    images: [
      "string_of_pearls_1.jpg",
      "string_of_pearls_2.jpg"
    ],
    price: 17.99,
    sku: "PP-SUC-055",
    description: [
      "A unique succulent with long, trailing stems covered in bead-like, round leaves.",
      "Prefers bright, indirect light and well-drained soil, making it perfect for hanging baskets or shelves.",
      "Adds a distinct and elegant touch to indoor spaces with its cascading foliage."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "South Africa",
    scientific_name: "Senecio rowleyanus"
  },
  {
    id: 56,
    name: "Maidenhair Fern",
    category: "Ferns",
    images: [
      "maidenhair_fern_1.jpg",
      "maidenhair_fern_2.jpg"
    ],
    price: 17.99,
    sku: "PP-FRN-056",
    description: [
      "A delicate fern with soft, feathery fronds that add elegance to any space.",
      "Thrives in indirect light and high humidity, making it perfect for bathrooms or terrariums.",
      "Requires consistently moist soil, but not waterlogged."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Keep soil moist",
    origin_country: "Tropical regions",
    scientific_name: "Adiantum"
  },
  {
    id: 57,
    name: "Water Lily",
    category: "AquaticPlants",
    images: [
      "water_lily_1.jpg",
      "water_lily_2.jpg"
    ],
    price: 19.99,
    sku: "PP-AQT-057",
    description: [
      "A beautiful aquatic plant known for its stunning, fragrant flowers that float on water.",
      "Requires full sun and still water to bloom and thrive.",
      "Best planted in ponds, water gardens, or large containers with water up to 18 inches deep."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Constant immersion in water",
    origin_country: "Various tropical and temperate regions",
    scientific_name: "Nymphaea"
  },
  {
    id: 58,
    name: "Bleeding Heart Vine",
    category: "Climbers",
    images: [
      "bleeding_heart_vine_1.jpg",
      "bleeding_heart_vine_2.jpg"
    ],
    price: 18.99,
    sku: "PP-CLM-058",
    description: [
      "A climbing vine with heart-shaped leaves and clusters of bright red, pendulous flowers.",
      "Prefers bright, indirect light and well-drained soil, making it ideal for trellises and garden walls.",
      "Requires regular watering to keep the soil moist, especially during the growing season."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "Tropical regions",
    scientific_name: "Clerodendrum thomsoniae"
  },
  {
    id: 59,
    name: "Calla Lily",
    category: "FloweringPerennials",
    images: [
      "calla_lily_1.jpg",
      "calla_lily_2.jpg"
    ],
    price: 13.99,
    sku: "PP-FWP-059",
    description: [
      "A striking perennial with elegant, trumpet-shaped flowers that come in a variety of colors.",
      "Thrives in full sun to partial shade and should be kept in well-draining soil.",
      "Requires regular watering, particularly when grown in pots or during dry spells."
    ],
    light_requirements: "Full sun to partial shade",
    watering_cycle: "Weekly",
    origin_country: "Southern Africa",
    scientific_name: "Zantedeschia"
  },
  {
    id: 60,
    name: "Cherry Tomato",
    category: "EdiblePlants",
    images: [
      "cherry_tomato_1.jpg",
      "cherry_tomato_2.jpg"
    ],
    price: 5.99,
    sku: "PP-EDB-060",
    description: [
      "A small, sweet variety of tomato that produces clusters of bright red fruit.",
      "Thrives in full sun and well-drained soil, making it perfect for gardens and patio containers.",
      "Requires regular watering to keep the soil moist, especially during hot weather."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 2-3 days",
    origin_country: "South America",
    scientific_name: "Solanum lycopersicum var. cerasiforme"
  },
  {
    id: 61,
    name: "Blue Star Fern",
    category: "Ferns",
    images: [
      "blue_star_fern_1.jpg",
      "blue_star_fern_2.jpg"
    ],
    price: 19.99,
    sku: "PP-FRN-061",
    description: [
      "An attractive fern known for its distinctive blue-green foliage and unique growth habit.",
      "Thrives in low to bright indirect light and requires a well-drained, moisture-retentive soil.",
      "Adds a striking, exotic touch to indoor spaces with its eye-catching color and form."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "Tropical regions",
    scientific_name: "Phlebodium aureum"
  },
  {
    id: 62,
    name: "Japanese Blood Grass",
    category: "OrnamentalGrasses",
    images: [
      "japanese_blood_grass_1.jpg",
      "japanese_blood_grass_2.jpg"
    ],
    price: 10.99,
    sku: "PP-ORN-062",
    description: [
      "An ornamental grass with striking red-tipped blades that change color throughout the season.",
      "Thrives in full sun to partial shade, making it suitable for borders, containers, and garden beds.",
      "Adds a bold, dramatic effect to garden designs with its vibrant foliage and texture."
    ],
    light_requirements: "Full sun to partial shade",
    watering_cycle: "Every 4-5 days",
    origin_country: "Asia",
    scientific_name: "Imperata cylindrica"
  },
  {
    id: 63,
    name: "Sago Palm",
    category: "Palms",
    images: [
      "sago_palm_1.jpg",
      "sago_palm_2.jpg"
    ],
    price: 39.99,
    sku: "PP-PLM-063",
    description: [
      "An ornamental palm-like plant with a crown of glossy, feather-like leaves.",
      "Prefers bright, indirect light and well-drained soil, suitable for both indoor and outdoor use.",
      "Adds a tropical touch to gardens and indoor spaces with its distinctive foliage."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "Japan",
    scientific_name: "Cycas revoluta"
  },
  {
    id: 64,
    name: "Creeping Jenny",
    category: "Groundcovers",
    images: [
      "creeping_jenny_1.jpg",
      "creeping_jenny_2.jpg"
    ],
    price: 9.99,
    sku: "PP-GRO-064",
    description: [
      "A groundcover plant known for its vibrant green foliage that turns golden yellow in the fall.",
      "Prefers full sun to partial shade and well-drained soil, making it ideal for covering soil in garden beds and containers.",
      "Provides excellent erosion control and adds color and texture to garden landscapes."
    ],
    light_requirements: "Full sun to partial shade",
    watering_cycle: "Every 4-5 days",
    origin_country: "Europe",
    scientific_name: "Lysimachia nummularia"
  },
  {
    id: 65,
    name: "Bird of Paradise",
    category: "Tropicals",
    images: [
      "bird_of_paradise_1.jpg",
      "bird_of_paradise_2.jpg"
    ],
    price: 29.99,
    sku: "PP-TRO-065",
    description: [
      "A tropical plant known for its large, banana-like leaves and striking bird-shaped flowers.",
      "Prefers full sun and well-drained soil, making it ideal for bright indoor spaces or outdoor gardens in warm climates.",
      "Adds a dramatic and exotic touch to any setting with its unique appearance and vibrant blooms."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 5-7 days",
    origin_country: "South Africa",
    scientific_name: "Strelitzia reginae"
  },
  {
    id: 66,
    name: "Rubber Plant",
    category: "IndoorPlants",
    images: [
      "rubber_plant_1.jpg",
      "rubber_plant_2.jpg"
    ],
    price: 24.99,
    sku: "PP-PLT-066",
    description: [
      "A popular indoor plant known for its glossy, dark green leaves and upright growth habit.",
      "Thrives in bright, indirect light and well-drained soil.",
      "Adds a touch of elegance and greenery to indoor spaces."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 7 days",
    origin_country: "Southeast Asia",
    scientific_name: "Ficus elastica"
  },
  {
    id: 67,
    name: "Creeping Juniper",
    category: "Groundcovers",
    images: [
      "creeping_juniper_1.jpg",
      "creeping_juniper_2.jpg"
    ],
    price: 15.99,
    sku: "PP-GRO-067",
    description: [
      "A low-growing evergreen groundcover with needle-like foliage that provides year-round interest.",
      "Thrives in full sun and well-drained soil, making it ideal for erosion control and groundcover in garden beds.",
      "Offers excellent coverage with its dense, spreading growth and adds texture to landscape designs."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "North America",
    scientific_name: "Juniperus horizontalis"
  },
  {
    id: 68,
    name: "Wisteria",
    category: "Climbers",
    images: [
      "wisteria_1.jpg",
      "wisteria_2.jpg"
    ],
    price: 34.99,
    sku: "PP-CLM-068",
    description: [
      "A climbing plant known for its cascading clusters of fragrant, lavender-blue flowers.",
      "Prefers full sun and can be trained to grow on pergolas, walls, and trellises.",
      "Popular for creating shaded walkways and adding a romantic touch to gardens."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Weekly",
    origin_country: "East Asia",
    scientific_name: "Wisteria sinensis"
  },
  {
    id: 69,
    name: "Chinese Evergreen",
    category: "IndoorPlants",
    images: [
      "chinese_evergreen_1.jpg",
      "chinese_evergreen_2.jpg"
    ],
    price: 14.99,
    sku: "PP-PLT-069",
    description: [
      "An adaptable indoor plant with attractive, variegated leaves and a tolerance for low light.",
      "Prefers low to bright indirect light and well-drained soil.",
      "Adds lush greenery and decorative appeal to interior spaces with its vibrant foliage."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "Asia",
    scientific_name: "Aglaonema"
  },
  {
    id: 70,
    name: "Maranta Leuconeura (Prayer Plant)",
    category: "IndoorPlants",
    images: [
      "prayer_plant_1.jpg",
      "prayer_plant_2.jpg"
    ],
    price: 13.99,
    sku: "PP-PLT-070",
    description: [
      "An indoor plant known for its distinctive leaf patterns and the habit of folding its leaves at night.",
      "Thrives in low to bright indirect light, making it ideal for indoor spaces with limited sunlight.",
      "Requires regular watering to keep the soil consistently moist, with occasional misting to increase humidity."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 3-4 days",
    origin_country: "Brazil",
    scientific_name: "Maranta leuconeura"
  },
  {
    id: 71,
    name: "Lucky Bamboo",
    category: "IndoorPlants",
    images: [
      "lucky_bamboo_1.jpg",
      "lucky_bamboo_2.jpg"
    ],
    price: 9.99,
    sku: "PP-PLT-071",
    description: [
      "A popular indoor plant known for its easy care and auspicious symbolism.",
      "Grows in water or soil and thrives in low to bright indirect light.",
      "Considered a symbol of good luck and prosperity, often used in Feng Shui practices."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 7-10 days",
    origin_country: "Africa",
    scientific_name: "Dracaena sanderiana"
  },
  {
    id: 72,
    name: "Moth Orchid",
    category: "IndoorPlants",
    images: [
      "moth_orchid_1.jpg",
      "moth_orchid_2.jpg"
    ],
    price: 22.99,
    sku: "PP-PLT-072",
    description: [
      "A popular indoor orchid known for its large, colorful blooms and elegant appearance.",
      "Thrives in bright, indirect light and prefers a well-drained orchid mix.",
      "Requires regular watering, allowing the potting mix to dry slightly between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 7-10 days",
    origin_country: "Southeast Asia",
    scientific_name: "Phalaenopsis"
  },
  {
    id: 73,
    name: "African Violet",
    category: "IndoorPlants",
    images: [
      "african_violet_1.jpg",
      "african_violet_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-073",
    description: [
      "An indoor plant known for its vibrant flowers and fuzzy green leaves.",
      "Prefers bright, indirect light and a well-drained potting mix designed for African violets.",
      "Adds a splash of color and texture to indoor settings with its charming blooms."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "East Africa",
    scientific_name: "Saintpaulia"
  },
  {
    id: 74,
    name: "Snowdrop",
    category: "Bulbs",
    images: [
      "snowdrop_1.jpg",
      "snowdrop_2.jpg"
    ],
    price: 7.99,
    sku: "PP-BLB-074",
    description: [
      "A delicate spring bulb known for its white, teardrop-shaped flowers that bloom early in the season.",
      "Prefers partial shade and well-drained soil, making it suitable for woodland gardens and shaded areas.",
      "Adds a touch of early color to gardens and is perfect for naturalizing under trees or shrubs."
    ],
    light_requirements: "Partial shade",
    watering_cycle: "Every 7-10 days",
    origin_country: "Europe and Asia",
    scientific_name: "Galanthus nivalis"
  },
  {
    id: 75,
    name: "Hydrangea",
    category: "FloweringShrubs",
    images: [
      "hydrangea_1.jpg",
      "hydrangea_2.jpg"
    ],
    price: 29.99,
    sku: "PP-FLS-075",
    description: [
      "A beautiful flowering shrub known for its large clusters of blooms that change color based on soil pH.",
      "Prefers partial shade to full sun, with morning sun and afternoon shade being ideal.",
      "Requires regular watering, especially during dry periods, to keep the soil consistently moist."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Every 3-4 days",
    origin_country: "Asia",
    scientific_name: "Hydrangea macrophylla"
  },
  {
    id: 76,
    name: "Hosta",
    category: "Groundcovers",
    images: [
      "hosta_1.jpg",
      "hosta_2.jpg"
    ],
    price: 8.99,
    sku: "PP-GRO-076",
    description: [
      "A shade-loving perennial with large, textured leaves, available in a variety of colors and patterns.",
      "Thrives in partial to full shade, making it perfect for garden borders, under trees, and shaded pathways.",
      "Known for its hardiness and low-maintenance nature."
    ],
    light_requirements: "Partial to full shade",
    watering_cycle: "Every 5-7 days",
    origin_country: "Northeast Asia",
    scientific_name: "Hosta"
  },
  {
    id: 77,
    name: "Venus Flytrap",
    category: "CarnivorousPlants",
    images: [
      "venus_flytrap_1.jpg",
      "venus_flytrap_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CRN-077",
    description: [
      "A carnivorous plant known for its jaw-like leaves that trap insects for nutrients.",
      "Thrives in bright light and requires high humidity, making it ideal for terrariums and humid environments.",
      "Requires distilled or rainwater to maintain its health."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2-3 days (keep soil moist)",
    origin_country: "United States",
    scientific_name: "Dionaea muscipula"
  },
  {
    id: 78,
    name: "Golden Pothos",
    category: "IndoorPlants",
    images: [
      "golden_pothos_1.jpg",
      "golden_pothos_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-078",
    description: [
      "A resilient indoor plant with vibrant green and yellow leaves.",
      "Perfect for beginners due to its easy-care nature.",
      "Thrives in low to bright indirect light and purifies the air."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "Solomon Islands",
    scientific_name: "Epipremnum aureum"
  },
  {
    id: 79,
    name: "Peach Tree",
    category: "Trees",
    images: [
      "peach_tree_1.jpg",
      "peach_tree_2.jpg"
    ],
    price: 45.99,
    sku: "PP-TRE-079",
    description: [
      "A deciduous fruit tree known for its juicy, sweet peaches that are harvested in summer.",
      "Prefers full sun and well-drained soil.",
      "Loved for its spring blossoms and delicious fruit."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Weekly",
    origin_country: "China",
    scientific_name: "Prunus persica"
  },
  {
    id: 80,
    name: "Rose",
    category: "FloweringShrubs",
    images: [
      "rose_1.jpg",
      "rose_2.jpg"
    ],
    price: 15.99,
    sku: "PP-FLS-080",
    description: [
      "A classic flowering shrub known for its beautiful and fragrant blooms.",
      "Requires full sun and regular watering.",
      "Perfect for garden beds, borders, and containers."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 3-4 days",
    origin_country: "Asia",
    scientific_name: "Rosa"
  },
  {
    id: 81,
    name: "Japanese Maple",
    category: "Trees",
    images: [
      "japanese_maple_1.jpg",
      "japanese_maple_2.jpg"
    ],
    price: 59.99,
    sku: "PP-TRE-081",
    description: [
      "A small, ornamental tree with finely textured leaves that change color with the seasons.",
      "Perfect for gardens and patios.",
      "Known for its vibrant fall colors."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Weekly",
    origin_country: "Japan",
    scientific_name: "Acer palmatum"
  },
  {
    id: 82,
    name: "Jade Plant",
    category: "Succulents",
    images: [
      "jade_plant_1.jpg",
      "jade_plant_2.jpg"
    ],
    price: 12.99,
    sku: "PP-SUC-082",
    description: [
      "A popular succulent known for its thick, fleshy leaves and tree-like appearance.",
      "Prefers bright light, ideally placed on a windowsill or well-lit area.",
      "Should be watered sparingly, approximately once every 2-3 weeks, avoiding overwatering."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "South Africa",
    scientific_name: "Crassula ovata"
  },
  {
    id: 83,
    name: "Lavender",
    category: "Herbs",
    images: [
      "lavender_plant_1.jpg",
      "lavender_plant_2.jpg"
    ],
    price: 8.99,
    sku: "PP-HRB-083",
    description: [
      "A beloved herb known for its calming fragrance and beautiful purple flowers.",
      "Requires full sun and well-drained soil.",
      "Commonly used in aromatherapy and as a natural insect repellent."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia"
  },
  {
    id: 84,
    name: "Bougainvillea",
    category: "Climbers",
    images: [
      "bougainvillea_1.jpg",
      "bougainvillea_2.jpg"
    ],
    price: 19.99,
    sku: "PP-CLM-084",
    description: [
      "A vibrant climbing plant known for its colorful, paper-like bracts that surround tiny white flowers.",
      "Prefers full sun and can be trained to climb walls, trellises, and fences.",
      "Ideal for adding a splash of color to gardens, patios, and balconies."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 3-4 days",
    origin_country: "South America",
    scientific_name: "Bougainvillea spectabilis"
  },
  {
    id: 85,
    name: "Dwarf Jade Bonsai",
    category: "Bonsai",
    images: [
      "dwarf_jade_bonsai_1.jpg",
      "dwarf_jade_bonsai_2.jpg"
    ],
    price: 45.99,
    sku: "PP-BNS-085",
    description: [
      "A miniature bonsai with thick, glossy leaves, known for its compact size and longevity.",
      "Thrives in bright light and should be placed near a sunny window or under grow lights.",
      "Symbolizes good fortune and is considered a traditional indoor bonsai plant."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2 weeks",
    origin_country: "South Africa",
    scientific_name: "Portulacaria afra"
  },
  {
    id: 86,
    name: "Creeping Thyme",
    category: "EdiblePlants",
    images: [
      "creeping_thyme_1.jpg",
      "creeping_thyme_2.jpg"
    ],
    price: 8.99,
    sku: "PP-HRB-086",
    description: [
      "A low-growing herb with aromatic foliage and small pink or purple flowers.",
      "Thrives in full sun and well-drained soil, making it suitable for herb gardens, groundcover, and between stepping stones.",
      "Used in culinary dishes and for groundcover in sunny garden areas."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Europe and Asia",
    scientific_name: "Thymus serpyllum"
  },
  {
    id: 87,
    name: "Japanese Blood Grass",
    category: "OrnamentalGrasses",
    images: [
      "japanese_blood_grass_1.jpg",
      "japanese_blood_grass_2.jpg"
    ],
    price: 10.99,
    sku: "PP-ORN-087",
    description: [
      "An ornamental grass with striking red-tipped blades that change color throughout the season.",
      "Thrives in full sun to partial shade, making it suitable for borders, containers, and garden beds.",
      "Adds a bold, dramatic effect to garden designs with its vibrant foliage and texture."
    ],
    light_requirements: "Full sun to partial shade",
    watering_cycle: "Every 4-5 days",
    origin_country: "Asia",
    scientific_name: "Imperata cylindrica"
  },
  {
    id: 88,
    name: "Spider Plant",
    category: "IndoorPlants",
    images: [
      "spider_plant_1.jpg",
      "spider_plant_2.jpg"
    ],
    price: 10.99,
    sku: "PP-PLT-088",
    description: [
      "An easy-care indoor plant with long, arching leaves that are green with white stripes.",
      "Perfect for hanging baskets and air purification.",
      "Thrives in indirect light and needs minimal attention."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "South Africa",
    scientific_name: "Chlorophytum comosum"
  },
  {
    id: 89,
    name: "Water Lily",
    category: "AquaticPlants",
    images: [
      "water_lily_1.jpg",
      "water_lily_2.jpg"
    ],
    price: 19.99,
    sku: "PP-AQT-089",
    description: [
      "A beautiful aquatic plant known for its stunning, fragrant flowers that float on water.",
      "Requires full sun and still water to bloom and thrive.",
      "Best planted in ponds, water gardens, or large containers with water up to 18 inches deep."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Constant immersion in water",
    origin_country: "Various tropical and temperate regions",
    scientific_name: "Nymphaea"
  },
  {
    id: 90,
    name: "Golden Barrel Cactus",
    category: "Cacti",
    images: [
      "golden_barrel_cactus_1.jpg",
      "golden_barrel_cactus_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CAC-090",
    description: [
      "A stunning spherical cactus with golden spines that make it a striking centerpiece.",
      "Prefers full sun and can be placed outdoors or near a sunny window.",
      "An excellent plant for beginners due to its low maintenance."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 4 weeks",
    origin_country: "Mexico",
    scientific_name: "Echinocactus grusonii"
  },
  {
    id: 91,
    name: "Silver Queen",
    category: "IndoorPlants",
    images: [
      "silver_queen_1.jpg",
      "silver_queen_2.jpg"
    ],
    price: 15.99,
    sku: "PP-PLT-091",
    description: [
      "An indoor plant known for its striking silver-gray foliage with a unique texture.",
      "Thrives in low to bright indirect light, making it adaptable to various indoor conditions.",
      "Adds a touch of elegance and modernity to interior spaces with its distinctive color and form."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "Tropical regions",
    scientific_name: "Aechmea blanchetiana"
  },
  {
    id: 92,
    name: "Bird of Paradise",
    category: "Tropicals",
    images: [
      "bird_of_paradise_1.jpg",
      "bird_of_paradise_2.jpg"
    ],
    price: 29.99,
    sku: "PP-TRO-092",
    description: [
      "A tropical plant known for its large, banana-like leaves and striking bird-shaped flowers.",
      "Prefers full sun and well-drained soil, making it ideal for bright indoor spaces or outdoor gardens in warm climates.",
      "Adds a dramatic and exotic touch to any setting with its unique appearance and vibrant blooms."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 5-7 days",
    origin_country: "South Africa",
    scientific_name: "Strelitzia reginae"
  },
  {
    id: 93,
    name: "Tillandsia",
    category: "AirPlants",
    images: [
      "tillandsia_1.jpg",
      "tillandsia_2.jpg"
    ],
    price: 8.99,
    sku: "PP-AIR-093",
    description: [
      "A versatile air plant that absorbs moisture and nutrients through its leaves, requiring no soil to grow.",
      "Prefers bright, indirect light and regular misting to maintain humidity.",
      "Known for its adaptability and low maintenance, ideal for modern home decor and office settings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly misting and soaking",
    origin_country: "Central and South America",
    scientific_name: "Tillandsia"
  },
  {
    id: 94,
    name: "Fiddle Leaf Fig",
    category: "IndoorPlants",
    images: [
      "fiddle_leaf_fig_1.jpg",
      "fiddle_leaf_fig_2.jpg"
    ],
    price: 29.99,
    sku: "PP-PLT-094",
    description: [
      "Large, violin-shaped leaves that add a striking presence to any room.",
      "Prefers bright, indirect light to thrive and maintain its vibrant green color.",
      "Requires weekly watering, allowing the soil to dry out slightly between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly",
    origin_country: "West Africa",
    scientific_name: "Ficus lyrata"
  },
  {
    id: 95,
    name: "Orchid Bark Mix",
    category: "Soils",
    images: [
      "orchid_bark_mix_1.jpg"
    ],
    price: 14.99,
    sku: "PP-SOIL-095",
    description: [
      "A premium bark mix for orchids, providing excellent drainage and aeration.",
      "Suitable for a variety of orchid species.",
      "Helps promote healthy root growth and vibrant blooms."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 96,
    name: "Organic Potting Soil",
    category: "Soils",
    images: [
      "organic_potting_soil_1.jpg"
    ],
    price: 12.99,
    sku: "PP-SOIL-096",
    description: [
      "A rich, organic potting soil blend perfect for all types of plants.",
      "Promotes healthy root development and strong plant growth.",
      "Ideal for container gardening and indoor plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 97,
    name: "Bonsai Scissors",
    category: "GardeningTools",
    images: [
      "bonsai_scissors_1.jpg"
    ],
    price: 24.99,
    sku: "PP-TOOL-097",
    description: [
      "High-precision scissors designed for pruning bonsai trees.",
      "Made of durable, rust-resistant steel.",
      "Ergonomic design for comfortable and precise cuts."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Japan",
    scientific_name: "N/A"
  },
  {
    id: 98,
    name: "Succulent Potting Mix",
    category: "Soils",
    images: [
      "succulent_potting_mix_1.jpg"
    ],
    price: 9.99,
    sku: "PP-SOIL-098",
    description: [
      "A specially formulated potting mix for succulents and cacti.",
      "Promotes drainage and prevents root rot.",
      "Enriched with organic matter for healthy growth."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 99,
    name: "Watering Can",
    category: "GardeningTools",
    images: [
      "watering_can_1.jpg"
    ],
    price: 12.99,
    sku: "PP-TOOL-099",
    description: [
      "A stylish and functional watering can with a long spout for easy watering.",
      "Ideal for both indoor and outdoor plants.",
      "Made of durable, rust-resistant material."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "China",
    scientific_name: "N/A"
  },
  {
    id: 100,
    name: "Bamboo Stakes",
    category: "GardeningTools",
    images: [
      "bamboo_stakes_1.jpg"
    ],
    price: 7.99,
    sku: "PP-TOOL-100",
    description: [
      "Strong, eco-friendly bamboo stakes for supporting climbing plants and vegetables.",
      "Perfect for outdoor gardens and container plants.",
      "Available in various sizes to suit different plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Vietnam",
    scientific_name: "N/A"
  },
  {
    id: 101,
    name: "Garden Hand Trowel",
    category: "GardeningTools",
    images: [
      "garden_hand_trowel_1.jpg"
    ],
    price: 8.99,
    sku: "PP-TOOL-101",
    description: [
      "A durable hand trowel for planting and transplanting in the garden.",
      "Ergonomically designed handle for comfort and efficiency.",
      "Made of rust-resistant stainless steel."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "China",
    scientific_name: "N/A"
  },
  {
    id: 102,
    name: "Organic Fertilizer",
    category: "Soils",
    images: [
      "organic_fertilizer_1.jpg"
    ],
    price: 19.99,
    sku: "PP-SOIL-102",
    description: [
      "A balanced, organic fertilizer that promotes healthy plant growth.",
      "Suitable for all types of plants, including vegetables, flowers, and herbs.",
      "Contains natural ingredients that improve soil fertility."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 103,
    name: "Terracotta Pot",
    category: "GardeningTools",
    images: [
      "terracotta_pot_1.jpg"
    ],
    price: 5.99,
    sku: "PP-TOOL-103",
    description: [
      "A classic terracotta pot perfect for indoor and outdoor plants.",
      "Provides excellent air circulation and drainage.",
      "Available in various sizes to fit different plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Italy",
    scientific_name: "N/A"
  },
  {
    id: 104,
    name: "Spiderwort",
    category: "FloweringPerennials",
    images: [
      "spiderwort_1.jpg",
      "spiderwort_2.jpg"
    ],
    price: 8.99,
    sku: "PP-FWP-104",
    description: [
      "A flowering perennial with unique blue-purple flowers and slender leaves.",
      "Thrives in full sun to partial shade and moist soil.",
      "Perfect for garden beds and borders."
    ],
    light_requirements: "Full sun to partial shade",
    watering_cycle: "Every 5-7 days",
    origin_country: "North America",
    scientific_name: "Tradescantia"
  },
  {
    id: 105,
    name: "Pruning Shears",
    category: "GardeningTools",
    images: [
      "pruning_shears_1.jpg"
    ],
    price: 19.99,
    sku: "PP-TOOL-105",
    description: [
      "High-quality pruning shears with sharp, stainless steel blades.",
      "Ergonomic handle for comfortable use.",
      "Perfect for trimming and shaping plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Germany",
    scientific_name: "N/A"
  },
  {
    id: 106,
    name: "Peach Tree",
    category: "Trees",
    images: [
      "peach_tree_1.jpg",
      "peach_tree_2.jpg"
    ],
    price: 45.99,
    sku: "PP-TRE-106",
    description: [
      "A deciduous fruit tree known for its juicy, sweet peaches that are harvested in summer.",
      "Prefers full sun and well-drained soil.",
      "Loved for its spring blossoms and delicious fruit."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Weekly",
    origin_country: "China",
    scientific_name: "Prunus persica"
  },
  {
    id: 107,
    name: "Rosemary",
    category: "Herbs",
    images: [
      "rosemary_1.jpg",
      "rosemary_2.jpg"
    ],
    price: 7.99,
    sku: "PP-HRB-107",
    description: [
      "An aromatic herb that is a staple in Mediterranean cuisine.",
      "Thrives in full sun, making it ideal for outdoor herb gardens or sunny windowsills.",
      "Known for its needle-like leaves and woody stems, which are highly fragrant."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 10 days",
    origin_country: "Mediterranean",
    scientific_name: "Salvia rosmarinus"
  },
  {
    id: 108,
    name: "Creeping Jenny",
    category: "Groundcovers",
    images: [
      "creeping_jenny_1.jpg",
      "creeping_jenny_2.jpg"
    ],
    price: 9.99,
    sku: "PP-GRO-108",
    description: [
      "A groundcover plant known for its vibrant green foliage that turns golden yellow in the fall.",
      "Prefers full sun to partial shade and well-drained soil, making it ideal for covering soil in garden beds and containers.",
      "Provides excellent erosion control and adds color and texture to garden landscapes."
    ],
    light_requirements: "Full sun to partial shade",
    watering_cycle: "Every 4-5 days",
    origin_country: "Europe",
    scientific_name: "Lysimachia nummularia"
  },
  {
    id: 109,
    name: "Lavender 'Munstead'",
    category: "Herbs",
    images: [
      "lavender_munstead_1.jpg",
      "lavender_munstead_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-109",
    description: [
      "A compact variety of lavender known for its aromatic foliage and deep purple flowers.",
      "Thrives in full sun and well-drained soil, suitable for herb gardens, borders, and rock gardens.",
      "Requires minimal watering once established, about once every 7-10 days."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Munstead'"
  },
  {
    id: 110,
    name: "Golden Pothos",
    category: "IndoorPlants",
    images: [
      "golden_pothos_1.jpg",
      "golden_pothos_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-110",
    description: [
      "A resilient indoor plant with vibrant green and yellow leaves.",
      "Perfect for beginners due to its easy-care nature.",
      "Thrives in low to bright indirect light and purifies the air."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "Solomon Islands",
    scientific_name: "Epipremnum aureum"
  },
  {
    id: 111,
    name: "Bonsai Soil Mix",
    category: "Soils",
    images: [
      "bonsai_soil_mix_1.jpg"
    ],
    price: 14.99,
    sku: "PP-SOIL-111",
    description: [
      "A specialized soil mix formulated for bonsai trees, ensuring proper drainage and root development.",
      "Ideal for all types of bonsai species.",
      "Promotes strong root systems and healthy growth."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Japan",
    scientific_name: "N/A"
  },
  {
    id: 112,
    name: "Hydrangea",
    category: "FloweringShrubs",
    images: [
      "hydrangea_1.jpg",
      "hydrangea_2.jpg"
    ],
    price: 29.99,
    sku: "PP-FLS-112",
    description: [
      "A beautiful flowering shrub known for its large clusters of blooms that change color based on soil pH.",
      "Prefers partial shade to full sun, with morning sun and afternoon shade being ideal.",
      "Requires regular watering, especially during dry periods, to keep the soil consistently moist."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Every 3-4 days",
    origin_country: "Asia",
    scientific_name: "Hydrangea macrophylla"
  },
  {
    id: 113,
    name: "Fiddle Leaf Fig",
    category: "IndoorPlants",
    images: [
      "fiddle_leaf_fig_1.jpg",
      "fiddle_leaf_fig_2.jpg"
    ],
    price: 29.99,
    sku: "PP-PLT-113",
    description: [
      "Large, violin-shaped leaves that add a striking presence to any room.",
      "Prefers bright, indirect light to thrive and maintain its vibrant green color.",
      "Requires weekly watering, allowing the soil to dry out slightly between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly",
    origin_country: "West Africa",
    scientific_name: "Ficus lyrata"
  },
  {
    id: 114,
    name: "Japanese Maple",
    category: "Trees",
    images: [
      "japanese_maple_1.jpg",
      "japanese_maple_2.jpg"
    ],
    price: 59.99,
    sku: "PP-TRE-114",
    description: [
      "A small, ornamental tree with finely textured leaves that change color with the seasons.",
      "Perfect for gardens and patios.",
      "Known for its vibrant fall colors."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Weekly",
    origin_country: "Japan",
    scientific_name: "Acer palmatum"
  },
  {
    id: 115,
    name: "Spider Plant",
    category: "IndoorPlants",
    images: [
      "spider_plant_1.jpg",
      "spider_plant_2.jpg"
    ],
    price: 10.99,
    sku: "PP-PLT-115",
    description: [
      "An easy-care indoor plant with long, arching leaves that are green with white stripes.",
      "Perfect for hanging baskets and air purification.",
      "Thrives in indirect light and needs minimal attention."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "South Africa",
    scientific_name: "Chlorophytum comosum"
  },
  {
    id: 116,
    name: "Blue Star Fern",
    category: "Ferns",
    images: [
      "blue_star_fern_1.jpg",
      "blue_star_fern_2.jpg"
    ],
    price: 19.99,
    sku: "PP-FRN-116",
    description: [
      "An attractive fern known for its distinctive blue-green foliage and unique growth habit.",
      "Thrives in low to bright indirect light and requires a well-drained, moisture-retentive soil.",
      "Adds a striking, exotic touch to indoor spaces with its eye-catching color and form."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "Tropical regions",
    scientific_name: "Phlebodium aureum"
  },
  {
    id: 117,
    name: "Wisteria",
    category: "Climbers",
    images: [
      "wisteria_1.jpg",
      "wisteria_2.jpg"
    ],
    price: 34.99,
    sku: "PP-CLM-117",
    description: [
      "A climbing plant known for its cascading clusters of fragrant, lavender-blue flowers.",
      "Prefers full sun and can be trained to grow on pergolas, walls, and trellises.",
      "Popular for creating shaded walkways and adding a romantic touch to gardens."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Weekly",
    origin_country: "East Asia",
    scientific_name: "Wisteria sinensis"
  },
  {
    id: 118,
    name: "Rose",
    category: "FloweringShrubs",
    images: [
      "rose_1.jpg",
      "rose_2.jpg"
    ],
    price: 15.99,
    sku: "PP-FLS-118",
    description: [
      "A classic flowering shrub known for its beautiful and fragrant blooms.",
      "Requires full sun and regular watering.",
      "Perfect for garden beds, borders, and containers."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 3-4 days",
    origin_country: "Asia",
    scientific_name: "Rosa"
  },
  {
    id: 119,
    name: "Lavender 'Hidcote'",
    category: "Herbs",
    images: [
      "lavender_hidcote_1.jpg",
      "lavender_hidcote_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-119",
    description: [
      "A compact variety of lavender with deep purple flowers and aromatic foliage.",
      "Thrives in full sun and well-drained soil, making it ideal for herb gardens and borders.",
      "Popular in herb gardens and for crafting scented sachets."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Hidcote'"
  },
  {
    id: 120,
    name: "Garden Hand Trowel",
    category: "GardeningTools",
    images: [
      "garden_hand_trowel_1.jpg"
    ],
    price: 8.99,
    sku: "PP-TOOL-120",
    description: [
      "A durable hand trowel for planting and transplanting in the garden.",
      "Ergonomically designed handle for comfort and efficiency.",
      "Made of rust-resistant stainless steel."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "China",
    scientific_name: "N/A"
  },
  {
    id: 121,
    name: "Lavender 'Provence'",
    category: "Herbs",
    images: [
      "lavender_provence_1.jpg",
      "lavender_provence_2.jpg"
    ],
    price: 10.99,
    sku: "PP-HRB-121",
    description: [
      "A fragrant herb variety known for its long stems and deep purple flowers.",
      "Ideal for creating hedges or borders in herb gardens.",
      "Thrives in full sun and well-drained soil."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula x intermedia 'Provence'"
  },
  {
    id: 122,
    name: "Creeping Thyme",
    category: "EdiblePlants",
    images: [
      "creeping_thyme_1.jpg",
      "creeping_thyme_2.jpg"
    ],
    price: 8.99,
    sku: "PP-HRB-122",
    description: [
      "A low-growing herb with aromatic foliage and small pink or purple flowers.",
      "Perfect for herb gardens, rock gardens, and as a groundcover.",
      "Requires full sun and well-drained soil."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Europe and Asia",
    scientific_name: "Thymus serpyllum"
  },
  {
    id: 123,
    name: "English Ivy",
    category: "Climbers",
    images: [
      "english_ivy_1.jpg",
      "english_ivy_2.jpg"
    ],
    price: 14.99,
    sku: "PP-CLM-123",
    description: [
      "A versatile plant that can climb, trail, or be used as ground cover.",
      "Prefers medium to bright light and adapts well to various indoor conditions.",
      "Known for its ability to purify air, particularly in reducing mold levels."
    ],
    light_requirements: "Medium to bright light",
    watering_cycle: "Weekly",
    origin_country: "Europe",
    scientific_name: "Hedera helix"
  },
  {
    id: 124,
    name: "Bamboo Palm",
    category: "Palms",
    images: [
      "bamboo_palm_1.jpg",
      "bamboo_palm_2.jpg"
    ],
    price: 24.99,
    sku: "PP-PLM-124",
    description: [
      "A tall, graceful palm that brings a touch of the tropics indoors.",
      "Prefers low to bright, indirect light and is well-suited for indoor environments.",
      "Known for its air-purifying properties and ability to remove toxins like benzene and formaldehyde."
    ],
    light_requirements: "Low to bright, indirect light",
    watering_cycle: "Every 7-10 days",
    origin_country: "Central and South America",
    scientific_name: "Chamaedorea seifrizii"
  },
  {
    id: 125,
    name: "Golden Pothos",
    category: "IndoorPlants",
    images: [
      "golden_pothos_1.jpg",
      "golden_pothos_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-125",
    description: [
      "A resilient indoor plant with vibrant green and yellow leaves.",
      "Perfect for beginners due to its easy-care nature.",
      "Thrives in low to bright indirect light and purifies the air."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "Solomon Islands",
    scientific_name: "Epipremnum aureum"
  },
  {
    id: 126,
    name: "Ficus Bonsai",
    category: "Bonsai",
    images: [
      "ficus_bonsai_1.jpg",
      "ficus_bonsai_2.jpg"
    ],
    price: 49.99,
    sku: "PP-BNS-126",
    description: [
      "A popular bonsai variety known for its resilience and ease of care.",
      "Thrives in bright, indirect light, making it ideal for indoor environments.",
      "Requires regular watering, allowing the soil to dry slightly between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly",
    origin_country: "Asia",
    scientific_name: "Ficus microcarpa"
  },
  {
    id: 127,
    name: "Snake Plant",
    category: "IndoorPlants",
    images: [
      "snake_plant_1.jpg",
      "snake_plant_2.jpg"
    ],
    price: 19.99,
    sku: "PP-PLT-127",
    description: [
      "One of the easiest houseplants to care for, thriving on neglect.",
      "Can survive in low light conditions, but also does well in bright light.",
      "Known for its ability to filter indoor air, removing toxins such as formaldehyde."
    ],
    light_requirements: "Low to bright light",
    watering_cycle: "Every 2 weeks",
    origin_country: "West Africa",
    scientific_name: "Sansevieria trifasciata"
  },
  {
    id: 128,
    name: "Peace Lily",
    category: "IndoorPlants",
    images: [
      "peace_lily_1.jpg",
      "peace_lily_2.jpg"
    ],
    price: 24.99,
    sku: "PP-PLT-128",
    description: [
      "Elegant white blooms that stand out against dark green foliage.",
      "Thrives in low to medium light, making it ideal for indoor environments.",
      "Helps improve indoor air quality by removing harmful toxins."
    ],
    light_requirements: "Low to medium light",
    watering_cycle: "Weekly",
    origin_country: "Central and South America",
    scientific_name: "Spathiphyllum"
  },
  {
    id: 129,
    name: "Maidenhair Fern",
    category: "Ferns",
    images: [
      "maidenhair_fern_1.jpg",
      "maidenhair_fern_2.jpg"
    ],
    price: 17.99,
    sku: "PP-FRN-129",
    description: [
      "A delicate fern with soft, feathery fronds that add elegance to any space.",
      "Thrives in indirect light and high humidity, making it perfect for bathrooms or terrariums.",
      "Requires consistently moist soil, but not waterlogged."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Keep soil moist",
    origin_country: "Tropical regions",
    scientific_name: "Adiantum"
  },
  {
    id: 130,
    name: "Monstera Deliciosa",
    category: "IndoorPlants",
    images: [
      "monstera_deliciosa_1.jpg",
      "monstera_deliciosa_2.jpg"
    ],
    price: 34.99,
    sku: "PP-PLT-130",
    description: [
      "Famous for its large, split leaves that create a bold statement in any room.",
      "Requires bright, indirect light to maintain its lush appearance.",
      "Likes to be watered every 10 days, with soil kept slightly moist but not soggy."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 10 days",
    origin_country: "Mexico, Panama",
    scientific_name: "Monstera deliciosa"
  },
  {
    id: 131,
    name: "Basil",
    category: "Herbs",
    images: [
      "basil_1.jpg",
      "basil_2.jpg"
    ],
    price: 6.99,
    sku: "PP-HRB-131",
    description: [
      "A fragrant herb commonly used in Italian and Southeast Asian cuisines.",
      "Prefers full sun and should be placed in a spot with at least 6 hours of sunlight.",
      "Known for its large, aromatic leaves that can be harvested regularly."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 5-7 days",
    origin_country: "India",
    scientific_name: "Ocimum basilicum"
  },
  {
    id: 132,
    name: "Rosemary",
    category: "Herbs",
    images: [
      "rosemary_1.jpg",
      "rosemary_2.jpg"
    ],
    price: 7.99,
    sku: "PP-HRB-132",
    description: [
      "An aromatic herb that is a staple in Mediterranean cuisine.",
      "Thrives in full sun, making it ideal for outdoor herb gardens or sunny windowsills.",
      "Known for its needle-like leaves and woody stems, which are highly fragrant."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 10 days",
    origin_country: "Mediterranean",
    scientific_name: "Salvia rosmarinus"
  },
  {
    id: 133,
    name: "Venus Flytrap",
    category: "CarnivorousPlants",
    images: [
      "venus_flytrap_1.jpg",
      "venus_flytrap_2.jpg"
    ],
    price: 14.99,
    sku: "PP-CRN-133",
    description: [
      "A fascinating carnivorous plant that captures and digests insects.",
      "Requires bright, direct light and high humidity to maintain its health and trapping ability.",
      "Grows best in a soil mixture of sphagnum moss and sand or perlite."
    ],
    light_requirements: "Bright, direct light",
    watering_cycle: "Keep soil moist",
    origin_country: "United States",
    scientific_name: "Dionaea muscipula"
  },
  {
    id: 134,
    name: "Lavender 'Hidcote'",
    category: "Herbs",
    images: [
      "lavender_hidcote_1.jpg",
      "lavender_hidcote_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-134",
    description: [
      "A compact variety of lavender with deep purple flowers and aromatic foliage.",
      "Thrives in full sun and well-drained soil, making it ideal for herb gardens and borders.",
      "Popular in herb gardens and for crafting scented sachets."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Hidcote'"
  },
  {
    id: 135,
    name: "Jade Plant",
    category: "Succulents",
    images: [
      "jade_plant_1.jpg",
      "jade_plant_2.jpg"
    ],
    price: 12.99,
    sku: "PP-SUC-135",
    description: [
      "A popular succulent known for its thick, fleshy leaves and tree-like appearance.",
      "Prefers bright light, ideally placed on a windowsill or well-lit area.",
      "Should be watered sparingly, approximately once every 2-3 weeks, avoiding overwatering."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "South Africa",
    scientific_name: "Crassula ovata"
  },
  {
    id: 136,
    name: "Aloe Vera",
    category: "Succulents",
    images: [
      "aloe_vera_1.jpg",
      "aloe_vera_2.jpg"
    ],
    price: 9.99,
    sku: "PP-SUC-136",
    description: [
      "A succulent plant renowned for its soothing, medicinal gel.",
      "Thrives in bright, indirect light, making it ideal for indoor cultivation.",
      "Requires minimal watering, about once every 3 weeks, allowing the soil to dry out completely."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 3 weeks",
    origin_country: "Arabian Peninsula",
    scientific_name: "Aloe vera"
  },
  {
    id: 137,
    name: "Golden Barrel Cactus",
    category: "Cacti",
    images: [
      "golden_barrel_cactus_1.jpg",
      "golden_barrel_cactus_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CAC-137",
    description: [
      "A stunning spherical cactus with golden spines that make it a striking centerpiece.",
      "Prefers full sun and can be placed outdoors or near a sunny window.",
      "An excellent plant for beginners due to its low maintenance."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 4 weeks",
    origin_country: "Mexico",
    scientific_name: "Echinocactus grusonii"
  },
  {
    id: 138,
    name: "Dwarf Mondo Grass",
    category: "OrnamentalGrasses",
    images: [
      "dwarf_mondo_grass_1.jpg",
      "dwarf_mondo_grass_2.jpg"
    ],
    price: 8.99,
    sku: "PP-ORN-138",
    description: [
      "A small, clumping ornamental grass with dark green, grass-like foliage.",
      "Prefers partial shade and well-drained soil, suitable for groundcover and borders in shaded areas.",
      "Adds a subtle texture and contrast to garden beds and containers with its fine foliage."
    ],
    light_requirements: "Partial shade",
    watering_cycle: "Every 5-7 days",
    origin_country: "Japan and China",
    scientific_name: "Ophiopogon japonicus"
  },
  {
    id: 139,
    name: "Tillandsia",
    category: "AirPlants",
    images: [
      "tillandsia_1.jpg",
      "tillandsia_2.jpg"
    ],
    price: 8.99,
    sku: "PP-AIR-139",
    description: [
      "A versatile air plant that absorbs moisture and nutrients through its leaves, requiring no soil to grow.",
      "Prefers bright, indirect light and regular misting to maintain humidity.",
      "Known for its adaptability and low maintenance, ideal for modern home decor and office settings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly misting and soaking",
    origin_country: "Central and South America",
    scientific_name: "Tillandsia"
  },
  {
    id: 140,
    name: "Orchid Bark Mix",
    category: "Soils",
    images: [
      "orchid_bark_mix_1.jpg"
    ],
    price: 14.99,
    sku: "PP-SOIL-140",
    description: [
      "A premium bark mix for orchids, providing excellent drainage and aeration.",
      "Suitable for a variety of orchid species.",
      "Helps promote healthy root growth and vibrant blooms."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 141,
    name: "Succulent Potting Mix",
    category: "Soils",
    images: [
      "succulent_potting_mix_1.jpg"
    ],
    price: 9.99,
    sku: "PP-SOIL-141",
    description: [
      "A specially formulated potting mix for succulents and cacti.",
      "Promotes drainage and prevents root rot.",
      "Enriched with organic matter for healthy growth."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 142,
    name: "Bonsai Scissors",
    category: "GardeningTools",
    images: [
      "bonsai_scissors_1.jpg"
    ],
    price: 24.99,
    sku: "PP-TOOL-142",
    description: [
      "High-precision scissors designed for pruning bonsai trees.",
      "Made of durable, rust-resistant steel.",
      "Ergonomic design for comfortable and precise cuts."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Japan",
    scientific_name: "N/A"
  },
  {
    id: 143,
    name: "Organic Fertilizer",
    category: "Soils",
    images: [
      "organic_fertilizer_1.jpg"
    ],
    price: 19.99,
    sku: "PP-SOIL-143",
    description: [
      "A balanced, organic fertilizer that promotes healthy plant growth.",
      "Suitable for all types of plants, including vegetables, flowers, and herbs.",
      "Contains natural ingredients that improve soil fertility."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 144,
    name: "Watering Can",
    category: "GardeningTools",
    images: [
      "watering_can_1.jpg"
    ],
    price: 12.99,
    sku: "PP-TOOL-144",
    description: [
      "A stylish and functional watering can with a long spout for easy watering.",
      "Ideal for both indoor and outdoor plants.",
      "Made of durable, rust-resistant material."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "China",
    scientific_name: "N/A"
  },
  {
    id: 145,
    name: "Terracotta Pot",
    category: "GardeningTools",
    images: [
      "terracotta_pot_1.jpg"
    ],
    price: 5.99,
    sku: "PP-TOOL-145",
    description: [
      "A classic terracotta pot perfect for indoor and outdoor plants.",
      "Provides excellent air circulation and drainage.",
      "Available in various sizes to fit different plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Italy",
    scientific_name: "N/A"
  },
  {
    id: 146,
    name: "Bamboo Stakes",
    category: "GardeningTools",
    images: [
      "bamboo_stakes_1.jpg"
    ],
    price: 7.99,
    sku: "PP-TOOL-146",
    description: [
      "Strong, eco-friendly bamboo stakes for supporting climbing plants and vegetables.",
      "Perfect for outdoor gardens and container plants.",
      "Available in various sizes to suit different plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Vietnam",
    scientific_name: "N/A"
  },
  {
    id: 147,
    name: "Pruning Shears",
    category: "GardeningTools",
    images: [
      "pruning_shears_1.jpg"
    ],
    price: 19.99,
    sku: "PP-TOOL-147",
    description: [
      "High-quality pruning shears with sharp, stainless steel blades.",
      "Ergonomic handle for comfortable use.",
      "Perfect for trimming and shaping plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Germany",
    scientific_name: "N/A"
  },
  {
    id: 148,
    name: "Spider Plant",
    category: "IndoorPlants",
    images: [
      "spider_plant_1.jpg",
      "spider_plant_2.jpg"
    ],
    price: 10.99,
    sku: "PP-PLT-148",
    description: [
      "An easy-care indoor plant with long, arching leaves that are green with white stripes.",
      "Perfect for hanging baskets and air purification.",
      "Thrives in indirect light and needs minimal attention."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "South Africa",
    scientific_name: "Chlorophytum comosum"
  },
  {
    id: 149,
    name: "Lucky Bamboo",
    category: "IndoorPlants",
    images: [
      "lucky_bamboo_1.jpg",
      "lucky_bamboo_2.jpg"
    ],
    price: 9.99,
    sku: "PP-PLT-149",
    description: [
      "A popular indoor plant known for its easy care and auspicious symbolism.",
      "Grows in water or soil and thrives in low to bright indirect light.",
      "Considered a symbol of good luck and prosperity, often used in Feng Shui practices."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 7-10 days",
    origin_country: "Africa",
    scientific_name: "Dracaena sanderiana"
  },
  {
    id: 150,
    name: "African Violet",
    category: "IndoorPlants",
    images: [
      "african_violet_1.jpg",
      "african_violet_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-150",
    description: [
      "An indoor plant known for its vibrant flowers and fuzzy green leaves.",
      "Prefers bright, indirect light and a well-drained potting mix designed for African violets.",
      "Adds a splash of color and texture to indoor settings with its charming blooms."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "East Africa",
    scientific_name: "Saintpaulia"
  },
  {
    id: 151,
    name: "Moth Orchid",
    category: "IndoorPlants",
    images: [
      "moth_orchid_1.jpg",
      "moth_orchid_2.jpg"
    ],
    price: 22.99,
    sku: "PP-PLT-151",
    description: [
      "A popular indoor orchid known for its large, colorful blooms and elegant appearance.",
      "Thrives in bright, indirect light and prefers a well-drained orchid mix.",
      "Offers long-lasting flowers and adds a touch of sophistication to indoor spaces."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 7-10 days",
    origin_country: "Southeast Asia",
    scientific_name: "Phalaenopsis"
  },
  {
    id: 152,
    name: "Golden Barrel Cactus",
    category: "Cacti",
    images: [
      "golden_barrel_cactus_1.jpg",
      "golden_barrel_cactus_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CAC-152",
    description: [
      "A stunning spherical cactus with golden spines that make it a striking centerpiece.",
      "Prefers full sun and can be placed outdoors or near a sunny window.",
      "An excellent plant for beginners due to its low maintenance."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 4 weeks",
    origin_country: "Mexico",
    scientific_name: "Echinocactus grusonii"
  },
  {
    id: 153,
    name: "Maidenhair Fern",
    category: "Ferns",
    images: [
      "maidenhair_fern_1.jpg",
      "maidenhair_fern_2.jpg"
    ],
    price: 17.99,
    sku: "PP-FRN-153",
    description: [
      "A delicate fern with soft, feathery fronds that add elegance to any space.",
      "Thrives in indirect light and high humidity, making it perfect for bathrooms or terrariums.",
      "Requires consistently moist soil, but not waterlogged."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Keep soil moist",
    origin_country: "Tropical regions",
    scientific_name: "Adiantum"
  },
  {
    id: 154,
    name: "Spiderwort",
    category: "FloweringPerennials",
    images: [
      "spiderwort_1.jpg",
      "spiderwort_2.jpg"
    ],
    price: 8.99,
    sku: "PP-FWP-154",
    description: [
      "A flowering perennial with unique blue-purple flowers and slender leaves.",
      "Thrives in full sun to partial shade and moist soil.",
      "Perfect for garden beds and borders."
    ],
    light_requirements: "Full sun to partial shade",
    watering_cycle: "Every 5-7 days",
    origin_country: "North America",
    scientific_name: "Tradescantia"
  },
  {
    id: 155,
    name: "Rosemary",
    category: "Herbs",
    images: [
      "rosemary_1.jpg",
      "rosemary_2.jpg"
    ],
    price: 7.99,
    sku: "PP-HRB-155",
    description: [
      "An aromatic herb that is a staple in Mediterranean cuisine.",
      "Thrives in full sun, making it ideal for outdoor herb gardens or sunny windowsills.",
      "Known for its needle-like leaves and woody stems, which are highly fragrant."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 10 days",
    origin_country: "Mediterranean",
    scientific_name: "Salvia rosmarinus"
  },
  {
    id: 156,
    name: "Golden Pothos",
    category: "IndoorPlants",
    images: [
      "golden_pothos_1.jpg",
      "golden_pothos_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-156",
    description: [
      "A resilient indoor plant with vibrant green and yellow leaves.",
      "Perfect for beginners due to its easy-care nature.",
      "Thrives in low to bright indirect light and purifies the air."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "Solomon Islands",
    scientific_name: "Epipremnum aureum"
  },
  {
    id: 157,
    name: "Blue Star Fern",
    category: "Ferns",
    images: [
      "blue_star_fern_1.jpg",
      "blue_star_fern_2.jpg"
    ],
    price: 19.99,
    sku: "PP-FRN-157",
    description: [
      "An attractive fern known for its distinctive blue-green foliage and unique growth habit.",
      "Thrives in low to bright indirect light and requires a well-drained, moisture-retentive soil.",
      "Adds a striking, exotic touch to indoor spaces with its eye-catching color and form."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "Tropical regions",
    scientific_name: "Phlebodium aureum"
  },
  {
    id: 158,
    name: "Lucky Bamboo",
    category: "IndoorPlants",
    images: [
      "lucky_bamboo_1.jpg",
      "lucky_bamboo_2.jpg"
    ],
    price: 9.99,
    sku: "PP-PLT-158",
    description: [
      "A popular indoor plant known for its easy care and auspicious symbolism.",
      "Grows in water or soil and thrives in low to bright indirect light.",
      "Considered a symbol of good luck and prosperity, often used in Feng Shui practices."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 7-10 days",
    origin_country: "Africa",
    scientific_name: "Dracaena sanderiana"
  },
  {
    id: 159,
    name: "Golden Barrel Cactus",
    category: "Cacti",
    images: [
      "golden_barrel_cactus_1.jpg",
      "golden_barrel_cactus_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CAC-159",
    description: [
      "A stunning spherical cactus with golden spines that make it a striking centerpiece.",
      "Prefers full sun and can be placed outdoors or near a sunny window.",
      "An excellent plant for beginners due to its low maintenance."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 4 weeks",
    origin_country: "Mexico",
    scientific_name: "Echinocactus grusonii"
  },
  {
    id: 160,
    name: "Jade Plant",
    category: "Succulents",
    images: [
      "jade_plant_1.jpg",
      "jade_plant_2.jpg"
    ],
    price: 12.99,
    sku: "PP-SUC-160",
    description: [
      "A popular succulent known for its thick, fleshy leaves and tree-like appearance.",
      "Prefers bright light, ideally placed on a windowsill or well-lit area.",
      "Should be watered sparingly, approximately once every 2-3 weeks, avoiding overwatering."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "South Africa",
    scientific_name: "Crassula ovata"
  },
  {
    id: 161,
    name: "Monstera Deliciosa",
    category: "IndoorPlants",
    images: [
      "monstera_deliciosa_1.jpg",
      "monstera_deliciosa_2.jpg"
    ],
    price: 34.99,
    sku: "PP-PLT-161",
    description: [
      "Famous for its large, split leaves that create a bold statement in any room.",
      "Requires bright, indirect light to maintain its lush appearance.",
      "Likes to be watered every 10 days, with soil kept slightly moist but not soggy."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 10 days",
    origin_country: "Mexico, Panama",
    scientific_name: "Monstera deliciosa"
  },
  {
    id: 162,
    name: "Peach Tree",
    category: "Trees",
    images: [
      "peach_tree_1.jpg",
      "peach_tree_2.jpg"
    ],
    price: 45.99,
    sku: "PP-TRE-162",
    description: [
      "A deciduous fruit tree known for its juicy, sweet peaches that are harvested in summer.",
      "Prefers full sun and well-drained soil.",
      "Loved for its spring blossoms and delicious fruit."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Weekly",
    origin_country: "China",
    scientific_name: "Prunus persica"
  },
  {
    id: 163,
    name: "Blue Fescue Grass",
    category: "OrnamentalGrasses",
    images: [
      "blue_fescue_grass_1.jpg",
      "blue_fescue_grass_2.jpg"
    ],
    price: 9.99,
    sku: "PP-ORN-163",
    description: [
      "A compact ornamental grass with striking blue-gray foliage.",
      "Thrives in full sun and is drought-tolerant once established, making it ideal for low-maintenance gardens.",
      "Perfect for borders, rock gardens, or as a groundcover to add texture and color."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 2 weeks",
    origin_country: "Europe",
    scientific_name: "Festuca glauca"
  },
  {
    id: 164,
    name: "Basil",
    category: "Herbs",
    images: [
      "basil_1.jpg",
      "basil_2.jpg"
    ],
    price: 6.99,
    sku: "PP-HRB-164",
    description: [
      "A fragrant herb commonly used in Italian and Southeast Asian cuisines.",
      "Prefers full sun and should be placed in a spot with at least 6 hours of sunlight.",
      "Known for its large, aromatic leaves that can be harvested regularly."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 5-7 days",
    origin_country: "India",
    scientific_name: "Ocimum basilicum"
  },
  {
    id: 165,
    name: "Wisteria",
    category: "Climbers",
    images: [
      "wisteria_1.jpg",
      "wisteria_2.jpg"
    ],
    price: 34.99,
    sku: "PP-CLM-165",
    description: [
      "A climbing plant known for its cascading clusters of fragrant, lavender-blue flowers.",
      "Prefers full sun and can be trained to grow on pergolas, walls, and trellises.",
      "Popular for creating shaded walkways and adding a romantic touch to gardens."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Weekly",
    origin_country: "East Asia",
    scientific_name: "Wisteria sinensis"
  },
  {
    id: 166,
    name: "Cherry Tomato",
    category: "EdiblePlants",
    images: [
      "cherry_tomato_1.jpg",
      "cherry_tomato_2.jpg"
    ],
    price: 5.99,
    sku: "PP-VGT-166",
    description: [
      "A small, sweet variety of tomato that produces clusters of bright red fruit.",
      "Thrives in full sun and well-drained soil, making it perfect for gardens and patio containers.",
      "Ideal for salads, snacking, and fresh recipes, adding a burst of flavor and color."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 2-3 days",
    origin_country: "South America",
    scientific_name: "Solanum lycopersicum var. cerasiforme"
  },
  {
    id: 167,
    name: "Bougainvillea",
    category: "Climbers",
    images: [
      "bougainvillea_1.jpg",
      "bougainvillea_2.jpg"
    ],
    price: 19.99,
    sku: "PP-CLM-167",
    description: [
      "A vibrant climbing plant known for its colorful, paper-like bracts that surround tiny white flowers.",
      "Prefers full sun and can be trained to climb walls, trellises, and fences.",
      "Ideal for adding a splash of color to gardens, patios, and balconies."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 3-4 days",
    origin_country: "South America",
    scientific_name: "Bougainvillea spectabilis"
  },
  {
    id: 168,
    name: "Lavender 'Munstead'",
    category: "Herbs",
    images: [
      "lavender_munstead_1.jpg",
      "lavender_munstead_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-168",
    description: [
      "A compact variety of lavender known for its aromatic foliage and deep purple flowers.",
      "Thrives in full sun and well-drained soil, suitable for herb gardens, borders, and rock gardens.",
      "Requires minimal watering once established, about once every 7-10 days."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Munstead'"
  },
  {
    id: 169,
    name: "Spider Plant",
    category: "IndoorPlants",
    images: [
      "spider_plant_1.jpg",
      "spider_plant_2.jpg"
    ],
    price: 10.99,
    sku: "PP-PLT-169",
    description: [
      "An easy-care indoor plant with long, arching leaves that are green with white stripes.",
      "Perfect for hanging baskets and air purification.",
      "Thrives in indirect light and needs minimal attention."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "South Africa",
    scientific_name: "Chlorophytum comosum"
  },
  {
    id: 170,
    name: "Blue Star Fern",
    category: "Ferns",
    images: [
      "blue_star_fern_1.jpg",
      "blue_star_fern_2.jpg"
    ],
    price: 19.99,
    sku: "PP-FRN-170",
    description: [
      "An attractive fern known for its distinctive blue-green foliage and unique growth habit.",
      "Thrives in low to bright indirect light and requires a well-drained, moisture-retentive soil.",
      "Adds a striking, exotic touch to indoor spaces with its eye-catching color and form."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "Tropical regions",
    scientific_name: "Phlebodium aureum"
  },
  {
    id: 171,
    name: "English Ivy",
    category: "Climbers",
    images: [
      "english_ivy_1.jpg",
      "english_ivy_2.jpg"
    ],
    price: 14.99,
    sku: "PP-CLM-171",
    description: [
      "A versatile plant that can climb, trail, or be used as ground cover.",
      "Prefers medium to bright light and adapts well to various indoor conditions.",
      "Known for its ability to purify air, particularly in reducing mold levels."
    ],
    light_requirements: "Medium to bright light",
    watering_cycle: "Weekly",
    origin_country: "Europe",
    scientific_name: "Hedera helix"
  },
  {
    id: 172,
    name: "Kalanchoe",
    category: "Succulents",
    images: [
      "kalanchoe_1.jpg",
      "kalanchoe_2.jpg"
    ],
    price: 12.99,
    sku: "PP-SUC-172",
    description: [
      "A succulent plant with fleshy, rounded leaves and clusters of small, colorful flowers.",
      "Prefers bright, indirect light and well-drained soil, making it perfect for indoor settings and sunny windowsills.",
      "Known for its attractive blooms and ease of care."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "Madagascar",
    scientific_name: "Kalanchoe blossfeldiana"
  },
  {
    id: 173,
    name: "Bird of Paradise",
    category: "Tropicals",
    images: [
      "bird_of_paradise_1.jpg",
      "bird_of_paradise_2.jpg"
    ],
    price: 29.99,
    sku: "PP-TRO-173",
    description: [
      "A tropical plant known for its large, banana-like leaves and striking bird-shaped flowers.",
      "Prefers full sun and well-drained soil, making it ideal for bright indoor spaces or outdoor gardens in warm climates.",
      "Adds a dramatic and exotic touch to any setting with its unique appearance and vibrant blooms."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 5-7 days",
    origin_country: "South Africa",
    scientific_name: "Strelitzia reginae"
  },
  {
    id: 174,
    name: "Maidenhair Fern",
    category: "Ferns",
    images: [
      "maidenhair_fern_1.jpg",
      "maidenhair_fern_2.jpg"
    ],
    price: 17.99,
    sku: "PP-FRN-174",
    description: [
      "A delicate fern with soft, feathery fronds that add elegance to any space.",
      "Thrives in indirect light and high humidity, making it perfect for bathrooms or terrariums.",
      "Requires consistently moist soil, but not waterlogged."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Keep soil moist",
    origin_country: "Tropical regions",
    scientific_name: "Adiantum"
  },
  {
    id: 175,
    name: "Hydrangea",
    category: "FloweringShrubs",
    images: [
      "hydrangea_1.jpg",
      "hydrangea_2.jpg"
    ],
    price: 29.99,
    sku: "PP-FLS-175",
    description: [
      "A beautiful flowering shrub known for its large clusters of blooms that change color based on soil pH.",
      "Prefers partial shade to full sun, with morning sun and afternoon shade being ideal.",
      "Requires regular watering, especially during dry periods, to keep the soil consistently moist."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Every 3-4 days",
    origin_country: "Asia",
    scientific_name: "Hydrangea macrophylla"
  },
  {
    id: 176,
    name: "Sago Palm",
    category: "Palms",
    images: [
      "sago_palm_1.jpg",
      "sago_palm_2.jpg"
    ],
    price: 39.99,
    sku: "PP-PLM-176",
    description: [
      "An ornamental palm-like plant with a crown of glossy, feather-like leaves.",
      "Prefers bright, indirect light and well-drained soil, suitable for both indoor and outdoor use.",
      "Adds a tropical touch to gardens and indoor spaces with its distinctive foliage."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "Japan and China",
    scientific_name: "Cycas revoluta"
  },
  {
    id: 177,
    name: "Ficus Bonsai",
    category: "Bonsai",
    images: [
      "ficus_bonsai_1.jpg",
      "ficus_bonsai_2.jpg"
    ],
    price: 49.99,
    sku: "PP-BNS-177",
    description: [
      "A popular bonsai variety known for its resilience and ease of care.",
      "Thrives in bright, indirect light, making it ideal for indoor environments.",
      "Requires regular watering, allowing the soil to dry slightly between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly",
    origin_country: "Asia",
    scientific_name: "Ficus microcarpa"
  },
  {
    id: 178,
    name: "Rubber Plant",
    category: "IndoorPlants",
    images: [
      "rubber_plant_1.jpg",
      "rubber_plant_2.jpg"
    ],
    price: 24.99,
    sku: "PP-PLT-178",
    description: [
      "A popular indoor plant known for its glossy, dark green leaves and upright growth habit.",
      "Thrives in bright, indirect light and well-drained soil, making it suitable for indoor settings.",
      "Adds a touch of elegance and greenery to indoor spaces with its bold foliage and compact form."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 7 days",
    origin_country: "Southeast Asia",
    scientific_name: "Ficus elastica"
  },
  {
    id: 179,
    name: "Dwarf Jade Bonsai",
    category: "Bonsai",
    images: [
      "dwarf_jade_bonsai_1.jpg",
      "dwarf_jade_bonsai_2.jpg"
    ],
    price: 45.99,
    sku: "PP-BNS-179",
    description: [
      "A miniature bonsai with thick, glossy leaves, known for its compact size and longevity.",
      "Thrives in bright light and should be placed near a sunny window or under grow lights.",
      "Symbolizes good fortune and is considered a traditional indoor bonsai plant."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2 weeks",
    origin_country: "South Africa",
    scientific_name: "Portulacaria afra"
  },
  {
    id: 180,
    name: "Calla Lily",
    category: "FloweringPerennials",
    images: [
      "calla_lily_1.jpg",
      "calla_lily_2.jpg"
    ],
    price: 13.99,
    sku: "PP-FWP-180",
    description: [
      "A striking perennial with elegant, trumpet-shaped flowers that come in a variety of colors.",
      "Thrives in full sun to partial shade and should be kept in well-draining soil.",
      "Symbolizes purity, beauty, and rebirth, making it a popular choice for weddings and events."
    ],
    light_requirements: "Full sun to partial shade",
    watering_cycle: "Weekly",
    origin_country: "Southern Africa",
    scientific_name: "Zantedeschia"
  },
  {
    id: 181,
    name: "Fiddle Leaf Fig",
    category: "IndoorPlants",
    images: [
      "fiddle_leaf_fig_1.jpg",
      "fiddle_leaf_fig_2.jpg"
    ],
    price: 29.99,
    sku: "PP-PLT-181",
    description: [
      "Large, violin-shaped leaves that add a striking presence to any room.",
      "Prefers bright, indirect light to thrive and maintain its vibrant green color.",
      "Known for its air-purifying qualities, making it an excellent addition to indoor spaces."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly",
    origin_country: "West Africa",
    scientific_name: "Ficus lyrata"
  },
  {
    id: 182,
    name: "Japanese Maple",
    category: "Trees",
    images: [
      "japanese_maple_1.jpg",
      "japanese_maple_2.jpg"
    ],
    price: 59.99,
    sku: "PP-TRE-182",
    description: [
      "A small, ornamental tree with finely textured leaves that change color with the seasons.",
      "Perfect for gardens and patios.",
      "Known for its vibrant fall colors."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Weekly",
    origin_country: "Japan",
    scientific_name: "Acer palmatum"
  },
  {
    id: 183,
    name: "Golden Pothos",
    category: "IndoorPlants",
    images: [
      "golden_pothos_1.jpg",
      "golden_pothos_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-183",
    description: [
      "A resilient indoor plant with vibrant green and yellow leaves.",
      "Perfect for beginners due to its easy-care nature.",
      "Thrives in low to bright indirect light and purifies the air."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "Solomon Islands",
    scientific_name: "Epipremnum aureum"
  },
  {
    id: 184,
    name: "Maidenhair Fern",
    category: "Ferns",
    images: [
      "maidenhair_fern_1.jpg",
      "maidenhair_fern_2.jpg"
    ],
    price: 17.99,
    sku: "PP-FRN-184",
    description: [
      "A delicate fern with soft, feathery fronds that add elegance to any space.",
      "Thrives in indirect light and high humidity, making it perfect for bathrooms or terrariums.",
      "Requires consistently moist soil, but not waterlogged."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Keep soil moist",
    origin_country: "Tropical regions",
    scientific_name: "Adiantum"
  },
  {
    id: 185,
    name: "Snake Plant",
    category: "IndoorPlants",
    images: [
      "snake_plant_1.jpg",
      "snake_plant_2.jpg"
    ],
    price: 19.99,
    sku: "PP-PLT-185",
    description: [
      "One of the easiest houseplants to care for, thriving on neglect.",
      "Can survive in low light conditions, but also does well in bright light.",
      "Known for its ability to filter indoor air, removing toxins such as formaldehyde."
    ],
    light_requirements: "Low to bright light",
    watering_cycle: "Every 2 weeks",
    origin_country: "West Africa",
    scientific_name: "Sansevieria trifasciata"
  },
  {
    id: 186,
    name: "Venus Flytrap",
    category: "CarnivorousPlants",
    images: [
      "venus_flytrap_1.jpg",
      "venus_flytrap_2.jpg"
    ],
    price: 14.99,
    sku: "PP-CRN-186",
    description: [
      "A fascinating carnivorous plant that captures and digests insects.",
      "Requires bright, direct light and high humidity to maintain its health and trapping ability.",
      "Grows best in a soil mixture of sphagnum moss and sand or perlite."
    ],
    light_requirements: "Bright, direct light",
    watering_cycle: "Keep soil moist",
    origin_country: "United States",
    scientific_name: "Dionaea muscipula"
  },
  {
    id: 187,
    name: "Hydrangea",
    category: "FloweringShrubs",
    images: [
      "hydrangea_1.jpg",
      "hydrangea_2.jpg"
    ],
    price: 29.99,
    sku: "PP-FLS-187",
    description: [
      "A beautiful flowering shrub known for its large clusters of blooms that change color based on soil pH.",
      "Prefers partial shade to full sun, with morning sun and afternoon shade being ideal.",
      "Requires regular watering, especially during dry periods, to keep the soil consistently moist."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Every 3-4 days",
    origin_country: "Asia",
    scientific_name: "Hydrangea macrophylla"
  },
  {
    id: 188,
    name: "Rosemary",
    category: "Herbs",
    images: [
      "rosemary_1.jpg",
      "rosemary_2.jpg"
    ],
    price: 7.99,
    sku: "PP-HRB-188",
    description: [
      "An aromatic herb that is a staple in Mediterranean cuisine.",
      "Thrives in full sun, making it ideal for outdoor herb gardens or sunny windowsills.",
      "Known for its needle-like leaves and woody stems, which are highly fragrant."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 10 days",
    origin_country: "Mediterranean",
    scientific_name: "Salvia rosmarinus"
  },
  {
    id: 189,
    name: "Golden Barrel Cactus",
    category: "Cacti",
    images: [
      "golden_barrel_cactus_1.jpg",
      "golden_barrel_cactus_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CAC-189",
    description: [
      "A stunning spherical cactus with golden spines that make it a striking centerpiece.",
      "Prefers full sun and can be placed outdoors or near a sunny window.",
      "An excellent plant for beginners due to its low maintenance."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 4 weeks",
    origin_country: "Mexico",
    scientific_name: "Echinocactus grusonii"
  },
  {
    id: 190,
    name: "Bonsai Soil Mix",
    category: "Soils",
    images: [
      "bonsai_soil_mix_1.jpg"
    ],
    price: 14.99,
    sku: "PP-SOIL-190",
    description: [
      "A specialized soil mix formulated for bonsai trees, ensuring proper drainage and root development.",
      "Ideal for all types of bonsai species.",
      "Promotes strong root systems and healthy growth."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Japan",
    scientific_name: "N/A"
  },
  {
    id: 191,
    name: "Succulent Potting Mix",
    category: "Soils",
    images: [
      "succulent_potting_mix_1.jpg"
    ],
    price: 9.99,
    sku: "PP-SOIL-191",
    description: [
      "A specially formulated potting mix for succulents and cacti.",
      "Promotes drainage and prevents root rot.",
      "Enriched with organic matter for healthy growth."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 192,
    name: "Organic Fertilizer",
    category: "Soils",
    images: [
      "organic_fertilizer_1.jpg"
    ],
    price: 19.99,
    sku: "PP-SOIL-192",
    description: [
      "A balanced, organic fertilizer that promotes healthy plant growth.",
      "Suitable for all types of plants, including vegetables, flowers, and herbs.",
      "Contains natural ingredients that improve soil fertility."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 193,
    name: "Garden Hand Trowel",
    category: "GardeningTools",
    images: [
      "garden_hand_trowel_1.jpg"
    ],
    price: 8.99,
    sku: "PP-TOOL-193",
    description: [
      "A durable hand trowel for planting and transplanting in the garden.",
      "Ergonomically designed handle for comfort and efficiency.",
      "Made of rust-resistant stainless steel."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "China",
    scientific_name: "N/A"
  },
  {
    id: 194,
    name: "Bonsai Scissors",
    category: "GardeningTools",
    images: [
      "bonsai_scissors_1.jpg"
    ],
    price: 24.99,
    sku: "PP-TOOL-194",
    description: [
      "High-precision scissors designed for pruning bonsai trees.",
      "Made of durable, rust-resistant steel.",
      "Ergonomic design for comfortable and precise cuts."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Japan",
    scientific_name: "N/A"
  },
  {
    id: 195,
    name: "Pruning Shears",
    category: "GardeningTools",
    images: [
      "pruning_shears_1.jpg"
    ],
    price: 19.99,
    sku: "PP-TOOL-195",
    description: [
      "High-quality pruning shears with sharp, stainless steel blades.",
      "Ergonomic handle for comfortable use.",
      "Perfect for trimming and shaping plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Germany",
    scientific_name: "N/A"
  },
  {
    id: 196,
    name: "Terracotta Pot",
    category: "GardeningTools",
    images: [
      "terracotta_pot_1.jpg"
    ],
    price: 5.99,
    sku: "PP-TOOL-196",
    description: [
      "A classic terracotta pot perfect for indoor and outdoor plants.",
      "Provides excellent air circulation and drainage.",
      "Available in various sizes to fit different plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Italy",
    scientific_name: "N/A"
  },
  {
    id: 197,
    name: "Bamboo Stakes",
    category: "GardeningTools",
    images: [
      "bamboo_stakes_1.jpg"
    ],
    price: 7.99,
    sku: "PP-TOOL-197",
    description: [
      "Strong, eco-friendly bamboo stakes for supporting climbing plants and vegetables.",
      "Perfect for outdoor gardens and container plants.",
      "Available in various sizes to suit different plants."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Vietnam",
    scientific_name: "N/A"
  },
  {
    id: 198,
    name: "Watering Can",
    category: "GardeningTools",
    images: [
      "watering_can_1.jpg"
    ],
    price: 12.99,
    sku: "PP-TOOL-198",
    description: [
      "A stylish and functional watering can with a long spout for easy watering.",
      "Ideal for both indoor and outdoor plants.",
      "Made of durable, rust-resistant material."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "China",
    scientific_name: "N/A"
  },
  {
    id: 199,
    name: "Garden Shovel",
    category: "GardeningTools",
    images: [
      "garden_shovel_1.jpg"
    ],
    price: 15.99,
    sku: "PP-TOOL-199",
    description: [
      "A heavy-duty garden shovel perfect for digging and transplanting.",
      "Made with a solid wood handle and durable steel blade.",
      "Designed for both amateur and professional gardeners."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 200,
    name: "Hand Rake",
    category: "GardeningTools",
    images: [
      "hand_rake_1.jpg"
    ],
    price: 9.99,
    sku: "PP-TOOL-200",
    description: [
      "A compact hand rake for loosening soil and clearing garden debris.",
      "Ergonomic design for comfort and efficiency.",
      "Made of rust-resistant metal."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "Germany",
    scientific_name: "N/A"
  },
  {
    id: 201,
    name: "Lawn Fertilizer",
    category: "Soils",
    images: [
      "lawn_fertilizer_1.jpg"
    ],
    price: 24.99,
    sku: "PP-SOIL-201",
    description: [
      "A high-quality lawn fertilizer that promotes lush, green growth.",
      "Contains essential nutrients for healthy lawn development.",
      "Suitable for all grass types."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 202,
    name: "Bird of Paradise",
    category: "Tropicals",
    images: [
      "bird_of_paradise_1.jpg",
      "bird_of_paradise_2.jpg"
    ],
    price: 29.99,
    sku: "PP-TRO-202",
    description: [
      "A tropical plant known for its large, banana-like leaves and striking bird-shaped flowers.",
      "Prefers full sun and well-drained soil, making it ideal for bright indoor spaces or outdoor gardens in warm climates.",
      "Adds a dramatic and exotic touch to any setting with its unique appearance and vibrant blooms."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 5-7 days",
    origin_country: "South Africa",
    scientific_name: "Strelitzia reginae"
  },
  {
    id: 203,
    name: "Basil",
    category: "Herbs",
    images: [
      "basil_1.jpg",
      "basil_2.jpg"
    ],
    price: 6.99,
    sku: "PP-HRB-203",
    description: [
      "A fragrant herb commonly used in Italian and Southeast Asian cuisines.",
      "Prefers full sun and should be placed in a spot with at least 6 hours of sunlight.",
      "Known for its large, aromatic leaves that can be harvested regularly."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 5-7 days",
    origin_country: "India",
    scientific_name: "Ocimum basilicum"
  },
  {
    id: 204,
    name: "Jade Plant",
    category: "Succulents",
    images: [
      "jade_plant_1.jpg",
      "jade_plant_2.jpg"
    ],
    price: 12.99,
    sku: "PP-SUC-204",
    description: [
      "A popular succulent known for its thick, fleshy leaves and tree-like appearance.",
      "Prefers bright light, ideally placed on a windowsill or well-lit area.",
      "Should be watered sparingly, approximately once every 2-3 weeks, avoiding overwatering."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "South Africa",
    scientific_name: "Crassula ovata"
  },
  {
    id: 205,
    name: "Monstera Deliciosa",
    category: "IndoorPlants",
    images: [
      "monstera_deliciosa_1.jpg",
      "monstera_deliciosa_2.jpg"
    ],
    price: 34.99,
    sku: "PP-PLT-205",
    description: [
      "Famous for its large, split leaves that create a bold statement in any room.",
      "Requires bright, indirect light to maintain its lush appearance.",
      "Likes to be watered every 10 days, with soil kept slightly moist but not soggy."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 10 days",
    origin_country: "Mexico, Panama",
    scientific_name: "Monstera deliciosa"
  },
  {
    id: 206,
    name: "Lavender 'Provence'",
    category: "Herbs",
    images: [
      "lavender_provence_1.jpg",
      "lavender_provence_2.jpg"
    ],
    price: 10.99,
    sku: "PP-HRB-206",
    description: [
      "A fragrant herb variety known for its long stems and deep purple flowers.",
      "Ideal for creating hedges or borders in herb gardens.",
      "Thrives in full sun and well-drained soil."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula x intermedia 'Provence'"
  },
  {
    id: 207,
    name: "Spider Plant",
    category: "IndoorPlants",
    images: [
      "spider_plant_1.jpg",
      "spider_plant_2.jpg"
    ],
    price: 10.99,
    sku: "PP-PLT-207",
    description: [
      "An easy-care indoor plant with long, arching leaves that are green with white stripes.",
      "Perfect for hanging baskets and air purification.",
      "Thrives in indirect light and needs minimal attention."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "South Africa",
    scientific_name: "Chlorophytum comosum"
  },
  {
    id: 208,
    name: "Tillandsia",
    category: "AirPlants",
    images: [
      "tillandsia_1.jpg",
      "tillandsia_2.jpg"
    ],
    price: 8.99,
    sku: "PP-AIR-208",
    description: [
      "A versatile air plant that absorbs moisture and nutrients through its leaves, requiring no soil to grow.",
      "Prefers bright, indirect light and regular misting to maintain humidity.",
      "Known for its adaptability and low maintenance, ideal for modern home decor and office settings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly misting and soaking",
    origin_country: "Central and South America",
    scientific_name: "Tillandsia"
  },
  {
    id: 209,
    name: "Fiddle Leaf Fig",
    category: "IndoorPlants",
    images: [
      "fiddle_leaf_fig_1.jpg",
      "fiddle_leaf_fig_2.jpg"
    ],
    price: 29.99,
    sku: "PP-PLT-209",
    description: [
      "Large, violin-shaped leaves that add a striking presence to any room.",
      "Prefers bright, indirect light to thrive and maintain its vibrant green color.",
      "Known for its air-purifying qualities, making it an excellent addition to indoor spaces."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly",
    origin_country: "West Africa",
    scientific_name: "Ficus lyrata"
  },
  {
    id: 210,
    name: "Golden Barrel Cactus",
    category: "Cacti",
    images: [
      "golden_barrel_cactus_1.jpg",
      "golden_barrel_cactus_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CAC-210",
    description: [
      "A stunning spherical cactus with golden spines that make it a striking centerpiece.",
      "Prefers full sun and can be placed outdoors or near a sunny window.",
      "An excellent plant for beginners due to its low maintenance."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 4 weeks",
    origin_country: "Mexico",
    scientific_name: "Echinocactus grusonii"
  },
  {
    id: 211,
    name: "Jade Plant",
    category: "Succulents",
    images: [
      "jade_plant_1.jpg",
      "jade_plant_2.jpg"
    ],
    price: 12.99,
    sku: "PP-SUC-211",
    description: [
      "A popular succulent known for its thick, fleshy leaves and tree-like appearance.",
      "Prefers bright light, ideally placed on a windowsill or well-lit area.",
      "Should be watered sparingly, approximately once every 2-3 weeks, avoiding overwatering."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "South Africa",
    scientific_name: "Crassula ovata"
  },
  {
    id: 212,
    name: "Lavender 'Hidcote'",
    category: "Herbs",
    images: [
      "lavender_hidcote_1.jpg",
      "lavender_hidcote_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-212",
    description: [
      "A compact variety of lavender with deep purple flowers and aromatic foliage.",
      "Thrives in full sun and well-drained soil, making it ideal for herb gardens and borders.",
      "Popular in herb gardens and for crafting scented sachets."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Hidcote'"
  },
  {
    id: 213,
    name: "Blue Star Fern",
    category: "Ferns",
    images: [
      "blue_star_fern_1.jpg",
      "blue_star_fern_2.jpg"
    ],
    price: 19.99,
    sku: "PP-FRN-213",
    description: [
      "An attractive fern known for its distinctive blue-green foliage and unique growth habit.",
      "Thrives in low to bright indirect light and requires a well-drained, moisture-retentive soil.",
      "Adds a striking, exotic touch to indoor spaces with its eye-catching color and form."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "Tropical regions",
    scientific_name: "Phlebodium aureum"
  },
  {
    id: 214,
    name: "Spider Plant",
    category: "IndoorPlants",
    images: [
      "spider_plant_1.jpg",
      "spider_plant_2.jpg"
    ],
    price: 10.99,
    sku: "PP-PLT-214",
    description: [
      "An easy-care indoor plant with long, arching leaves that are green with white stripes.",
      "Perfect for hanging baskets and air purification.",
      "Thrives in indirect light and needs minimal attention."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "South Africa",
    scientific_name: "Chlorophytum comosum"
  },
  {
    id: 215,
    name: "Monstera Deliciosa",
    category: "IndoorPlants",
    images: [
      "monstera_deliciosa_1.jpg",
      "monstera_deliciosa_2.jpg"
    ],
    price: 34.99,
    sku: "PP-PLT-215",
    description: [
      "Famous for its large, split leaves that create a bold statement in any room.",
      "Requires bright, indirect light to maintain its lush appearance.",
      "Likes to be watered every 10 days, with soil kept slightly moist but not soggy."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 10 days",
    origin_country: "Mexico, Panama",
    scientific_name: "Monstera deliciosa"
  },
  {
    id: 216,
    name: "Dwarf Jade Bonsai",
    category: "Bonsai",
    images: [
      "dwarf_jade_bonsai_1.jpg",
      "dwarf_jade_bonsai_2.jpg"
    ],
    price: 45.99,
    sku: "PP-BNS-216",
    description: [
      "A miniature bonsai with thick, glossy leaves, known for its compact size and longevity.",
      "Thrives in bright light and should be placed near a sunny window or under grow lights.",
      "Symbolizes good fortune and is considered a traditional indoor bonsai plant."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2 weeks",
    origin_country: "South Africa",
    scientific_name: "Portulacaria afra"
  },
  {
    id: 217,
    name: "Peach Tree",
    category: "Trees",
    images: [
      "peach_tree_1.jpg",
      "peach_tree_2.jpg"
    ],
    price: 45.99,
    sku: "PP-TRE-217",
    description: [
      "A deciduous fruit tree known for its juicy, sweet peaches that are harvested in summer.",
      "Prefers full sun and well-drained soil.",
      "Loved for its spring blossoms and delicious fruit."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Weekly",
    origin_country: "China",
    scientific_name: "Prunus persica"
  },
  {
    id: 218,
    name: "Orchid Bark Mix",
    category: "Soils",
    images: [
      "orchid_bark_mix_1.jpg"
    ],
    price: 14.99,
    sku: "PP-SOIL-218",
    description: [
      "A premium bark mix for orchids, providing excellent drainage and aeration.",
      "Suitable for a variety of orchid species.",
      "Helps promote healthy root growth and vibrant blooms."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 219,
    name: "Blue Fescue Grass",
    category: "OrnamentalGrasses",
    images: [
      "blue_fescue_grass_1.jpg",
      "blue_fescue_grass_2.jpg"
    ],
    price: 9.99,
    sku: "PP-ORN-219",
    description: [
      "A compact ornamental grass with striking blue-gray foliage.",
      "Thrives in full sun and is drought-tolerant once established, making it ideal for low-maintenance gardens.",
      "Perfect for borders, rock gardens, or as a groundcover to add texture and color."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 2 weeks",
    origin_country: "Europe",
    scientific_name: "Festuca glauca"
  },
  {
    id: 220,
    name: "Lavender 'Munstead'",
    category: "Herbs",
    images: [
      "lavender_munstead_1.jpg",
      "lavender_munstead_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-220",
    description: [
      "A compact variety of lavender known for its aromatic foliage and deep purple flowers.",
      "Thrives in full sun and well-drained soil, suitable for herb gardens, borders, and rock gardens.",
      "Requires minimal watering once established, about once every 7-10 days."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Munstead'"
  },
  {
    id: 221,
    name: "Basil",
    category: "Herbs",
    images: [
      "basil_1.jpg",
      "basil_2.jpg"
    ],
    price: 6.99,
    sku: "PP-HRB-221",
    description: [
      "A fragrant herb commonly used in Italian and Southeast Asian cuisines.",
      "Prefers full sun and should be placed in a spot with at least 6 hours of sunlight.",
      "Known for its large, aromatic leaves that can be harvested regularly."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 5-7 days",
    origin_country: "India",
    scientific_name: "Ocimum basilicum"
  },
  {
    id: 222,
    name: "Bird of Paradise",
    category: "Tropicals",
    images: [
      "bird_of_paradise_1.jpg",
      "bird_of_paradise_2.jpg"
    ],
    price: 29.99,
    sku: "PP-TRO-222",
    description: [
      "A tropical plant known for its large, banana-like leaves and striking bird-shaped flowers.",
      "Prefers full sun and well-drained soil, making it ideal for bright indoor spaces or outdoor gardens in warm climates.",
      "Adds a dramatic and exotic touch to any setting with its unique appearance and vibrant blooms."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 5-7 days",
    origin_country: "South Africa",
    scientific_name: "Strelitzia reginae"
  },
  {
    id: 223,
    name: "Rubber Plant",
    category: "IndoorPlants",
    images: [
      "rubber_plant_1.jpg",
      "rubber_plant_2.jpg"
    ],
    price: 24.99,
    sku: "PP-PLT-223",
    description: [
      "A popular indoor plant known for its glossy, dark green leaves and upright growth habit.",
      "Thrives in bright, indirect light and well-drained soil, making it suitable for indoor settings.",
      "Adds a touch of elegance and greenery to indoor spaces with its bold foliage and compact form."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 7 days",
    origin_country: "Southeast Asia",
    scientific_name: "Ficus elastica"
  },
  {
    id: 224,
    name: "Golden Barrel Cactus",
    category: "Cacti",
    images: [
      "golden_barrel_cactus_1.jpg",
      "golden_barrel_cactus_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CAC-224",
    description: [
      "A stunning spherical cactus with golden spines that make it a striking centerpiece.",
      "Prefers full sun and can be placed outdoors or near a sunny window.",
      "An excellent plant for beginners due to its low maintenance."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 4 weeks",
    origin_country: "Mexico",
    scientific_name: "Echinocactus grusonii"
  },
  {
    id: 225,
    name: "Maidenhair Fern",
    category: "Ferns",
    images: [
      "maidenhair_fern_1.jpg",
      "maidenhair_fern_2.jpg"
    ],
    price: 17.99,
    sku: "PP-FRN-225",
    description: [
      "A delicate fern with soft, feathery fronds that add elegance to any space.",
      "Thrives in indirect light and high humidity, making it perfect for bathrooms or terrariums.",
      "Requires consistently moist soil, but not waterlogged."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Keep soil moist",
    origin_country: "Tropical regions",
    scientific_name: "Adiantum"
  },
  {
    id: 226,
    name: "Wisteria",
    category: "Climbers",
    images: [
      "wisteria_1.jpg",
      "wisteria_2.jpg"
    ],
    price: 34.99,
    sku: "PP-CLM-226",
    description: [
      "A climbing plant known for its cascading clusters of fragrant, lavender-blue flowers.",
      "Prefers full sun and can be trained to grow on pergolas, walls, and trellises.",
      "Popular for creating shaded walkways and adding a romantic touch to gardens."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Weekly",
    origin_country: "East Asia",
    scientific_name: "Wisteria sinensis"
  },
  {
    id: 227,
    name: "Succulent Potting Mix",
    category: "Soils",
    images: [
      "succulent_potting_mix_1.jpg"
    ],
    price: 9.99,
    sku: "PP-SOIL-227",
    description: [
      "A specially formulated potting mix for succulents and cacti.",
      "Promotes drainage and prevents root rot.",
      "Enriched with organic matter for healthy growth."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 228,
    name: "Orchid Bark Mix",
    category: "Soils",
    images: [
      "orchid_bark_mix_1.jpg"
    ],
    price: 14.99,
    sku: "PP-SOIL-228",
    description: [
      "A premium bark mix for orchids, providing excellent drainage and aeration.",
      "Suitable for a variety of orchid species.",
      "Helps promote healthy root growth and vibrant blooms."
    ],
    light_requirements: "N/A",
    watering_cycle: "N/A",
    origin_country: "USA",
    scientific_name: "N/A"
  },
  {
    id: 229,
    name: "Ficus Bonsai",
    category: "Bonsai",
    images: [
      "ficus_bonsai_1.jpg",
      "ficus_bonsai_2.jpg"
    ],
    price: 49.99,
    sku: "PP-BNS-229",
    description: [
      "A popular bonsai variety known for its resilience and ease of care.",
      "Thrives in bright, indirect light, making it ideal for indoor environments.",
      "Requires regular watering, allowing the soil to dry slightly between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly",
    origin_country: "Asia",
    scientific_name: "Ficus microcarpa"
  },
  {
    id: 230,
    name: "Golden Pothos",
    category: "IndoorPlants",
    images: [
      "golden_pothos_1.jpg",
      "golden_pothos_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-230",
    description: [
      "A resilient indoor plant with vibrant green and yellow leaves.",
      "Perfect for beginners due to its easy-care nature.",
      "Thrives in low to bright indirect light and purifies the air."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "Solomon Islands",
    scientific_name: "Epipremnum aureum"
  },
  {
    id: 231,
    name: "Spider Plant",
    category: "IndoorPlants",
    images: [
      "spider_plant_1.jpg",
      "spider_plant_2.jpg"
    ],
    price: 10.99,
    sku: "PP-PLT-231",
    description: [
      "An easy-care indoor plant with long, arching leaves that are green with white stripes.",
      "Perfect for hanging baskets and air purification.",
      "Thrives in indirect light and needs minimal attention."
    ],
    light_requirements: "Indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "South Africa",
    scientific_name: "Chlorophytum comosum"
  },
  {
    id: 232,
    name: "Rubber Plant",
    category: "IndoorPlants",
    images: [
      "rubber_plant_1.jpg",
      "rubber_plant_2.jpg"
    ],
    price: 24.99,
    sku: "PP-PLT-232",
    description: [
      "A popular indoor plant known for its glossy, dark green leaves and upright growth habit.",
      "Thrives in bright, indirect light and well-drained soil, making it suitable for indoor settings.",
      "Adds a touch of elegance and greenery to indoor spaces with its bold foliage and compact form."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 7 days",
    origin_country: "Southeast Asia",
    scientific_name: "Ficus elastica"
  },
  {
    id: 233,
    name: "Snake Plant",
    category: "IndoorPlants",
    images: [
      "snake_plant_1.jpg",
      "snake_plant_2.jpg"
    ],
    price: 19.99,
    sku: "PP-PLT-233",
    description: [
      "One of the easiest houseplants to care for, thriving on neglect.",
      "Can survive in low light conditions, but also does well in bright light.",
      "Known for its ability to filter indoor air, removing toxins such as formaldehyde."
    ],
    light_requirements: "Low to bright light",
    watering_cycle: "Every 2 weeks",
    origin_country: "West Africa",
    scientific_name: "Sansevieria trifasciata"
  },
  {
    id: 234,
    name: "Jade Plant",
    category: "Succulents",
    images: [
      "jade_plant_1.jpg",
      "jade_plant_2.jpg"
    ],
    price: 12.99,
    sku: "PP-SUC-234",
    description: [
      "A popular succulent known for its thick, fleshy leaves and tree-like appearance.",
      "Prefers bright light, ideally placed on a windowsill or well-lit area.",
      "Should be watered sparingly, approximately once every 2-3 weeks, avoiding overwatering."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2-3 weeks",
    origin_country: "South Africa",
    scientific_name: "Crassula ovata"
  },
  {
    id: 235,
    name: "Monstera Deliciosa",
    category: "IndoorPlants",
    images: [
      "monstera_deliciosa_1.jpg",
      "monstera_deliciosa_2.jpg"
    ],
    price: 34.99,
    sku: "PP-PLT-235",
    description: [
      "Famous for its large, split leaves that create a bold statement in any room.",
      "Requires bright, indirect light to maintain its lush appearance.",
      "Likes to be watered every 10 days, with soil kept slightly moist but not soggy."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 10 days",
    origin_country: "Mexico, Panama",
    scientific_name: "Monstera deliciosa"
  },
  {
    id: 236,
    name: "Dwarf Jade Bonsai",
    category: "Bonsai",
    images: [
      "dwarf_jade_bonsai_1.jpg",
      "dwarf_jade_bonsai_2.jpg"
    ],
    price: 45.99,
    sku: "PP-BNS-236",
    description: [
      "A miniature bonsai with thick, glossy leaves, known for its compact size and longevity.",
      "Thrives in bright light and should be placed near a sunny window or under grow lights.",
      "Symbolizes good fortune and is considered a traditional indoor bonsai plant."
    ],
    light_requirements: "Bright light",
    watering_cycle: "Every 2 weeks",
    origin_country: "South Africa",
    scientific_name: "Portulacaria afra"
  },
  {
    id: 237,
    name: "Fiddle Leaf Fig",
    category: "IndoorPlants",
    images: [
      "fiddle_leaf_fig_1.jpg",
      "fiddle_leaf_fig_2.jpg"
    ],
    price: 29.99,
    sku: "PP-PLT-237",
    description: [
      "Large, violin-shaped leaves that add a striking presence to any room.",
      "Prefers bright, indirect light to thrive and maintain its vibrant green color.",
      "Known for its air-purifying qualities, making it an excellent addition to indoor spaces."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly",
    origin_country: "West Africa",
    scientific_name: "Ficus lyrata"
  },
  {
    id: 238,
    name: "Tillandsia",
    category: "AirPlants",
    images: [
      "tillandsia_1.jpg",
      "tillandsia_2.jpg"
    ],
    price: 8.99,
    sku: "PP-AIR-238",
    description: [
      "A versatile air plant that absorbs moisture and nutrients through its leaves, requiring no soil to grow.",
      "Prefers bright, indirect light and regular misting to maintain humidity.",
      "Known for its adaptability and low maintenance, ideal for modern home decor and office settings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly misting and soaking",
    origin_country: "Central and South America",
    scientific_name: "Tillandsia"
  },
  {
    id: 239,
    name: "Golden Barrel Cactus",
    category: "Cacti",
    images: [
      "golden_barrel_cactus_1.jpg",
      "golden_barrel_cactus_2.jpg"
    ],
    price: 15.99,
    sku: "PP-CAC-239",
    description: [
      "A stunning spherical cactus with golden spines that make it a striking centerpiece.",
      "Prefers full sun and can be placed outdoors or near a sunny window.",
      "An excellent plant for beginners due to its low maintenance."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 4 weeks",
    origin_country: "Mexico",
    scientific_name: "Echinocactus grusonii"
  },
  {
    id: 240,
    name: "Blue Star Fern",
    category: "Ferns",
    images: [
      "blue_star_fern_1.jpg",
      "blue_star_fern_2.jpg"
    ],
    price: 19.99,
    sku: "PP-FRN-240",
    description: [
      "An attractive fern known for its distinctive blue-green foliage and unique growth habit.",
      "Thrives in low to bright indirect light and requires a well-drained, moisture-retentive soil.",
      "Adds a striking, exotic touch to indoor spaces with its eye-catching color and form."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 5-7 days",
    origin_country: "Tropical regions",
    scientific_name: "Phlebodium aureum"
  },
  {
    id: 241,
    name: "Monstera Deliciosa",
    category: "IndoorPlants",
    images: [
      "monstera_deliciosa_1.jpg",
      "monstera_deliciosa_2.jpg"
    ],
    price: 34.99,
    sku: "PP-PLT-241",
    description: [
      "Famous for its large, split leaves that create a bold statement in any room.",
      "Requires bright, indirect light to maintain its lush appearance.",
      "Likes to be watered every 10 days, with soil kept slightly moist but not soggy."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 10 days",
    origin_country: "Mexico, Panama",
    scientific_name: "Monstera deliciosa"
  },
  {
    id: 242,
    name: "Japanese Maple",
    category: "Trees",
    images: [
      "japanese_maple_1.jpg",
      "japanese_maple_2.jpg"
    ],
    price: 59.99,
    sku: "PP-TRE-242",
    description: [
      "A small, ornamental tree with finely textured leaves that change color with the seasons.",
      "Perfect for gardens and patios.",
      "Known for its vibrant fall colors."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Weekly",
    origin_country: "Japan",
    scientific_name: "Acer palmatum"
  },
  {
    id: 243,
    name: "Rubber Plant",
    category: "IndoorPlants",
    images: [
      "rubber_plant_1.jpg",
      "rubber_plant_2.jpg"
    ],
    price: 24.99,
    sku: "PP-PLT-243",
    description: [
      "A popular indoor plant known for its glossy, dark green leaves and upright growth habit.",
      "Thrives in bright, indirect light and well-drained soil, making it suitable for indoor settings.",
      "Adds a touch of elegance and greenery to indoor spaces with its bold foliage and compact form."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Every 7 days",
    origin_country: "Southeast Asia",
    scientific_name: "Ficus elastica"
  },
  {
    id: 244,
    name: "Tillandsia",
    category: "AirPlants",
    images: [
      "tillandsia_1.jpg",
      "tillandsia_2.jpg"
    ],
    price: 8.99,
    sku: "PP-AIR-244",
    description: [
      "A versatile air plant that absorbs moisture and nutrients through its leaves, requiring no soil to grow.",
      "Prefers bright, indirect light and regular misting to maintain humidity.",
      "Known for its adaptability and low maintenance, ideal for modern home decor and office settings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly misting and soaking",
    origin_country: "Central and South America",
    scientific_name: "Tillandsia"
  },
  {
    id: 245,
    name: "Golden Pothos",
    category: "IndoorPlants",
    images: [
      "golden_pothos_1.jpg",
      "golden_pothos_2.jpg"
    ],
    price: 12.99,
    sku: "PP-PLT-245",
    description: [
      "A resilient indoor plant with vibrant green and yellow leaves.",
      "Perfect for beginners due to its easy-care nature.",
      "Thrives in low to bright indirect light and purifies the air."
    ],
    light_requirements: "Low to bright indirect light",
    watering_cycle: "Every 1-2 weeks",
    origin_country: "Solomon Islands",
    scientific_name: "Epipremnum aureum"
  },
  {
    id: 246,
    name: "Wisteria",
    category: "Climbers",
    images: [
      "wisteria_1.jpg",
      "wisteria_2.jpg"
    ],
    price: 34.99,
    sku: "PP-CLM-246",
    description: [
      "A climbing plant known for its cascading clusters of fragrant, lavender-blue flowers.",
      "Prefers full sun and can be trained to grow on pergolas, walls, and trellises.",
      "Popular for creating shaded walkways and adding a romantic touch to gardens."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Weekly",
    origin_country: "East Asia",
    scientific_name: "Wisteria sinensis"
  },
  {
    id: 247,
    name: "Hydrangea",
    category: "FloweringShrubs",
    images: [
      "hydrangea_1.jpg",
      "hydrangea_2.jpg"
    ],
    price: 29.99,
    sku: "PP-FLS-247",
    description: [
      "A beautiful flowering shrub known for its large clusters of blooms that change color based on soil pH.",
      "Prefers partial shade to full sun, with morning sun and afternoon shade being ideal.",
      "Requires regular watering, especially during dry periods, to keep the soil consistently moist."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Every 3-4 days",
    origin_country: "Asia",
    scientific_name: "Hydrangea macrophylla"
  },
  {
    id: 248,
    name: "Ficus Bonsai",
    category: "Bonsai",
    images: [
      "ficus_bonsai_1.jpg",
      "ficus_bonsai_2.jpg"
    ],
    price: 49.99,
    sku: "PP-BNS-248",
    description: [
      "A popular bonsai variety known for its resilience and ease of care.",
      "Thrives in bright, indirect light, making it ideal for indoor environments.",
      "Requires regular watering, allowing the soil to dry slightly between waterings."
    ],
    light_requirements: "Bright, indirect light",
    watering_cycle: "Weekly",
    origin_country: "Asia",
    scientific_name: "Ficus microcarpa"
  },
  {
    id: 249,
    name: "Lavender 'Munstead'",
    category: "Herbs",
    images: [
      "lavender_munstead_1.jpg",
      "lavender_munstead_2.jpg"
    ],
    price: 9.99,
    sku: "PP-HRB-249",
    description: [
      "A compact variety of lavender known for its aromatic foliage and deep purple flowers.",
      "Thrives in full sun and well-drained soil, suitable for herb gardens, borders, and rock gardens.",
      "Requires minimal watering once established, about once every 7-10 days."
    ],
    light_requirements: "Full sun",
    watering_cycle: "Every 7-10 days",
    origin_country: "Mediterranean",
    scientific_name: "Lavandula angustifolia 'Munstead'"
  },
  {
    id: 250,
    name: "Japanese Maple",
    category: "Trees",
    images: [
      "japanese_maple_1.jpg",
      "japanese_maple_2.jpg"
    ],
    price: 59.99,
    sku: "PP-TRE-250",
    description: [
      "A small, ornamental tree with finely textured leaves that change color with the seasons.",
      "Perfect for gardens and patios.",
      "Known for its vibrant fall colors."
    ],
    light_requirements: "Partial shade to full sun",
    watering_cycle: "Weekly",
    origin_country: "Japan",
    scientific_name: "Acer palmatum"
  }
]