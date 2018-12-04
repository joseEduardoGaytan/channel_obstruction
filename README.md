# channel_obstruction
Project Tutorial for Django Channels and React

Setup:

1. Be sure Redis or RabbitMQ are running and ready
2. Create Python virtual environment
3. Install Dependencies: pip install -r channel_obstruction/requirements/<<req>>.txt
4. Make migrations
5. Install Yarn globally (Be sure we have installed npm also!): npm install -g yarn
6. Be sure that the following files exists in the root of the project file:
  .babelrc,
  package.json,
  webpack.config.js
7. Execute the next command (this will install all the packages defined inside package.json, where we will install react and webpack among others): yarn install
8. Once the packages are already installed then check that the node_modules folder were created and execute the following (we will create the react bundles with webpack): 
  In Windows: node_modules\.bin\webpack --config webpack.config.js
  In Linux: ./node_modules/.bin/webpack --config webpack.config.js
9. Execute the next command in order to migrate the just generated bundles to the static files: python manage.py collectstatic
10. Run the project
