import { GetRequest, Greet } from "../wailsjs/go/main/App";

async function fetchDataFromApi() {
  try {
    const url = "https://api.example.com/data";
    const response = await GetRequest(url);
    console.log("API Response:", response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function greetUser() {
  const greeting = await Greet("SuperninjaX2");
  console.log(greeting);
}

// Example Usage
fetchDataFromApi();
greetUser();
