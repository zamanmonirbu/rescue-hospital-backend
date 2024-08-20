


# Blood Donation Management System - Backend


[Live Link](https://rescue-hospital-client.vercel.app) | [Front-end Code](https://github.com/zamanmonirbu/rescue-hospital-client) | [Back-end Code](https://github.com/zamanmonirbu/rescue-hospital-backend) | [Demo Video](https://www.youtube.com/watch?v=audTPrimP5g)

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

## Connect with Me

- **Email:** [monir.cse6.bu@gmail.com](mailto:monir.cse6.bu@gmail.com)
- **GitHub:** [![GitHub Icon](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zamanmonirbu)
- **LinkedIn:** [![LinkedIn Icon](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdmoniruzzamanbu/)
- **Codeforces:** [![Codeforces Icon](https://img.shields.io/badge/Codeforces-00FF00?style=for-the-badge&logo=codeforces&logoColor=white)](https://codeforces.com/profile/ZaMo)
- **LeetCode:** [![LeetCode Icon](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/moniruzzamancse6/)
- **Portfolio:** [![Portfolio Icon](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=codeforces&logoColor=white)](https://moniruzzamanbu.netlify.app/)
- **Medium:** [![Medium Icon](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@zamanmonirbu)

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
