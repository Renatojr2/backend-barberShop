import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {

  static init(sequelize) {
    console.log('erro')
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,//so existe na base do codigo
      password_hash: Sequelize.STRING,
      provider: Sequelize.BOOLEAN,



    },
      {
        sequelize
      }
    );
    // gerar um hash na senha do usuario
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8)//8 e o numero da força da senha
      }
    })
    return this;

  }

}

export default User;
