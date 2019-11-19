
module.exports = (sequelize, DataTypes) => {
  const Noticia = sequelize.define('Noticia', {
    title:DataTypes.STRING,
    conteudo: DataTypes.TEXT,
    fotoUrl: DataTypes.STRING,
    tipo: DataTypes.STRING,
    autor: DataTypes.STRING,
    
    })

  

 

  return Noticia
}


