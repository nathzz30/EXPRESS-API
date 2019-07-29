const usersModels = require("../models/User");

module.exports = {
  seedDbUsers: (request, response) => {
    const users = [
      {
        id: 1,
        name: "richard hendricks",
        email: "richard@piedpiper.com"
      },
      {
        id: 2,
        name: "bertram gilfoyle",
        email: "gilfoyle@piedpiper.com"
      },
      {
        id: 3,
        name: "nathaly persia",
        email: "nathzz@gmail.com"
      },
      {
        id: 4,
        name: "frankelly bieg",
        email: "frank@bieg.com"
      },
      {
        id: 5,
        name: "clitofel",
        email: "turealwirinama@tiguere.com"
      },
      {
        id: 6,
        name: "gatito",
        email: "miau@grrr.com"
      }
    ];

    for (user of users) {
      let nUser = new usersModels(user);
      nUser.save();
    }

    response.send("Database seeded! For Users");
  },

  getUsersByName: (request, response) => {
    const name = request.params.name;
    usersModels.find({ name: name }).exec((err, user) => {
      if (err) throw err;
      response.send(user);
    });
  },

  getUserById: (request, response) => {
    const id = request.params.id;
    usersModels.find({ id: id }).exec((err, user) => {
      if (err) throw err;
      response.send(user);
    });
  },

  // getUsersByLimit: (request, response) => {
  //   const limit = Number(request.query.limit);
  //   console.log(request.query.name);
  //   if (limit) {
  //     usersModels
  //       .find({})
  //       .limit(limit)
  //       .exec((err, user) => {
  //         response.send(user);
  //       });
  //   } else {
  //     usersModels.find({}).exec((err, users) => {
  //       console.log(users);
  //       response.send(users);
  //     });
  //   }
  // }
  getUsersBy: (request, response) => {
    const limit = Number(request.query.limit);
    const name = request.query.name;
    const id = request.query.id;
    console.log(name);
    console.log(id);
    if (!!name && !!id) {
      usersModels.find(request.query).exec((err, user) => {
        if (err) throw err;
        response.send(user);
      });
    } else if (!!limit) {
      usersModels
        .find({})
        .limit(limit)
        .exec((err, user) => {
          response.send(user);
        });
    } else {
      usersModels.find({}).exec((err, users) => {
        console.log(users);
        response.send(users);
      });
    }
  }
};
