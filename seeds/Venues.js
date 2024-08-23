exports.seed = function(knex) {
    return knex('Venues').del()
      .then(function () {
        return knex('Venues').insert([
          {
            "short_name": "Stadium C",
            "timezone": "UTC"
          },
          {
            "short_name": "Field D",
            "timezone": "UTC"
          },
          {
            "short_name": "Court E",
            "timezone": "UTC"
          },
          {
            "short_name": "Gym F",
            "timezone": "UTC"
          },
          {
            "short_name": "Complex H",
            "timezone": "UTC"
          },
          {
            "short_name": "Park I",
            "timezone": "UTC"
          },
          {
            "short_name": "Dome J",
            "timezone": "UTC"
          },
          {
            "short_name": "Arena A",
            "timezone": "UTC"
          },
          {
            "short_name": "Arena B",
            "timezone": "UTC"
          },
          {
            "short_name": "Pavilion G",
            "timezone": "UTC"
          }
        ]);
      });
  };
  