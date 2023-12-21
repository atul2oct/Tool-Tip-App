# React & Tailwind CSS Starter Pack

This is a starter pack for creating React projects with Tailwind CSS configured. It uses React version **18.2** and Tailwind CSS version **3.2**.

## Usage

This starter pack includes a basic setup for using **Tailwind CSS with React**. To start building your own components and styles, follow these steps:

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/atul2oct/tool-tip-app
    ```

1. Install the required packages.
    ```sh
   
    npm i
    ```

1. Start the development server.
    ```sh
    npm start
    ```
1. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.
1. Create your React components and add your styles using Tailwind classes. You can also create new CSS files and import them into your components.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.
1. In the project directory, you can run:
```sh
    npm start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.
```sh
    npm test
```

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
```sh
    npm run build
```

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

explain-------    
 ```
   
   I have provided you with a simple example of a tooltip component in React that accepts a position prop for rendering the tooltip in different positions. You can adapt and style it according to your needs.
 ```

Code and Structure
```
   
     index.js -> main file 
     App.js ->have two things !. heading 2.Option componenet
         Options.js ->Radio buttons for selecting value (top , bottom ,left and right) and send value to ToolTip as a prop
             ToolTip.js ->recive a value and according to that show tooltip text while hovering on button
```

