🛠️ Under development 🛠️

# Social Dashboard Project

This project is a basic dashboard prototype designed for users to monitor their social media platforms, showcasing follower movements and likes on their posts. The primary focus of this project is to serve as a practice ground for Next.js 14, TypeScript, and Tailwind CSS.

## Technologies Used

- **Next.js 14:** The project is built using the latest version of Next.js, a React framework for building web applications.
- **TypeScript:** TypeScript is used for static typing, providing enhanced development tooling and catching potential errors during development.
- **Tailwind CSS:** The project utilizes Tailwind CSS for styling, enabling rapid development with utility-first classes.

## Project Structure

The project is structured as a basic dashboard featuring the following components:

- **Header:** Initiates a call to gather data from all connected social media platforms.
- **Dark Mode:** Allows users to toggle between light and dark themes for a personalized experience.
- **FollowersCards:** Displays follower-related information for each connected social media platform (Facebook, Twitter, Instagram).
- **Overview:** Divided into separate components, Overview provides cards with different styles, some indicating views and others likes, dynamically fetched from the provided data.
- **Footer:** Concludes the main content of the page.

## Data Simulation

Data for the project is simulated as if retrieved from social media APIs:

```tsx
// Simulated data fetching
const dataFacebook = {
  followers: 3242,
  views: 20,
  likes: 31,
};

const dataInstagram = {
  followers: 1565,
  views: 516,
  likes: 156,
};

const dataTwitter = {
  followers: 1651,
  retweets: 20,
  likes: 31,
};
```
