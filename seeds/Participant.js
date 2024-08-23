exports.seed = function(knex) {
    return knex('Participants').del()
      .then(function () {
        return knex('Participants').insert([
    {
      "user_id": 1,
      "team_id": 1,
      "role": "player"
    },
    {
      "user_id": 2,
      "team_id": 1,
      "role": "player"
    },
    {
      "user_id": 3,
      "team_id": 1,
      "role": "player"
    },
    {
      "user_id": 4,
      "team_id": 1,
      "role": "player"
    },
    {
      "user_id": 5,
      "team_id": 1,
      "role": "player"
    },
    {
      "user_id": 6,
      "team_id": 2,
      "role": "player"
    },
    {
      "user_id": 7,
      "team_id": 2,
      "role": "player"
    },
    {
      "user_id": 8,
      "team_id": 2,
      "role": "player"
    },
    {
      "user_id": 9,
      "team_id": 2,
      "role": "player"
    },
    {
      "user_id": 10,
      "team_id": 2,
      "role": "player"
    },
    {
      "user_id": 11,
      "team_id": 1,
      "role": "coach"
    },
    {
      "user_id": 12,
      "team_id": 2,
      "role": "coach"
    },
    {
      "user_id": 14,
      "team_id": 3,
      "role": "player"
    },
    {
      "user_id": 15,
      "team_id": 3,
      "role": "player"
    },
    {
      "user_id": 16,
      "team_id": 4,
      "role": "player"
    },
    {
      "user_id": 17,
      "team_id": 4,
      "role": "player"
    },
    {
      "user_id": 18,
      "team_id": 3,
      "role": "coach"
    },
    {
      "user_id": 19,
      "team_id": 4,
      "role": "coach"
    }
  ]);
      });
  };
  