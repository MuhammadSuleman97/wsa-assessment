exports.seed = function(knex) {
    return knex('Venue_courts').del()
      .then(function () {
        return knex('Venue_courts').insert([
          {
            "venue_id": 1,
            "court_name": "Court 1"
          },
          {
            "venue_id": 1,
            "court_name": "Court 2"
          },
          {
            "venue_id": 2,
            "court_name": "Court 1"
          },
          {
            "venue_id": 2,
            "court_name": "Court 2"
          },
          {
            "venue_id": 3,
            "court_name": "Court 1"
          },
          {
            "venue_id": 3,
            "court_name": "Court 2"
          },
          {
            "venue_id": 4,
            "court_name": "Court 1"
          },
          {
            "venue_id": 4,
            "court_name": "Court 2"
          },
          {
            "venue_id": 5,
            "court_name": "Court 1"
          },
          {
            "venue_id": 5,
            "court_name": "Court 2"
          }
        ]);
      });
  };
  