const Owner = require('./Owner');
const Post = require('./Post');

// create associations user having many posts
Owner.hasMany(Post, {
    foreignKey: 'owner_id'
});

// post having one owner
Post.belongsTo(Owner, {
    foreignKey: 'owner_id',
});
module.exports = { Owner, Post };