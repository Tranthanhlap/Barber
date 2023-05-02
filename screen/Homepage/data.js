const Images = [
    { uri: "https://i.imgur.com/sNam9iJ.jpg" },
    { uri: "https://i.imgur.com/N7rlQYt.jpg" },
    { uri: "https://i.imgur.com/UDrH0wm.jpg" },
    { uri: "https://i.imgur.com/Ka8kNST.jpg" },
  ];
  
state = {
    markers: [
        {
            latitude:10.850822, 
            longitude: 106.754940,
            title: "Amazing Food Place",
            description: "This is the best food place",
            image: Images[0].image,
            rating: 4,
            reviews: 99,
           
        },
        {
          
            latitude:10.851316,
            longitude: 106.754770,
    
          title: "Second Amazing Food Place",
          description: "This is the second best food place",
          image: Images[1].image,
          rating: 5,
          reviews: 102,
          
        },
        {
    
            latitude:  10.849409,
            longitude: 106.753706,
       
          title: "Third Amazing Food Place",
          description: "This is the third best food place",
          image: Images[2].image,
          rating: 3,
          reviews: 220,
          
        },
        {
    
            latitude:  10.851481, 
            longitude: 106.757157,
     
          title: "Fourth Amazing Food Place",
          description: "This is the fourth best food place",
          image: Images[3].image,
          rating: 4,
          reviews: 48,
      
        },
        {
         
            latitude:  10.854466, 
            longitude:  106.754650,
    
          title: "Fifth Amazing Food Place",
          description: "This is the fifth best food place",
          image: Images[3].image,
          rating: 4,
          reviews: 178,
        
        },],
        region: {
           
            latitude:10.850822, 
            longitude: 106.754940,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
  };