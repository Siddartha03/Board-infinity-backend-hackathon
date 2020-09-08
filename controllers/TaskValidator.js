exports.addTaskValidator = (req, res, next) => {
    const {name, description, creator, duration, createdAt} = req.body
    let errors = {}
    if(name === '') errors.name = 'Name cannot be blank'
    if(description === '') errors.description = 'Description cannot be blank'
    if(creator === '') errors.creator = "Creator name cannot be blank"
    if(duration === '') errors.duration = "Duration cannot be blank"
    if(createdAt === '') errors.createdAt = "CreatedAt (Future time) cannot be blank"

    if(Object.keys(errors).length === 0) {
        next()
    }else {
        req.session.errors = errors
        res.redirect('/add')
    }
}