```markdown
# Blood Donation Management System - Backend

## Overview

This repository contains the backend code for the Blood Donation Management System. It provides API endpoints to handle blood donation information and donor searches. The backend is built with Node.js and Express, and uses MongoDB for data storage.

## Features

- **API Endpoints for Donations:** Allows adding and retrieving donation information.
- **API Endpoints for Blood Searches:** Allows searching for donors based on district, sub-district, and blood group.
- **Data Validation:** Validates donation information before saving it to the database.
- **Stripe Payment:** A user can online payment on this appointment in hospital.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/zamanmonirbu/rescue-hospital-backend.git
   cd blood-donation-backend
   ```

2. **Install Dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Run the following command to install project dependencies:

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory of the project with the following content:

   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://monir1181:monir1181087@cluster0.fwfzjhi.mongodb.net/cool-media?retryWrites=true&w=majority&appName=Cluster0

   ```

4. **Start the Server:**

   ```bash
   npm start
   ```

   The server will start and listen on the port specified in the `.env` file. By default, it will run on `http://localhost:5000`.

## API Endpoints

### Blood Donation

- **POST /api/donation**
  - **Description:** Add a new blood donation record.
  - **Request Body:**
    ```json
    {
      "name": "John Doe",
      "bloodGroup": "A+",
      "address": "123 Main St",
      "mobile": "1234567890",
      "district": "Dhaka",
      "subDistrict": "Mirpur",
      "age": 30,
      "weight": 70,
      "lastDonationDate": "2020-01-02",
      "hasPhysicalProblem": false
    }
    ```

- **GET /api/blood/need/search**
  - **Description:** Search for blood donors based on criteria.
  - **Query Parameters:**
    - `district`: The district to filter by.
    - `subDistrict`: The sub-district to filter by.
    - `bloodGroup`: The blood group to filter by.

### Example Usage

- **Search for Donors:**

  ```bash
  curl "http://localhost:5000/api/blood/need/search?district=Dhaka&subDistrict=Mirpur&bloodGroup=A+"
  ```

## Dependencies

- `express` - Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose` - MongoDB object modeling tool designed to work in an asynchronous environment.
- `dotenv` - Loads environment variables from a `.env` file.
- `body-parser` - Middleware to parse incoming request bodies.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests. If you have any issues or suggestions, feel free to open an issue.

## Contact

For any questions or issues, please contact:

- **GitHub:** [zamanmonirbu](https://github.com/zamanmonirbu)
- **LinkedIn:** [Md Moniruzzaman Bu](https://www.linkedin.com/in/mdmoniruzzamanbu)
- **Email:** monir.cse6.bu@gmail.com
```
