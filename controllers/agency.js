const Agency = require('../models').Agency; // rename
const Provider = require('../models').Provider; // rename

module.exports = {
  listAll(req, res) {
    return Agency
      .findAll({
        include: [{
          model: Agency, 
          as: 'agency' 
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: Agency, as: 'agency' }, 'createdAt', 'DESC'],
        ],
      })
      .then((agency) => res.status(200).send(agency))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Agency
      .findById(req.params.id, {
        include: [{
          model: Agency,
          as: 'agency'
        }],
      })
      .then((agency) => {
        if (!agency) {
          return res.status(404).send({
            message: 'Agency Not Found',
          });
        }
        return res.status(200).send(agency);
      })
      .catch((error) => res.status(400).send(error));
  },

  addVehicle(req, res) {
    return Agency
      .create({
        register_vehicle: req.body.register_vehicle,
      }, {
      	include: [{
          model: Agency,
          as: 'agency'
        }]
      })
      .then((agency) => res.status(201).send(agency))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Agency
      .findById(req.params.id, {
        include: [{
          model: Agency,
          as: 'agency'
        }],
      })
      .then(agency => {
        if (!agency) {
          return res.status(404).send({
            message: 'Agency Not Found',
          });
        }
        return agency
          .update({
            register_vehicle: req.body.register_vehicle || agency.register_vehicle,
          })
          .then(() => res.status(200).send(agency))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Agency
      .findById(req.params.id)
      .then(agency => {
        if (!agency) {
          return res.status(400).send({
            message: 'Agency Not Found',
          });
        }
        return agency
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
