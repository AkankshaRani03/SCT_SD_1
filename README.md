# 🌡️ Temperature Intelligence Dashboard

An advanced and interactive web application that converts temperature values, provides analysis, and offers educational content about temperature scales.

## 📌 Project Overview

This project was developed as part of the **SkillCraft Technology Software Development Internship (Task 1)**. The Temperature Intelligence Dashboard is a comprehensive tool that enables users to convert between multiple temperature scales, visualize temperature data, analyze comfort levels, track conversion history, and test their knowledge through interactive quizzes.

## ✨ Features

* **Temperature Converter** - Convert between Celsius, Fahrenheit, and Kelvin
* **Live Thermometer** - Visual thermometer display that updates in real-time based on input
* **Comfort Analysis** - Get comfort level feedback based on the temperature value
* **Conversion History** - Automatic tracking and storage of past conversions using localStorage
* **Temperature Facts** - Educational facts about temperature scales and real-world applications
* **Interactive Quiz** - Test your knowledge about temperature with multiple-choice questions
* **Dark/Light Theme Toggle** - Switch between dark and light modes for comfortable viewing
* **Input Validation** - Comprehensive error handling for incorrect values
* **Responsive Bento-Grid Layout** - Modern card-based design that adapts to all screen sizes
* **Fast and Accurate Conversion** - Precise calculations using standard conversion formulas

##  Project Structure

```text
SCT_SD_1/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── Screenshot 2026-06-10 221553.png
    ├── Screenshot 2026-06-10 221612.png
    ├── Screenshot 2026-06-10 221636.png
    ├── Screenshot 2026-06-10 221647.png
    ├── Screenshot 2026-06-10 221735.png
    ├── Screenshot 2026-06-10 221744.png
    └── Screenshot 2026-06-10 221755.png
```

## 📸 Screenshots & Documentation

The `assets/` folder contains 7 screenshots showcasing different features and sections of the Temperature Intelligence Dashboard:

| Screenshot | Description |
|-----------|-------------|
| Screenshot 2026-06-10 221553.png | Dashboard overview with header and theme toggle button |
| Screenshot 2026-06-10 221612.png | Temperature Converter section with unit selection |
| Screenshot 2026-06-10 221636.png | Live Thermometer visualization card |
| Screenshot 2026-06-10 221647.png | Converted Values display with all temperature scales |
| Screenshot 2026-06-10 221735.png | Comfort Analysis section with temperature feedback |
| Screenshot 2026-06-10 221744.png | Fun Facts educational section |
| Screenshot 2026-06-10 221755.png | Interactive Quiz section with score tracking |

## 🎨 Dashboard Sections

### 1. **Temperature Converter Card**
- Input field for temperature value
- Unit selection buttons (Celsius, Fahrenheit, Kelvin)
- Convert button to trigger calculations
- Displays converted values in real-time

### 2. **Live Thermometer Card**
- Visual representation of temperature
- Dynamic thermometer fill that updates based on input
- Provides instant visual feedback

### 3. **Converted Values Card**
- Displays conversion results in all three temperature scales
- Shows Celsius, Fahrenheit, and Kelvin values
- Color-coded results for easy readability

### 4. **Comfort Analysis Card**
- Analyzes the temperature to determine comfort level
- Provides feedback based on temperature ranges
- Helpful for understanding real-world temperature contexts

### 5. **Fun Facts Section**
- Educational temperature facts
- Real-world temperature examples
- Automatic fact rotation

### 6. **Interactive Quiz Section**
- Multiple-choice temperature knowledge questions
- Score tracking and progression
- Educational content reinforcement

## 🔧 Technologies Used

* **HTML5** - Semantic markup and structure
* **CSS3** - Advanced styling with gradients, animations, and responsive design
* **JavaScript (ES6+)** - Interactive functionality and calculations
* **LocalStorage API** - For persistent conversion history tracking

## 🌡️ Temperature Conversion Formulas

### Celsius ↔ Fahrenheit
- **C to F**: F = (C × 9/5) + 32
- **F to C**: C = (F − 32) × 5/9

### Celsius ↔ Kelvin
- **C to K**: K = C + 273.15
- **K to C**: C = K − 273.15

### Fahrenheit ↔ Kelvin
- **F to K**: K = (F − 32) × 5/9 + 273.15
- **K to F**: F = (K − 273.15) × 9/5 + 32

## 📊 Data Persistence

- **Conversion History** - All conversions are automatically saved to browser's localStorage
- **History Retrieval** - Previous conversions can be accessed and reviewed
- **Data Privacy** - All data is stored locally on your device (no server uploads)

## 🎯 User Interface Features

### Theme Toggle
- Dark mode for comfortable use in low-light environments
- Light mode for better visibility in daylight
- Theme preference is automatically managed

### Responsive Design
- Works seamlessly on desktop, tablet, and mobile devices
- Bento-grid layout adapts to different screen sizes
- Touch-friendly buttons and input fields

### Visual Feedback
- Active unit selection highlighting
- Thermometer visualization
- Color-coded comfort analysis
- Error messages for invalid inputs

## 🚀 How to Use

### Basic Temperature Conversion
1. Enter a temperature value in the input field
2. Select the source unit (Celsius, Fahrenheit, or Kelvin)
3. Click the "Convert" button
4. View the converted values instantly

### Access Conversion History
- All conversions are automatically saved
- Open browser DevTools and check localStorage under "tempHistory"
- History persists even after closing the browser

### Take the Quiz
1. Scroll to the Quiz section
2. Answer true/false questions about temperature
3. Track your score
4. Learn from the questions

### Toggle Theme
- Click the moon/sun button in the header to switch between dark and light modes

## 🚀 Getting Started

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   ```

2. **Open the project folder**

3. **Launch the application**
   - Double-click `index.html` or
   - Right-click and select "Open with" → Browser of your choice or
   - Use a local development server (e.g., `python -m http.server`)

4. **Start converting temperatures**
   - The application will work instantly without any installation required

## \ud83d\udcc4 Browser Compatibility

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

**Note**: All modern browsers with ES6 support are compatible. LocalStorage feature requires cookies/storage to be enabled.

## \ud83d\udcda Learning Outcomes

This project demonstrates:
- DOM manipulation and event handling
- Temperature conversion algorithms
- Data persistence with localStorage
- Responsive CSS Grid and Flexbox layouts
- Theme switching implementation
- Input validation and error handling
- Interactive UI components

## \ud83d\udcbe System Requirements

- Any modern web browser with JavaScript enabled
- 2+ MB free disk space for the application
- No server or database required
- No installation needed

## 🔒 Privacy & Data

- All calculations are performed locally in your browser
- No data is sent to external servers
- Conversion history is stored only in your browser's localStorage
- Clear your browser data to remove stored history

## 📝 Notes

- The application provides accurate temperature conversions within standard scientific precision
- Absolute Zero (-273.15°C) is the lowest possible temperature
- The quiz and facts sections are educational in nature
- Mobile optimization ensures smooth experience on all devices

## 👩‍💻 Author

**R. Akanksha Rani**

Software Development Intern – SkillCraft Technology

---

## 📄 License

This project is part of the SkillCraft Technology internship program and is for educational purposes.

## 🤝 Feedback & Support

For questions or suggestions regarding this project, please reach out during your internship sessions.

**Version**: 2.0 (Updated June 2026)

