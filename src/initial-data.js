const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Wear A Mask In Public",
      details:
        "Everyone should wear a mask in public settings and when around people who don’t live in your household.",
      priority: "high",
    },
    "task-2": {
      id: "task-2",
      content: "Order Takeout",
      details:
        "Feeling like eating out? Place an order for takeout instead and remember to socially distance.",
      priority: "high",
    },
    "task-3": {
      id: "task-3",
      content: "Monitor Symptoms",
      details:
        "Be alert for symptoms. Watch for fever, cough, shortness of breath, or other symptoms of COVID-19.",
      priority: "high",
    },
    "task-4": {
      id: "task-4",
      content: "Washing Your Hands Often",
      details:
        "Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place",
      priority: "high",
    },
  },

  columns: {
    "column-1": {
      id: "column-1",
      title: "Global Pandemic",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
      priority: "high",
    },
    "column-2": {
      id: "column-2",
      title: "Flattening the Curve",
      taskIds: [],
      priority: "high",
    },
    "column-3": {
      id: "column-3",
      title: "Crisis Averted",
      taskIds: [],
      priority: "high",
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],

  splash: false,
};

export default initialData;