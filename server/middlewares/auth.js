
import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    // const token = req.headers.authorization?.split(" ")[1];
    // const token_decode = jwt.decode(token);
    const token = req.headers.authorization?.split(" ")[1] || null;

    if (!token) {
      return res.json({
        success: false,
        message: "No token provided. Login again.",
      });
    }

    const token_decode = jwt.decode(token);

    console.log("Decoded token:", token_decode);

    const clerkId = token_decode?.clerkId || token_decode?.sub;

    if (!clerkId) {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again.",
      });
    }

    req.clerkId = clerkId;

    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;


