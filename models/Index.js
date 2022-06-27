const Owner = require('./Owner');
const Post = require('./Post');
const Comment = require('./Comment');
const Vote = require('./Vote');

Owner.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'owner_id'
});

Post.belongsToMany(Owner, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(Owner, {
    foreignKey: 'owner_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

Owner.hasMany(Vote, {
    foreignKey: 'owner_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

// create associations user having many posts
Owner.hasMany(Post, {
    foreignKey: 'owner_id'
});

// post having one owner
Post.belongsTo(Owner, {
    foreignKey: 'owner_id',
});


// comment associations between owner and their posts
Comment.belongsTo(Owner, {
    foreignKey: 'owner_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Owner.hasMany(Comment, {
    foreignKey: 'owner_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { Owner, Post, Comment, Vote };