const carsController = require("../controllers/cars");
const usersController = require("../controllers/users");

const router = app => {
  app.get("/seedcars", carsController.seedDbCars);

  app.get("/seedusers", usersController.seedDbUsers);

  // app.get("/cars/filterbybrand/:brand", carsController.getCarsByBrand);

  // app.get("/cars/filterbyid/:id", carsController.getCarById);

  app.get("/cars", carsController.getCarsBy);

  // app.get("/users/:name", usersController.getUsersByName);

  // app.get("/users/filterbyid/:id", usersController.getUserById);

  app.get("/users", usersController.getUsersBy);
};

// Export the router
module.exports = router;
