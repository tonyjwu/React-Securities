#React-Securities

##Getting Started

1. Clone the repository
2. cd into React-Securities
3. Run **npm install**
4. Run **npm start**
5. The app will be served on **https://localhost:8080**
   - If port 8080 is used, please use a different port number by changing the 'port' property in **webpack.config.js**
   
##Design Approaches

- For accessing the data API, I used the axios framework because it provides a simple interface
- For UI components, I used react-boostrap because it provides a vast variety of components with great looks and feel
- For css styling, I used inline styles inside of each component since there aren't a lot of rules and the readers can spot the rules immediately in the component
- Since the page does not have a lot of components, I put all the components in one file for easy readability and searchability

##Missing Piece

- Unable to center-align search bar and pagination components using the **auto** value of the **marginLeft** and **marginRight** properties. Tried **textAlign:center** but unsuccessful as well 
