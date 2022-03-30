const Customer = require('../../models/Customer');

const Yup = require('yup');

module.exports = {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      address: Yup.string().required(),
      address_number: Yup.string().required(),
      district: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Form validation failed' });
    }

    const { 
      email,
      name,
      password,
      address,
      address_number,
      district
    } = req.body;

    if (await Customer.findOne({ where: { email }})) {
      return res.status(400).json({ error: 'This email is already registered '});
    }
    
    const customer = await Customer.create({
      name,
      email,
      password,
      address,
      address_number,
      district
    });

    return res.json(customer);
  }
}