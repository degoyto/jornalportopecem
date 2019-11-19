const {Noticia} = require('../models')
const Sequelize = require("sequelize")

module.exports = {
  async index (req, res) {
    try {
      console.log(req.body)
      const noticia = await Noticia.findAll({
        
      })
      res.send(noticia)
      
    } catch (err) {
      res.status(500).send({
        error: "Erro get"
      })
    }
  },
  async principais (req, res) {
    try {
      console.log(req.params.total)
      const total = parseInt(req.params.total)
      

      if (total>1){
        const Op = Sequelize.Op;
        const noticia = await Noticia.findAll({
          where: {
            id: {
              [Op.gt]: 1
            }
          },
          limit: total
        })
        res.send(noticia)
      }
      else{
        
        const noticia = await Noticia.findAll({
          limit: total
        })
        res.send(noticia)
      }
      
      
      
    } catch (err) {
      res.status(500).send({
        error: "Erro get"
      })
    }
  },
  async novas (req, res) {
    try {
      console.log(req.params.total)
      const total = parseInt(req.params.total) 
      const noticia = await Noticia.findAll({
        limit: total,
        order: [['createdAt', 'DESC']]
      })
      res.send(noticia)  
    } catch (err) {
      res.status(500).send({
        error: "Erro get"
      })
    }
  },
  async show (req, res) {
    try {
      const noticia = await Noticia.findByPk(req.params.noticiaId)
      res.send(noticia)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const noticia = await Noticia.create(req.body)
      res.send(noticia)
      
    } catch (err) {
      res.status(500).send({
        error: "Erro post"
      })
    }},
    async put (req, res) {
      try {
        await Noticia.update(req.body, {
          where: {
            id: req.params.noticiaId
          }
        })
        res.send(req.body)
      } catch (err) {
        res.status(500).send({
          error: 'an error has occured trying to update the song'
        })
      }
    }
  }