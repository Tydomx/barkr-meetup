const Owner = require('./Owner');
const Post = require('./Post');
const Comment = require('./Comment');
const Vote = require('./Vote');

// create associations
Owner.hasMany(Post, {
  foreignKey: 'owner_id'
});

Post.belongsTo(Owner, {
  foreignKey: 'owner_id',
  onDelete: 'SET NULL'
});

Owner.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',

  foreignKey: 'owner_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(Owner, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Owner, {
  foreignKey: 'owner_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Owner.hasMany(Vote, {
  foreignKey: 'owner_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

Comment.belongsTo(Owner, {
  foreignKey: 'owner_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Owner.hasMany(Comment, {
  foreignKey: 'owner_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { Owner, Post, Comment, Vote };

