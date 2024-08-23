exports.seed = function(knex) {
    return knex('Fixtures').del()
      .then(function () {
        return knex('Fixtures').insert([
          {
            date: "2024-01-01",
            start_time: "00:00:00Z",
            end_time: "02:00:00Z",
            draw_id: 1,
            venue_court_id: 1,
          },
          {
            date: "2024-01-03",
            start_time: "00:00:00Z",
            end_time: "02:00:00Z",
            draw_id: 3,
            venue_court_id: 3,
          },
          {
            date: "2024-01-04",
            start_time: "04:00:00Z",
            end_time: "06:00:00Z",
            draw_id: 4,
            venue_court_id: 4,
          },
          {
            date: "2024-01-05",
            start_time: "00:00:00Z",
            end_time: "02:00:00Z",
            draw_id: 5,
            venue_court_id: 5,
          },
          {
            date: "2024-01-06",
            start_time: "04:00:00Z",
            end_time: "06:00:00Z",
            draw_id: 6,
            venue_court_id: 1,
          },
          {
            date: "2024-01-07",
            start_time: "00:00:00Z",
            end_time: "02:00:00Z",
            draw_id: 7,
            venue_court_id: 2,
          },
          {
            date: "2024-01-08",
            start_time: "04:00:00Z",
            end_time: "06:00:00Z",
            draw_id: 8,
            venue_court_id: 3,
          },
          {
            date: "2024-01-09",
            start_time: "00:00:00Z",
            end_time: "02:00:00Z",
            draw_id: 9,
            venue_court_id: 4,
          },
          {
            date: "2024-01-10",
            start_time: "04:00:00Z",
            end_time: "06:00:00Z",
            draw_id: 10,
            venue_court_id: 5,
          },
          {
            date: "2024-01-07",
            start_time: "00:00:00Z",
            end_time: "02:00:00Z",
            draw_id: 31,
            venue_court_id: 2,
          },
          {
            date: "2024-01-01",
            start_time: "04:00:00Z",
            end_time: "06:00:00Z",
            draw_id: 2,
            venue_court_id: 2,
          },
          {
            date: "2024-01-01",
            start_time: "06:00:00Z",
            end_time: "08:00:00Z",
            draw_id: 32,
            venue_court_id: 3,
          },
          {
            date: "2024-01-01",
            start_time: "10:00:00Z",
            end_time: "12:00:00Z",
            draw_id: 33,
            venue_court_id: 3,
          },
        ]);
      });
  };
  