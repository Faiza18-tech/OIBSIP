# 🌡️ Temperature Converter

A responsive and interactive web-based **Temperature Converter** that converts temperature values between **Celsius, Fahrenheit, and Kelvin** with accurate calculations and input validation.

This project was developed as **Level-1 Task 3** during my **Web Development & Designing Internship at Oasis Infobyte**.

---

## 📌 Project Overview

The Temperature Converter is a simple and user-friendly web application designed to convert temperature values between three units:

- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)

The application accepts a temperature value and an input unit, then automatically calculates and displays the equivalent temperature in all supported units.

It also includes input validation and handles temperatures below absolute zero with a clear user-friendly error message.

---

## 🎯 Objective

Build an interactive web tool that:

- Accepts a numeric temperature value.
- Allows users to select the input temperature unit.
- Converts the value into Celsius, Fahrenheit, and Kelvin.
- Displays accurate conversion results.
- Validates user input.
- Handles absolute-zero violations.
- Provides a clean and responsive user interface.

---

## ✨ Features

- 🌡️ Convert between Celsius, Fahrenheit, and Kelvin
- 🔄 Display all converted units simultaneously
- ✅ Numeric input validation
- ⚠️ User-friendly error messages
- ❄️ Absolute zero validation
- 📱 Responsive design
- 🎨 Clean and modern dark-themed UI
- ⚡ Fast client-side calculations
- 🧩 Simple and easy-to-use interface

---

## 🛠️ Technologies Used

- **HTML5** – Page structure and semantic elements
- **CSS3** – Styling, responsive layout, gradients, Flexbox and CSS Grid
- **JavaScript (Vanilla JS)** – Conversion logic, DOM manipulation, form handling and validation

---

## 🧮 Conversion Formulas

### Celsius Conversions
- **Fahrenheit:** `°F = (°C × 9/5) + 32`
- **Kelvin:** `K = °C + 273.15`

### Fahrenheit Conversions
- **Celsius:** `°C = (°F - 32) × 5/9`
- **Kelvin:** `K = (°F - 32) × 5/9 + 273.15`

### Kelvin Conversions
- **Celsius:** `°C = K - 273.15`
- **Fahrenheit:** `°F = (K - 273.15) × 9/5 + 32`

---

## 📂 Project Structure

```text
WebDev-L1-Temperature Converter Website/
│
├── index.html       # Main HTML file
├── style.css        # CSS styling file
├── script.js        # JavaScript logic file
└── README.md        # Project documentation
