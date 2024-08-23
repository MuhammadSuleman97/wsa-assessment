exports.seed = function(knex) {
    return knex('Teams').del()
      .then(function () {
        return knex('Teams').insert([
          {
            "name": "Team Alpha",
            "competition_id": 1
          },
          {
            "name": "Team Beta",
            "competition_id": 1
          },
          {
            "name": "Team Gamma",
            "competition_id": 2
          },
          {
            "name": "Team Delta",
            "competition_id": 2
          },
          {
            "name": "Team Epsilon",
            "competition_id": 3
          },
          {
            "name": "Team Zeta",
            "competition_id": 3
          },
          {
            "name": "Team Eta",
            "competition_id": 4
          },
          {
            "name": "Team Theta",
            "competition_id": 4
          },
          {
            "name": "Team Iota",
            "competition_id": 5
          },
          {
            "name": "Team Kappa",
            "competition_id": 5
          }
        ]);
      });
  };
  