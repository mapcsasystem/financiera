const functions = require("firebase-functions");
const { auth } = require('../server')

function getUserCredentialsMiddleware(req, res, next) {

    functions.logger.debug(`Attempting to extract user credentials from request.`);

    const jwt = req.headers.authorization;


    if (jwt) {
        auth.verifyIdToken(jwt)
            .then(jwtPayload => {

                req["uid"] = jwtPayload.uid;
                req["rol"] = jwtPayload.rol;

                functions.logger.debug(
                    `Credentials: uid=${jwtPayload.uid}, rol=${jwtPayload.rol}`);

                next();
            })
            .catch(err => {
                console.log("Error ocurred while validating JWT", err);
                next();
            });

    }
    else {
        next();
    }
}

module.exports = getUserCredentialsMiddleware;