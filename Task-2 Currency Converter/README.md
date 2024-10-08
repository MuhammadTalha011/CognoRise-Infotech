# CognoRise InfoTech - Currency Converter

## Description

This is a responsive currency converter web application that allows users to convert between various currencies using real-time exchange rates. Built with HTML, CSS, and JavaScript, the app fetches live data from the ExchangeRate API to ensure accurate conversions. The clean and modern design provides a user-friendly interface for fast and secure conversions.

## Features

- **Real-Time Currency Conversion**: Fetches live exchange rates using the ExchangeRate API to provide accurate currency conversions.
- **Responsive Design**: Fully responsive layout using CSS Flexbox and Grid for a seamless experience on any device.
- **Interactive UI**: User-friendly form to input amounts, select currencies, and display conversion results.
- **Reset Option**: Easily reset the form to make new conversions.

## Usage

- Enter the amount you want to convert.
- Select the currency you are converting from and the currency you want to convert to.
- Click the **Convert** button to get the converted amount.
- Use the **Reset** button to clear the form and start over.

## Technologies Used

- **HTML5**: Provides the structure of the web application.
- **CSS3**: For styling, including responsive design using Flexbox and Grid.
- **JavaScript**: Handles interactivity, fetching data from the API, and real-time currency conversion.
- **ExchangeRate API**: Used to fetch the latest exchange rates.

    ```javascript
    const apiURL = 'https://api.exchangerate-api.com/v4/latest/';
    ```

## API Integration

The app fetches live exchange rates from the ExchangeRate API. The conversion is based on the latest rates available for the selected currencies.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or issues, please contact [mt7340131@gmail.com](mailto:mt7340131@gmail.com).
