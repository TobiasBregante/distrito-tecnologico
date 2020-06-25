const session = require('express-session'),
Properties = require('../models/properties'),
CreateUser = require('../models/createUser'),
dateFormat = require('./../views/components/dateFormat'),
StateList = require('./../views/components/stateList'),
sha1 = require('sha1');

// hash function
const hash = decode => sha1(decode);

/****************************Start views*******************************/
// view home
const home = (req, res) => {
    res.render('./modules/index', {
        userSession: req.session.userRegister,
        filterNav: false
    });
}

// view casas
const casas = async (req, res) => {
    this.perPage = 5;
    this.page = req.params.page;
    this.sessionUser = req.session.userRegister ? req.session.userRegister : '';
    await Properties.countDocuments({type: 'casas'}, (err, count) => {
        if(err){
            console.log(err)
        }else{
            this.countPage = (count % this.perPage == 0) ? parseInt(count / this.perPage) 
            : parseInt((count / this.perPage) + (count % this.perPage));
            this.pathNextPag = [];
            this.pathNextPag.length = this.countPage
            for(let i = 1; i < this.pathNextPag.length; i++){
                this.pathNextPag[i - 1] = `/casas/${i}`
            }
            this.pathNextPagMap = this.pathNextPag.map((obj, i) => {
                if((i + 1) == this.page){
                    return(`<a href="${obj}" class="btn-itemPag bg-success">${++i}</a>`);
                }else{
                    return(`<a href="${obj}" class="btn-itemPag">${++i}</a>`);
                }
            })
        }
    })
    await Properties.find({type: 'casas'}, (err, result) => {
        if(err){
            console.log(err)
        }else{
            this.propertiesMap = result;
        }
    })
    .limit(this.perPage)
    .skip((this.perPage * this.page) - this.perPage)
    res.render('./modules/casas', {
        userSession: this.sessionUser,
        filterNav: true,
        properties: this.propertiesMap,
        count: this.countPage,
        nextPag: this.pathNextPagMap.join(' ')
    });
}

// view terrenos
const terrenos = async (req, res) => {
    this.perPage = 5;
    this.page = req.params.page;
    this.sessionUser = req.session.userRegister ? req.session.userRegister : '';
    await Properties.countDocuments({type: 'terrenos'}, (err, count) => {
        if(err){
            console.log(err)
        }else{
            this.countPage = (count % this.perPage == 0) ? parseInt(count / this.perPage) 
            : parseInt((count / this.perPage) + (count % this.perPage));
            this.pathNextPag = [];
            this.pathNextPag.length = this.countPage
            for(let i = 1; i < this.pathNextPag.length; i++){
                this.pathNextPag[i - 1] = `/terrenos/${i}`
            }
            this.pathNextPagMap = this.pathNextPag.map((obj, i) => {
                if((i + 1) == this.page){
                    return(`<a href="${obj}" class="btn-itemPag bg-success">${++i}</a>`);
                }else{
                    return(`<a href="${obj}" class="btn-itemPag">${++i}</a>`);
                }
            })
        }
    })
    await Properties.find({type: 'terrenos'}, (err, result) => {
        if(err){
            console.log(err)
        }else{
            this.propertiesMap = result;
        }
    })
    .limit(this.perPage)
    .skip((this.perPage * this.page) - this.perPage)
    res.render('./modules/terrenos', {
        userSession: this.sessionUser,
        filterNav: true,
        properties: this.propertiesMap,
        count: this.countPage,
        nextPag: this.pathNextPagMap.join(' ')
    });
}

// view alquileres
const alquileres = async (req, res) => {
    this.perPage = 5;
    this.page = req.params.page;
    this.sessionUser = req.session.userRegister ? req.session.userRegister : '';
    await Properties.countDocuments({type: 'alquileres'}, (err, count) => {
        if(err){
            console.log(err)
        }else{
            this.countPage = (count % this.perPage == 0) ? parseInt(count / this.perPage) 
            : parseInt((count / this.perPage) + (count % this.perPage));
            this.pathNextPag = [];
            this.pathNextPag.length = this.countPage
            for(let i = 1; i < this.pathNextPag.length; i++){
                this.pathNextPag[i - 1] = `/alquileres/${i}`
            }
            this.pathNextPagMap = this.pathNextPag.map((obj, i) => {
                if((i + 1) == this.page){
                    return(`<a href="${obj}" class="btn-itemPag bg-success">${++i}</a>`);
                }else{
                    return(`<a href="${obj}" class="btn-itemPag">${++i}</a>`);
                }
            })
        }
    })
    await Properties.find({type: 'alquileres'}, (err, result) => {
        if(err){
            console.log(err)
        }else{
            this.propertiesMap = result;
        }
    })
    .limit(this.perPage)
    .skip((this.perPage * this.page) - this.perPage)
    res.render('./modules/alquileres', {
        userSession: this.sessionUser,
        filterNav: true,
        properties: this.propertiesMap,
        count: this.countPage,
        nextPag: this.pathNextPagMap.join(' ')
    });
}

