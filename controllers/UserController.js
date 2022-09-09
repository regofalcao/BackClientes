const User = require("../models/User");
const Client = require("../models/Client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auhConfig = require("../config/auth.json");

function generateToken(params = {}) {
  return jwt.sign(params, auhConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async createUser(req, res) {
    try {
      const data = req.body;
      const hashPassword = await bcrypt.hash(data.password, 10);

      const user = await User.create({
        name: data.name,
        email: data.email,
        password: hashPassword,
      });
      user.password = undefined;

      return res.json({ user, token: generateToken({ id: user.id }) });
    } catch (error) {
      res.send(error);
    }
  },

  async createClient(req, res) {
    try {
      const data = req.body;

      const client = await Client.create({
        name: data.name,
        email: data.email,
        number: data.number,
        zipcode: data.zipcode,
        street: data.street,
        complement: data.complement,
        district: data.district,
        city: data.city,
        state: data.state,
        parentesco: data.parentesco,
      });

      return res.json({ client });
    } catch (error) {
      res.send(error);
    }
  },

  async updateClient(req, res) {
    try {
      const data = req.body;

      const updateClient = await Client.update(
        {
          name: data.name,
          email: data.email,
          number: data.number,
          zipcode: data.zipcode,
          street: data.street,
          complement: data.complement,
          district: data.district,
          city: data.city,
          state: data.state,
          parentesco: data.parentesco,
        },
        { where: { id: data.id } }
      );

      return res.json({ message: "cliente editado!" });
    } catch (error) {
      res.send(error);
    }
  },

  async deleteClient(req, res) {
    try {
      const { userId } = req.params;

      const updateClient = await Client.destroy({ where: { id: userId } });

      return res.json({ message: "cliente deletado!" });
    } catch (error) {
      res.send(error);
    }
  },

  async authenticate(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email: email } });

      if (!user)
        return res.status(400).send({ error: "Usuário não encotrado!" });

      if (!(await bcrypt.compare(password, user.password)))
        return res.status({ error: "Invalid password" });

      user.password = undefined;

      return res.json({ user, token: generateToken({ id: user.id }) });
    } catch (error) {
      res.send(error);
    }
  },

  async getClient(req, res) {
    try {
      const client = await Client.findAll();

      const clients = client.map((array) => {
        return {
          id: array.id,
          name: array.name,
          email: array.email,
          number: array.number,
          zipcode: array.zipcode,
          street: array.street,
          complement: array.complement,
          district: array.district,
          city: array.city,
          state: array.state,
          parentesco: array.parentesco,
        };
      });

      return res.json({ clients });
    } catch (error) {
      res.send(error);
    }
  },
};
