const carsModels = require("../models/Car");

module.exports = {
  seedDbCars: (request, response) => {
    const cars = [
      {
        id: 1,
        brand: "ford",
        model: "mustang",
        year: "1969"
      },
      {
        id: 2,
        brand: "chevrolet",
        model: "camaro",
        year: "2018"
      },
      {
        id: 3,
        brand: "ford",
        model: "shelvy cobra",
        year: "1967"
      },
      {
        id: 4,
        brand: "chrysler",
        model: "imperial",
        year: "1957"
      },
      {
        id: 5,
        brand: "ford",
        model: "mustang",
        year: "2016"
      }
    ];

    for (car of cars) {
      let nCar = new carsModels(car);
      nCar.save();
    }

    response.send("Database seeded! For Cars");
  },

  getCarsByBrand: (request, response) => {
    const brand = request.params.brand;
    carsModels.find({ brand: brand }).exec((err, cars) => {
      if (err) throw err;
      response.send(cars);
    });
  },

  // getCarsByBrand: (request, response) => {
  //   const brand = request.params.brand;
  //   response.send(
  //     cars.filter(car => {
  //       return car.brand.toLowerCase() === brand.toLowerCase();
  //     })
  //   );
  // },

  getCarById: (request, response) => {
    const id = request.params.id;
    console.log(id);
    carsModels.find({ id: id }).exec((err, cars) => {
      console.log(cars);
      if (err) throw err;
      response.send(cars);
    });
  },

  // getCarById: (request, response) => {
  //   const id = request.params.id;
  //   response.send(
  //     cars.filter(car => {
  //       return car.id === id;
  //     })
  //   );
  // },

  // getCarsByLimit: (request, response) => {
  //   const limit = Number(request.query.limit);
  //   const nCars = [];
  //   console.log(limit);
  //   if (limit) {
  //     // for (let i = 1; i < limit + 1; i++) {
  //     // console.log("this is the I:" + i);
  //     carsModels
  //       .find({})
  //       .limit(limit)
  //       .then(car => {
  //         response.send(car);
  //       });
  //     // }

  //     // response.send(nCars);
  //   } else {
  //     carsModels.find({}).then(cars => {
  //       response.send(cars);
  //     });
  //   }
  // }

  getCarsBy: (request, response) => {
    const limit = Number(request.query.limit);
    const year = Number(request.query.year);
    const model = request.query.model;
    const brand = request.query.brand;
    const id = request.query.id;
    console.log(request.query);

    if (!!year || !!model || !!brand || !!id) {
      carsModels.find(request.query).exec((err, car) => {
        if (err) throw err;
        response.send(car);
      });
    } else if (!!limit) {
      carsModels
        .find({})
        .limit(limit)
        .exec((err, car) => {
          response.send(car);
        });
    } else {
      carsModels.find({}).exec((err, cars) => {
        console.log(cars);
        response.send(cars);
      });
    }
  }

  // getCarsByLimit: (request, response) => {
  //   const limit = request.query.limit;
  //   const nCars = [];
  //   console.log(limit);
  //   if (limit) {
  //     for (let i = 0; i < limit; i++) {
  //       nCars.push(cars[i]);
  //     }
  //     response.send(nCars);
  //   } else {
  //     response.send(cars);
  //   }
  // }
};
