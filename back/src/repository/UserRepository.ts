import { EntityRepository, getConnection, Repository } from 'typeorm';

import User from '../entity/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}

export default (): UserRepository => {
  return getConnection().getCustomRepository(UserRepository);
};
