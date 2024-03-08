// set center coordinates and oom level of map
let usCenterCoordinates = [39.8282, -98.5795]
let zoomLevel = 4

// create map
let map = L.map('bridges-map').setView(usCenterCoordinates, zoomLevel)

// add tiles to map to make it visible
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// build array of objects to store bridge data
bridges = [
    {"name": "Verrazano-Narrows Bridge", "span": 1298.4, "span_text": "1,298.4m", "city": "New York", "location": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "span": 1280.2, "span_text": "1,280.2m", "city": "San Francisco - Marin", "location": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "span": 1158.0, "span_text": "1,158.0m", "city": "Mackinaw - St Ignace", "location": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "span": 1067.0, "span_text": "1,067.0m", "city": "New York - New Jersey", "location": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "span": 853.44, "span_text": "853.44m", "city": "Tacoma - Kitsap", "location": [47.2690, -122.5517]}
]

// loop over bridges array to create markers for each bridge object
bridges.forEach( function(bridge) {
    let popUpText = `<b>${bridge.name}</b><br>City: ${bridge.city}<br>Span length: ${bridge.span_text}`
    L.marker(bridge.location)
        .bindPopup(popUpText)
        .addTo(map)
})