// view proyectos
const proyectos = async (req, res) => {
    this.perPage = 5;
    this.page = req.params.page;
    this.sessionUser = req.session.userRegister ? req.session.userRegister : '';
    await Properties.countDocuments({type: 'proyectos'}, (err, count) => {
        if(err){
            console.log(err)
        }else{
            this.countPage = (count % this.perPage == 0) ? parseInt(count / this.perPage) 
            : parseInt((count / this.perPage) + (count % this.perPage));
            this.pathNextPag = [];
            this.pathNextPag.length = this.countPage
            for(let i = 1; i < this.pathNextPag.length; i++){
                this.pathNextPag[i - 1] = `/proyectos/${i}`
            }
            this.pathNextPagMap = this.pathNextPag.map((obj, i) => {
                if((i + 1) == this.page){
                    return(`<a href="${obj}" class="btn-itemPag bg-success">${++i}</a>`);
                }else{
                    return(`<a href="${obj}" class="btn-itemPag">${++i}</a>`);
                }
            })
        }
    })
    await Properties.find({type: 'proyectos'}, (err, result) => {
        if(err){
            console.log(err)
        }else{
            this.propertiesMap = result;
        }
    })
    .limit(this.perPage)
    .skip((this.perPage * this.page) - this.perPage)
    res.render('./modules/proyectos', {
        userSession: this.sessionUser,
        filterNav: true,
        properties: this.propertiesMap,
        count: this.countPage,
        nextPag: this.pathNextPagMap.join(' ')
    });
}

// view inversiones
const inversiones = async (req, res) => {
    this.perPage = 5;
    this.page = req.params.page;
    this.sessionUser = req.session.userRegister ? req.session.userRegister : '';
    await Properties.countDocuments({type: 'inversiones'}, (err, count) => {
        if(err){
            console.log(err)
        }else{
            this.countPage = (count % this.perPage == 0) ? parseInt(count / this.perPage) 
            : parseInt((count / this.perPage) + (count % this.perPage));
            this.pathNextPag = [];
            this.pathNextPag.length = this.countPage
            for(let i = 1; i < this.pathNextPag.length; i++){
                this.pathNextPag[i - 1] = `/inversiones/${i}`
            }
            this.pathNextPagMap = this.pathNextPag.map((obj, i) => {
                if((i + 1) == this.page){
                    return(`<a href="${obj}" class="btn-itemPag bg-success">${++i}</a>`);
                }else{
                    return(`<a href="${obj}" class="btn-itemPag">${++i}</a>`);
                }
            })
        }
    })
    await Properties.find({type: 'inversiones'}, (err, result) => {
        if(err){
            console.log(err)
        }else{
            this.propertiesMap = result;
        }
    })
    .limit(this.perPage)
    .skip((this.perPage * this.page) - this.perPage)
    res.render('./modules/inversiones', {
        userSession: this.sessionUser,
        filterNav: true,
        properties: this.propertiesMap,
        count: this.countPage,
        nextPag: this.pathNextPagMap.join(' ')
    });
}

// view propiedad
const propiedad = async (req, res, next) => {
    this.sessionUser = req.session.userRegister ? req.session.userRegister : '';
    await Properties.findById(req.params.id, async (err, product) => {
        if(err){
            next()
            console.error(err);
            res.render('./modules/404', {
                userSession: sessionUser,
                filterNav: false
            });
        }else{
            await Properties.find({type: product.type}, (err, productRelated) => {
                if(err){
                    next()
                    console.error(err);
                    res.render('./modules/404', {
                        userSession: sessionUser,
                        filterNav: false
                    });
                }else{
                    this.relatedSearch = productRelated;
                    res.render('./modules/propiedad', {
                        userSession: this.sessionUser,
                        filterNav: false,
                        product: product,
                        relatedSearch: this.relatedSearch
                    });
                }
            })
            .limit(5);
        }
    })
}

/****************************End views*******************************/

// verify form data of user login
const verifyLogin = async (req, res) => {
    const email = req.body.email,
    pdw = req.body.pdw;
    if(email && pdw){
        const userLogin = await CreateUser.findOne(req.body);
        if(userLogin){
            req.session.userRegister = userLogin._id;
            res.redirect('/');
        }else{
            res.send(`Los datos son incorrectos: ${req.body.email} - ${req.body.pdw}`);        
        }
    }else{
        res.send('Complete los datos');
    }
}

// verify form data of user register 
const verifyRegister = async (req, res) =>{
    const email = req.body.email,
    pdw = req.body.pdw;
    if(email && pdw){
        const userMap = await CreateUser.findOne(req.body);
        if(userMap){
            res.send('Este usuario no está disponible');
        }else{
            const formData = req.body
            formData.publish_since = dateFormat;
            await CreateUser.collection.insertOne(formData, (err, ok) => {
                if(!err && ok){
                    console.log(`Este usuario se ha creado exitosamente - ${formData.email} - ${formData.pdw}`);
                    res.redirect('/');
                }else{
                    console.log('Ha ocurrido un error');
                    res.redirect('/register');
                }
            });
        }
    }
}

// login
const login = (req, res, next) => {
    const sessionUser = req.session.userRegister;
    if(sessionUser){
        res.redirect('/');
    }else{
        res.render('./modules/login', {
            userSession: sessionUser,
            filterNav: false
        });
    }
}

// logout
const logout = (req, res) => {
    if(!req.session.userRegister){
        res.redirect('/');
    }else{
        req.session.destroy();
        res.redirect('/');
    }
}

// register
const register = (req, res) => {
    const sessionUser = req.session.userRegister;
    if(sessionUser){
        res.redirect('/');
    }else{
        res.render('./modules/register', { 
            userSession: sessionUser,
            StateList: StateList,
            filterNav: false
        });
    }
}

// form add properties
const addPropertie = (req, res, next) => {
    this.arr = req.files
    // console.log(this.arr)
    // https://flaviocopes.com/how-to-handle-file-uploads-node/
    res.send('ok')
} 

module.exports = {
    home,
    casas,
    terrenos,
    alquileres,
    proyectos,
    inversiones,
    propiedad,
    verifyLogin,
    verifyRegister,
    login,
    logout,
    register,
    addPropertie
};