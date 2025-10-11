import ratelimit from '../config/upstash.js';

const rateLimiter = async (req, res, next) => {
  try {
    const {success} = await ratelimit.limit()
  } catch (error) {

  }
}

export default rateLimiter

// test