const services = [
  {
    id: "ac-service",
    name: "AC Service",
    price: 1000,
    imageSrc: "https://www.svgrepo.com/show/103565/air-conditioner.svg",
    options: [
      {
        type: "select",
        title: "Type of AC",
        options: [
          {
            value: "window",
            text: "Window",
          },
          {
            value: "split",
            text: "Split",
          },
        ],
      },
    ],
  },
  {
    id: "painting-service",
    name: "Painting",
    price: 3000,
    imageSrc: "https://www.svgrepo.com/show/136398/painting-roller-outline.svg",
    options: [
      {
        type: "input#text",
        title: "Enter Surface Area",
      },
      {
        type: "select",
        title: "Side",
        options: [
          {
            value: "exterior",
            text: "Enterior",
          },
          {
            value: "interior",
            text: "Interior",
          },
        ],
      },
    ],
  },
  {
    id: "refrigerator-service",
    name: "Refrigerator Service",
    price: 5000,
    imageSrc: "https://www.svgrepo.com/show/490758/fridge-2.svg",
  },
  {
    id: "house-shifting-service",
    name: "House Shifting",
    price: 10000,
    imageSrc:
      "https://www.svgrepo.com/show/308733/moving-house-house-moving-move-house-move-in.svg",
    options: [
      {
        type: "input#text",
        title: "Start Location",
      },
      {
        type: "input#text",
        title: "Target Location",
      },
      {
        type: "select",
        title: "Number of Vans Required",
        options: [
          {
            value: "1",
            text: "1",
          },
          {
            value: "2",
            text: "2",
          },
          {
            value: "3",
            text: "3",
          },
          {
            value: "4",
            text: "4",
          },
          {
            value: "5",
            text: "5",
          },
        ],
      },
    ],
  },
  {
    id: "cleaning-service",
    name: "Cleaning",
    price: 500,
    imageSrc: "https://www.svgrepo.com/show/287614/cleaning-mop.svg",
    options: [
      {
        type: "select",
        title: "Type",
        options: [
          {
            value: "floor",
            text: "Floor",
          },
          {
            value: "window",
            text: "Window",
          },
          {
            value: "households",
            text: "Households",
          },
        ],
      },
    ],
  },
  {
    id: "plumber-service",
    price: 500,
    name: "Plumber",
    imageSrc: "https://www.svgrepo.com/show/5095/plumber.svg",
  },
  {
    id: "electrician-service",
    price: 500,
    name: "Electrician",
    imageSrc: "https://www.svgrepo.com/show/423670/worker-architecture.svg",
  },
  {
    id: "mechanic-service",
    price: 500,
    name: "Mechanic",
    imageSrc: "https://www.svgrepo.com/show/322769/mechanic-garage.svg",
  },
  {
    id: "maid-service",
    price: 1000,
    name: "Maid Service",
    imageSrc: "https://www.svgrepo.com/show/70134/social-worker.svg",
  },
  {
    id: "home-delivery-service",
    name: "Home Delivery",
    price: 500,
    imageSrc: "https://www.svgrepo.com/show/480999/delivery.svg",
  },
  // Add more services here
];

export default services;
