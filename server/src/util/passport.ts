import passport from 'passport';
import passportJwt from 'passport-jwt';
import LocalStrategy from 'passport-local';

passport.use(
  new LocalStrategy(),
  () => {}
);
