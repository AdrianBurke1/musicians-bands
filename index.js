const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here
Band.hasMany(Musicians, {
    foreignKey: 'bandId',
    as: 'musicians',
});

Musician.belongsTo(Band, {
    foreignKey: 'bandId',
    as: 'band'
});

Band.belongsToMany(Songs, { through: 'BandSongs', as: 'songs'});
Song.belongsToMany(Band, {through: 'BandSongs', as: 'bands'});



module.exports = {
    Band,
    Musician,
    Song
};
