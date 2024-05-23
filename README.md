# Calculator App

A simple calculator application built with React.js, allowing all inputs to be handled through on-screen buttons only. This project demonstrates fundamental front-end development skills, including state management with `useReducer`, component organization, and basic arithmetic operations.

## Features

- Perform basic arithmetic operations: addition, subtraction, multiplication, and division.
- Handle inputs exclusively through on-screen buttons (no keyboard input).
- Format numbers for better readability.
- Clear all inputs or delete the last digit.
- Error handling for invalid operations (e.g., division by zero).

## Technologies Used

- React.js
- CSS for styling

## Project Structure

```js
src/
│
├── components/
│   ├── DigitButton.js
│   ├── OperationButton.js
│
├── utils.js
│
├── App.js
├── styles.css
└── index.js
```

## Installation and Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/imananoosheh/simple-calc-react.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd simple-calc-react
    ```

3. **Install dependencies:**

    ```sh
    npm install
    ```

4. **Start the development server:**

    ```sh
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

- Click on the digits and operation buttons to perform calculations.
- Use the `AC` button to clear all inputs.
- Use the `DEL` button to delete the last digit.
- Click the `=` button to evaluate the expression.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Utilized the math.js library for expression evaluation (if applicable).
- Inspired by common calculator interfaces.
