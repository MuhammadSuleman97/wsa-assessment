exports.seed = function(knex) {
  return knex('Competitions').del()
    .then(function () {
      return knex('Competitions').insert([
        { id: 1, name: 'Summer Championship 2024', created_at: '2024-08-22T20:22:48.160Z', updated_at: '2024-08-22T20:22:48.160Z' },
        { id: 2, name: 'Winter Tournament 2024', created_at: '2024-08-22T20:22:48.160Z', updated_at: '2024-08-22T20:22:48.160Z' },
        { id: 3, name: 'Spring Cup 2024', created_at: '2024-08-22T20:22:48.160Z', updated_at: '2024-08-22T20:22:48.160Z' },
        { id: 4, name: 'Autumn Classic 2024', created_at: '2024-08-22T20:22:48.160Z', updated_at: '2024-08-22T20:22:48.160Z' },
        { id: 5, name: 'City League 2024', created_at: '2024-08-22T20:22:48.160Z', updated_at: '2024-08-22T20:22:48.160Z' },
        { id: 6, name: 'National Games 2024', created_at: '2024-08-22T20:22:48.160Z', updated_at: '2024-08-22T20:22:48.160Z' },
        { id: 7, name: 'Regional Tournament 2024', created_at: '2024-08-22T20:22:48.160Z', updated_at: '2024-08-22T20:22:48.160Z' },
        { id: 8, name: 'Youth Cup 2024', created_at: '2024-08-22T20:22:48.160Z', updated_at: '2024-08-22T20:22:48.160Z' },
        { id: 9, name: 'Masters Tournament 2024', created_at: '2024-08-22T20:22:48.160Z', updated_at: '2024-08-22T20:22:48.160Z' },
        { id: 10, name: 'Elite Series 2024', created_at: '2024-08-22T20:22:48.160Z', updated_at: '2024-08-22T20:22:48.160Z' }
      ]);
    });
};
