const router = require('express').Router();
const { Owner } = require('../../models');

// GET /api/owners
router.get('/', (req, res) => {
  Owner.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbOwnerData => res.json(dbOwnerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// GET /api/owners/1
router.get('/:id', (req, res) => {
  Owner.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }
  })
    .then(dbOwnerData => {
      if (!dbOwnerData) {
        res.status(404).json({ message: 'No owner found with this id' });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/owners
router.post('/', (req, res) => {
  // expects {owner_name: lernantion, dog_name: 'doggo', dog_breed: 'husky', dog_size: 'large', location: 'austin, tx', dog_description: 'text', username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Owner.create({
    user_name: req.body.user_name,
    owner_name: req.body.owner_name,
    dog_name: req.body.dog_name,
    dog_breed: req.body.dog_breed,
    dog_size: req.body.dog_size,
    dog_description: req.body.dog_description,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbOwnerData => res.json(dbOwnerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/owners/1
router.put('/:id', (req, res) => {
  // expects {owner_name: lernantion, dog_name: 'doggo', dog_breed: 'husky', dog_size: 'large', location: 'austin, tx', dog_description: 'text', username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  Owner.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbOwnerData => {
      if (!dbOwnerData[0]) {
        res.status(404).json({ message: 'No owner found with this id' });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/owners/1
router.delete('/:id', (req, res) => {
  Owner.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbOwnerData => {
      if (!dbOwnerData) {
        res.status(404).json({ message: 'No owner found with this id' });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;