exports.seed = function(knex) {
    return knex('Users').del()
      .then(function () {
        return knex('Users').insert([
          {
            "first_name": "John",
            "last_name": "Doe"
          },
          {
            "first_name": "Jane",
            "last_name": "Smith"
          },
          {
            "first_name": "Alice",
            "last_name": "Johnson"
          },
          {
            "first_name": "Bob",
            "last_name": "Williams"
          },
          {
            "first_name": "Charlie",
            "last_name": "Brown"
          },
          {
            "first_name": "David",
            "last_name": "Jones"
          },
          {
            "first_name": "Emily",
            "last_name": "Garcia"
          },
          {
            "first_name": "Frank",
            "last_name": "Martinez"
          },
          {
            "first_name": "Grace",
            "last_name": "Hernandez"
          },
          {
            "first_name": "Helen",
            "last_name": "Lopez"
          },
          {
            "first_name": "Coach",
            "last_name": "Lopez"
          },
          {
            "first_name": "Coach",
            "last_name": "Brown"
          },
          {
            "first_name": "Emily",
            "last_name": "Garcia"
          },
          {
            "first_name": "Frank",
            "last_name": "Martinez"
          },
          {
            "first_name": "Grace",
            "last_name": "Hernandez"
          },
          {
            "first_name": "Helen",
            "last_name": "Lopez"
          },
          {
            "first_name": "Coach",
            "last_name": "Garcia"
          },
          {
            "first_name": "Coach",
            "last_name": "Jones"
          }
        ]);
      });
  };
  