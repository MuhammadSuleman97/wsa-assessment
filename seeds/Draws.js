exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Draws').del()
    .then(function () {
      // Inserts seed entries
      return knex('Draws').insert([
        { team1_id: 1, team2_id: 2, competition_id: 1 },
        { team1_id: 3, team2_id: 4, competition_id: 1 },
        { team1_id: 1, team2_id: 3, competition_id: 1 },
        { team1_id: 2, team2_id: 4, competition_id: 1 },
        { team1_id: 1, team2_id: 2, competition_id: 1 },
        { team1_id: 3, team2_id: 4, competition_id: 1 },
        { team1_id: 2, team2_id: 1, competition_id: 1 },
        { team1_id: 3, team2_id: 2, competition_id: 1 },
        { team1_id: 4, team2_id: 1, competition_id: 1 },
        { team1_id: 3, team2_id: 1, competition_id: 1 },
        { team1_id: 3, team2_id: 4, competition_id: 1 },
        { team1_id: 1, team2_id: 3, competition_id: 1 },
        { team1_id: 1, team2_id: 3, competition_id: 1 }
      ]);
    });
};
