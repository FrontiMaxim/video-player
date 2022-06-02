exports.registration = async function (request, response, userCollection) {

    let status;
    let user= {};

    try {
        // осуществляем проверку на наличие уже данного пользователя
        const {nickname, email} = request.body;
        user = await userCollection.findOne({nickname, email});

        if(user) {
            status = 403;
        } else {
            // если такого ещё нет, то можно регистрировать его
            user = await userCollection.insertOne(request.body);

            if(user) {
                status = 201;
            }
        }

    } catch (e) {
        status = 500;
        console.log(e);
    } finally {
        response.status(status).json(user);
    }
}

exports.authentication = async function (request, response, userCollection) {

    let status;
    let user = {};

    try {
        user = await userCollection.findOne(request.body);

        console.log(user);
        if(user) {
            status = 200;
        } else {
            status = 404;
        }

    } catch (e) {
        status = 500;
        console.log(e);
    } finally {
        response.status(status).json(user);
    }
}