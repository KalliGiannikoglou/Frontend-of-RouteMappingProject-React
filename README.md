# Backend of the RouteMappingProject in Spring Boot
This is the Frontend of a Route Mapping Service. The Algorithmic part is developped in Java, the Backend is in Spring Boot and the Frontend in React.
The integrated algorithmic part is publicly available in this [repository](https://github.com/KalliGiannikoglou/RouteMappingProject).
The backend of the application is publicly available in this [repository](https://github.com/KalliGiannikoglou/Backend-of-RouteMappingProject-SpringBoot)
The building is done using `Create React App`, below are the instructions on how to start the project and download the dependencies needed.

## Useful Instructions
To initialize the project, we used [Create React App](https://github.com/facebook/create-react-app). 
Additionally we had to download all the requested dependencies for all the add-ons we included in our project.


### Getting Started with Create React App

To initialize a project we used:  `npm init react-app ./ PROJECT NAME`.
From there all the configurations are automated, and the basic project structure is built.

To start the application from the client side we go inside the directory _package.json_ is located and we use the `npm start` command.
This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### Dependencies:
We have to run this commands in the terminal to deploy our project:
1. To add the virtual-DOM of React: `npm i react-router-dom@5.2.0`
2. Then we add the React Router package: `npm i react-router@5.2.0`
3. For the User Interface, we need the ui-kit: `npm i mdb-react-ui-kit`
4. For the React Bootstrap Library we need: `npm install --save react-bootstrap bootstrap` 
5. For the responsive carousel (or slideshow): `npm i react-responsive-carousel`
6. For Google Maps API: `npm i @react-google-maps/api`
7. To add Axios: `npm i axios`
8. For the numeric input of agents page: `npm i react-numeric-input`
