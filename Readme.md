# Weather Greeting API

## Description

Weather Greeting API is a simple Node.js and Express application that provides a greeting message along with the current weather information for the client's location. The API retrieves the client's IP address, determines their geographical location, and fetches the current weather data for that location.

### Features:
- **IP-based Location Detection**: Determines the client's location based on their IP address.
- **Weather Information**: Fetches current weather information for the detected location.
- **Greeting Message**: Returns a greeting message including the visitor's name and current temperature.

### Weather API service: 
Sign up on (http://www.weatherapi.com) and get your api key.

### Folder Structure: 
```
HNG11/
|-- src/
|   |-- controllers/
|   |   |-- hello.js
|   |-- routes/
|   |   |-- hello.js
|   |-- utils/
|   |   |-- weather.js
|-- index.js
|-- package.json
|-- .env

```

## Setup and Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Blard-omu/hng11-stack-be-task1.git
    cd hng11-stack-be-task1
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root of your project and add your API key for the weather service.
    ```plaintext
    PORT=8000
    WEATHER_API_KEY=your_weather_api_key
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

## Usage

### Base URL
```
http://localhost:8000/api
```

### Endpoints

#### `GET /api/hello`

This endpoint returns a greeting message along with the client's IP address, location, and current temperature.

##### Query Parameters:
- `visitor_name` (optional): The name of the visitor. Default is "Blard".

##### Example Request:
```
GET /api/hello?visitor_name=John
```

##### Example Response:
```json
{
  "client_ip": "102.216.201.34",
  "location": "New York",
  "greeting": "Hello, John!, the temperature is 11 degrees Celsius in New York",
  "server_hostname": "your-hostname"
}
```


## Contributing

Feel free to open issues or create pull requests to improve this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## About HNG Intership:
Visit (https://hng.tech/internship) or (https://hng.tech/premium) to learn more about hng internship.

---