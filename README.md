# salary-calculator-2024-Q1-mj-pavithra
Salary Calculation App
To experience the salary calculater go to https://salary-calculater-by-mj.netlify.app/
Introduction

The Salary Calculation App is a web-based application designed to help users calculate their net salary. It allows users to input their basic salary, earnings (like allowances and bonuses), and deductions (like salary advances and loan deductions). The app performs real-time calculations and updates the net salary as the user makes changes. It leverages React for the frontend and Redux for state management.
Features

    Real-time Calculations: Updates net salary immediately as user inputs data.
    Dynamic Input Fields: Add or remove earnings and deductions dynamically.
    Validation: Ensures all fields are validated before calculations.
    State Management: Uses Redux for managing application state.
    User-friendly Interface: Clean and intuitive UI designed with Tailwind CSS.

Technologies Used

    React: Frontend library for building user interfaces.
    Redux: State management library for managing application state.
    TypeScript: Typed superset of JavaScript to enhance code quality.
    Tailwind CSS: Utility-first CSS framework for styling.
    Redux Toolkit: Simplifies Redux usage with less boilerplate.

Installation

To run this project locally, follow these steps:

    Clone the Repository:

    bash

git clone https://github.com/your-username/salary-calculation-app.git
cd salary-calculation-app

Install Dependencies:

bash

npm install

Start the Development Server:

bash

npm start

Build for Production:

bash

    npm run build

Usage

Once the application is running, you can:

    Enter Basic Salary: Input your basic salary in the provided field.
    Add Earnings: Click "Add New Allowance" to add new earnings. Fill in the details and amount.
    Add Deductions: Click "Add New Deduction" to add new deductions. Fill in the details and amount.
    View Calculations: The total earnings, total deductions, and net salary will be calculated and displayed in real-time.

Project Structure

java

salary-calculation-app/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── BasicSalary.tsx
│   │   ├── Deductions.tsx
│   │   ├── Earnings.tsx
│   │   ├── NetSalary.tsx
│   │   ├── YourSalary.tsx
│   │   ├── CTC.tsx
│   ├── store/
│   │   ├── slices/
│   │   │   ├── basicSalarySlice.ts
│   │   │   ├── deductionsSlice.ts
│   │   │   ├── earningsSlice.ts
│   │   ├── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles.css
├── package.json
├── README.md

Redux Structure

    slices/basicSalarySlice.ts: Manages the state for the basic salary.
    slices/deductionsSlice.ts: Manages the state for deductions.
    slices/earningsSlice.ts: Manages the state for earnings.
    store/index.ts: Configures the Redux store.

Contributing

Contributions are welcome! Please follow these steps to contribute:

    Fork the repository.
    Create a new branch (git checkout -b feature/your-feature-name).
    Make your changes.
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (git push origin feature/your-feature-name).
    Open a pull request.

Please make sure to update tests as appropriate.
License


For any questions or suggestions, feel free to reach out:

    Email: mjpavithra6520@gmail.com.com
    GitHub: mj-pavithra

Thank you for using the Salary Calculation App! I hope it helps you You me get an idea about my skills on React type script and redux .
