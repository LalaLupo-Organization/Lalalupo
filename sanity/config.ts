import { createClient } from "next-sanity";

const client = createClient({
  projectId: "zqzeoj70",
  dataset: "production",
  apiVersion: "2023-03-04",
  useCdn: false,
  token:
    "skyRPolZ9HJqaEjZVc6CzqXmSAUWgTolol4g6s89vosnVkFYyIWvYJ7PCsUfqalLC4PzS3mesyl0xUKsWxxagbvW0TGIhUT77wMYlZoUnLa2VqHhQc24Wc6t31dFPC8Yss8mzS6kCHp8pcyH3miv52sGnbwYPMiKbqq3HjkYiz2O9RfdIRun",
});

export default client;
