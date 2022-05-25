const clientModel = require("../models/client.model");

const createClient = async (req, res) => {
  try {
    req.body.brands = JSON.stringify(req.body.brands);
    const createUser = await clientModel.createClient(req.body);
    if (createUser.insertId) {
      res.send({ error: false, message: "Client created successfully" });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ error: true, message: error.message, stack: error.stack });
  }
};

const updateClient = async (req, res) => {
  try {
    req.body.brands = JSON.stringify(req.body.brands);
    const updateUser = await clientModel.updateClient(req.body, req.params.id);
    if (updateUser.affectedRows === 1) {
      res.send({ error: false, message: "Client updated successfully" });
    } else {
      throw new Error("Did not find client with id "+ req.params.id);
    }
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ error: true, message: error.message, stack: error.stack });
  }
};

const deleteClient = async (req, res) => {
  try {
    const deleteClient = await clientModel.deleteClient(req.params.id);
    if (deleteClient.affectedRows == 1) {
      res.send({ error: false, message: "Client deleted successfully" });
    } else {
      throw new Error("Did not find client with id "+req.params.id);
    }
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ error: true, message: error.message, stack: error.stack });
  }
};

const getClients = async (req, res) => {
  try {
    const clients = await clientModel.getClient(req.params.id);
    console.log(req.params.id);
    console.log(clients.length);
    let data;
    if(req.params.id){
      data = clients.length > 0 ? clients[0]: null;
    } else {
      data = clients
    }
    console.log(data);
    res.send({ error: false, message: "success", data });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ error: true, message: error.message, stack: error.stack });
  }
};

module.exports = {
  createClient,
  deleteClient,
  updateClient,
  getClients,
};
