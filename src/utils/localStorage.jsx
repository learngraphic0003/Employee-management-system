
localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Report",
        "taskDescription": "Create a monthly sales report.",
        "taskDate": "2025-03-05",
        "category": "Work"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Review Emails",
        "taskDescription": "Go through important emails from clients.",
        "taskDate": "2025-03-02",
        "category": "Work"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly team meeting to discuss updates.",
        "taskDate": "2025-03-06",
        "category": "Meeting"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDescription": "Write technical documentation for the new project.",
        "taskDate": "2025-03-07",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDescription": "Write technical documentation for the new project.",
        "taskDate": "2025-03-07",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDescription": "Write technical documentation for the new project.",
        "taskDate": "2025-03-07",
        "category": "Documentation"
      }
    ],
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false,
        "taskTitle": "Finish Design Mockups",
        "taskDescription": "Complete the UI/UX design mockups for the new app.",
        "taskDate": "2025-02-28",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false,
        "taskTitle": "Finish Design Mockups",
        "taskDescription": "Complete the UI/UX design mockups for the new app.",
        "taskDate": "2025-02-28",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Finish Design Mockups",
        "taskDescription": "Complete the UI/UX design mockups for the new app.",
        "taskDate": "2025-02-28",
        "category": "Design"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Suresh",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Client Call",
        "taskDescription": "Discuss the project requirements with the client.",
        "taskDate": "2025-03-03",
        "category": "Communication"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 1
    }
  }
]
;

const admin = [
  {
    "name": "shubham rawat",
    "id": 1,
    "email": "admin@example.com",
    "password": "123",
    
  }
];



export const setLocalStorage = () => {
localStorage.setItem('employees',JSON.stringify(employees));

localStorage.setItem('admin',JSON.stringify(admin))
}



export const getLocalStorage = () => {
  try { 
    // const data = localStorage.getItem('employees',employees);
    const data = localStorage.getItem('employees');
    // console.log(data);
    // If no data, log a message
    if (!data) {
      console.log("No employees data in localStorage. shubham");
      return;
    }

    // Try parsing the data, handle any JSON parsing errors
    try {
      const parsedData = JSON.parse(data);
     
    } catch (error) {
      console.error("Error parsing JSON data: ", error);
    }
  } catch (error) {
    console.error("Error accessing localStorage: ", error);
  }

  return {employees,admin}
}







  