const jwt = require('jsonwebtoken')

const generateJwtToken = (user) => {
		return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: `2h` });
}

const verifyToken = (req, res, next) => {
	if(req.headers.authorization){
		try {
			const token = req.headers.authorization.split(' ')[1] || req.headers['authtoken'] || req.headers['token'] || req.headers["x-access-token"] || req.cookies.token;
			if (!token) {
				console.log("A token is required for authentication");
				return res.status(403).send("A token is required for authentication");
			}
			req.user = jwt.verify(token, process.env.JWT_SECRET);
		} catch (err) {
			return res.status(401).send("Not Authorize");
		}
		return next();
	}else{
		console.log("Token");
		return res.status(401).send("No Token");
	}
};

module.exports = {
	generateJwtToken,
	verifyToken
}