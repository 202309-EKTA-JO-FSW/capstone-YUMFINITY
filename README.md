# YUMFINITY

Welcome to the YUMFINITY project! This project is a food ordering website designed to streamline the process of ordering food online. Users can browse through a variety of restaurants and menus, select items they want to order, and then proceed to checkout for payment and delivery.

## Live Demo

You can view a live demo of YUMFINITY at the following link:
[YUMFINITY Live Demo](https://yumfinity.vercel.app/)

## Acknowledgements

This project was developed as the capstone project for graduation from Re:Coded. Special thanks to all contributors and mentors involved in the development process.

## Purpose

The purpose of YUMFINITY is to host a variety of dishes and drinks published by the Admin. Users can interact with the platform to explore available items, place orders, manage their profiles, and enjoy a seamless ordering experience.

## Key Features

YUMFINITY is designed to provide a seamless and engaging experience for both users and administrators. Here are the key features of the platform:

- **User Authentication and Authorization**: Secure login and registration processes ensure that users can manage their profiles, place orders, and review their past orders securely.

- **Dish Management**: Admin users can publish various dishes, ensuring a wide variety of options for users to choose from.

- **User Profiles**: Users can manage their profiles, including viewing past orders and managing current orders. This feature provides a personalized experience and allows users to track their order history.

- **Order Management**: Users have the ability to place orders, review past orders, and cancel current orders. This feature provides flexibility and control over the ordering process, enhancing the overall user experience.

- **Structured Form Submission**: A well-structured form is used for submitting dish information, ensuring data integrity and consistency across the platform.

- **Appealing Frontend**: The frontend showcases dishes in an appealing way, enhancing user experience. Design elements are carefully chosen to make browsing and ordering dishes a visually pleasing experience.

## Team Members

YUMFINITY is a collaborative project brought to you by a dedicated team of developers. Here are the key contributors:

- **Belal Abo Moailish** - _Full-stack Developer_

  Contact information: [LinkedIn](https://www.linkedin.com/in/belalabomoailish/) | [GitHub](https://github.com/belalninja)

- **Jana AbuHaltam** - _Full-stack Developer_

  Contact information: [LinkedIn](https://www.linkedin.com/in/jana-abuhaltam-b00335288/) | [GitHub](https://github.com/JanaAbuHaltam)

- **Dana AlSiddig** - _Full-stack Developer_

  Contact information: [LinkedIn](https://www.linkedin.com/in/danaalsiddig/) | [GitHub](https://github.com/danasidd)

- **Dana Maraqa** - _Full-stack Developer_

  Contact information: [LinkedIn](https://www.linkedin.com/in/dana-maraqa-3a4654b7/) | [GitHub](https://github.com/Dana8392)

## Technologies Used

YUMFINITY is built using a combination of modern web technologies, ensuring a robust, scalable, and user-friendly experience. Here's a breakdown of the key technologies involved:

- **Frontend**:
- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

- **Backend**:
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MongoDB Atlas**: A fully-managed cloud database service provided by MongoDB.

- **Deployment**:
- **Vercel**: A cloud platform for static sites and Serverless Functions, used for deploying the frontend.
- **Render**: A unified platform to build and run all your apps and websites with free SSL, a global CDN, private networks, and auto deploys from Git.

- **Containerization**:
- **Docker**: An open-source platform for automating the deployment, scaling, and management of applications.
- **Docker Compose**: A tool for defining and running multi-container Docker applications.

- **Version Control**:
- **Git**: A distributed version control system for tracking changes in source code during software development.

- **DevOps**:
- **ESLint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **Husky**: A tool that can prevent bad `git commit`, `git push`, and more.
- **Lint Staged**: A tool to run linters on git staged files.
- **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity.
- **GitHub Actions**: A CI/CD service provided by GitHub for automating workflows.

## Project Structure

- **client/:** Contains the frontend codebase built with React and Next.js.
- **server/:** Contains the backend codebase built with Node.js, Express.js, and MongoDB.
- **docker-compose.yml:** Docker Compose file for container orchestration.
- **README.md:** Instructions for setting up the project.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (recommended: the latest LTS version)
- MongoDB
- Docker & Docker Compose
- Git (for cloning the repository)

### Installation

##### 1. Clone the repository:

```bash
 git clone <repository-url>
```

##### 2. Navigate to the project directory:

```bash
cd YUMFINITY
```

##### 3. Run the setup script:

```bash
npm run setup
```

##### 4. Start the Docker containers:

```bash
npm run docker
```

### Troubleshooting

If you encounter issues and wish to delete the Docker containers, you can run:

```bash
npm run prune
```
