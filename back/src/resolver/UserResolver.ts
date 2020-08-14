import bcrypt from 'bcrypt';
import * as EmailValidator from 'email-validator';
import jwt from 'jsonwebtoken';
import { Middleware } from 'koa';

import User from '../entity/User';
import { Resolvers } from '../generated/graphql';
import userRepository from '../repository/UserRepository';

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 12);
};

const SECRET = 'secret';

export const authenticate: Middleware = async (ctx, next) => {
  const cookie = ctx.cookies.get('Authorization');
  if (!cookie) {
    return await next();
  }

  let token: { id: string };

  try {
    token = jwt.verify(cookie, 'secret') as { id: string };
  } catch (error) {
    ctx.cookies.set('Authorization');
    return await next();
  }

  const user = await userRepository().findOne(token.id);

  if (!user) {
    ctx.cookies.set('Authorization');
    return await next();
  }

  ctx.user = user;
  await next();
};

const UserResolver: Resolvers = {
  Query: {
    me: (_0, _1, { ctx }) => {
      return ctx.user;
    },
  },
  Mutation: {
    register: async (_, { email, username, password }, { ctx }) => {
      if (!EmailValidator.validate(email)) {
        ctx.status = 400;
        return null;
      }
      const user = new User();
      user.email = email;
      user.username = username;
      user.passwordHash = await hashPassword(password);
      await userRepository().save(user);
      return user;
    },

    login: async (_, { email, password }, { ctx }) => {
      // Check user
      const user = await userRepository().findOne({
        email: email,
      });

      if (!user) {
        ctx.status = 400;
        return null;
      }

      if (!(await bcrypt.compare(password, user.passwordHash))) {
        ctx.status = 400;
        return null;
      }

      const token = jwt.sign({ id: user.id }, SECRET);
      ctx.cookies.set('Authorization', token, {
        secure: true,
        httpOnly: true,
        sameSite: 'lax',
      });
      ctx.status = 200;

      return user;
    },

    logout: async (_0, _1, { ctx }) => {
      ctx.cookies.set('Authorization');
      return true;
    },
  },
};

export default UserResolver;
