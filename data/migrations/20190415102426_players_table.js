exports.up = function(knex, Promise) {
    return knex.schema.createTable('players', tbl => {
    //   tbl.increments();
        tbl.integer('id', 5);
      tbl.string('player', 255).notNullable();
      tbl.integer('allNba', 4);
      tbl.integer('allStar', 4);
      tbl.integer('draftYear', 4);
      tbl.integer('pick', 4);
      tbl.string('team', 3).notNullable();
      tbl.string('college', 255).notNullable();
      tbl.integer('years', 4);
      tbl.integer('games', 5);
      tbl.integer('minutesPlayed', 6);
      tbl.integer('points', 6);
      tbl.integer('trb', 4);
      tbl.integer('totalAssists', 4);
      tbl.float('fgPercent');
      tbl.float('tpPercent');
      tbl.float('ftPercent');
      tbl.float('minutesPerGame');
      tbl.float('pointsPerGame');
      tbl.float('trbPerGame');
      tbl.float('assitsPerGame');
      tbl.float('winShare');
      tbl.float('wsPerGame');
      tbl.float('bpm');
      tbl.float('vorp');
      tbl.string('executive', 255).notNullable();
      tbl.string('tenure', 255).notNullable();
      tbl.integer('executiveId', 4);
      tbl.integer('execDraftExp', 4);
      tbl.integer('attendCollege', 4);
      tbl.integer('firstYear', 4);
      tbl.integer('secondYear', 4);
      tbl.integer('thirdYear', 4);
      tbl.integer('fourthYear', 4);
      tbl.integer('fifthYear', 4);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('players');
  };
           