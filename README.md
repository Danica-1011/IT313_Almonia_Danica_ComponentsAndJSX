# IT313 Laboratory 4 - Student Roster Card Renderer

## Overview

This project is an interactive mobile application built using **Expo (React Native)** demonstrating component-based architecture and JSX fundamentals. It takes a raw dataset of enrolled students provided by the registrar, renders each student record as a reusable styled card component, dynamically computes the total class size in the header, conditionally displays an academic "Full Load" badge, and demonstrates list key stability through an interactive order-reversal experiment.

This activity reinforces core React and JSX patterns essential for building scalable mobile interfaces in React Native.

---

## Key React & JSX Features Used

- **Functional Components**: Modular UI structure separating the presentation card (`StudentCard`) from the stateful container (`StudentRoster`).
- **Props Destructuring**: Direct extraction of `{ name, course, units, isFullLoad }` in the component parameter signature, avoiding repetitive `props.` dot notation.
- **Conditional Rendering (`&&`)**: Short-circuit evaluation displaying the "Full Load" badge exclusively when `isFullLoad` is `true`.
- **Dynamic List Rendering (`.map()`)**: Transforms the student data array into rendered `StudentCard` components.
- **Key Prop Identification (`key={student.id}`)**: Assigning stable, unique IDs to each rendered list item to ensure optimal reconciliation and avoid state mismatch during re-renders.
- **JSX Expressions & Template Literals (`{}`)**: Embedding dynamic JavaScript values directly into JSX, such as computing `{students.length}` for the class count.
- **Single Root Element**: Wrapping multiple sibling components within a single top-level container (`ScrollView` / `View`) to adhere to JSX structural rules.

---

## File Structure

```text
IT313_Almonia_Danica_ComponentsAndJSX/
├── components/
│   ├── StudentCard.js       # Reusable child component rendering individual student card and badge
│   └── StudentRoster.js     # Parent component holding student array, header count, map(), and reverse controls
├── App.js                   # Application root entry point configuring safe area layout
├── package.json             # Project dependencies (Expo, React, React Native) and scripts
└── README.md                # Project documentation, component breakdown, and execution guide
```

---

## How to Run the Project

### Prerequisites

- Make sure [Node.js](https://nodejs.org/) (version 18 or higher) is installed on your computer.
- Ensure you have the **Expo Go** app installed on your mobile device (Google Play Store for Android or Apple App Store for iOS), or use a web browser.

### Step 1: Navigate to the Project Folder

Open your terminal (PowerShell, Command Prompt, or VS Code Terminal) and navigate to the project directory:

```powershell
cd C:\Users\danic\Desktop\IT313_Almonia_Danica_ComponentsAndJSX
```

### Step 2: Install Dependencies

Install all required packages:

```powershell
npm install
```

### Step 3: Start the Expo Development Server

Run the application using Expo:

```powershell
npx expo start
```

### Step 4: View the Application

- **Web Browser:** Press **`w`** in the terminal to view and interact with the app in your browser.
- **Physical Device:** Open the **Expo Go** app on your phone and scan the QR code displayed in the terminal.

---

## Key Prop Stability & Reversal Demonstration (Requirement 6)

To observe why stable keys are critical compared to array indices:

1. In the running application, locate the control buttons at the top of the roster.
2. Click **Reverse Roster Order** to reverse the sequence of students.
3. Toggle between **Key: student.id** and **Key: array index**:
   - **With `key={student.id}`:** React tracks the true identity of each student record regardless of position changes.
   - **With `key={index}`:** React associates component identity strictly with index positions (`0, 1, 2...`), which can cause component state to become associated with the wrong item when the list is reordered.

---

## Sample Expected Output

```text
IT313 Student Roster
Total Enrollees: 4 students

[Reverse Roster Order]  [Key: student.id]

------------------------------------------------
Ana Cruz                              [Full Load]
Course: IT313
Units Enrolled: 21
------------------------------------------------
Bea Santos
Course: IT313
Units Enrolled: 15
------------------------------------------------
Cid Ramos                             [Full Load]
Course: IT313
Units Enrolled: 18
------------------------------------------------
Dex Alonzo
Course: IT313
Units Enrolled: 12
------------------------------------------------
```

---

## Author

- **Student:** Danica Almonia
- **Course:** IT 313 – Mobile Programming
- **Activity:** Laboratory 4 – Video Demonstration: React Components & JSX in Action
- **GitHub Repository:** [IT313_Almonia_Danica_ComponentsAndJSX](https://github.com/Danica-1011/IT313_Almonia_Danica_ComponentsAndJSX)