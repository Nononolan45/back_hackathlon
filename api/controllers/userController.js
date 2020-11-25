const User = require('../models/userModel');
const routeProvider = require('../providers/route');


exports.list_all_users = (req, res) => {
    User.find({school_id: req.params.school_id}, (error, users) => {
      if(error){
        routeProvider.generateError(500, 'Erreur serveur', res);
      }
      else{
        routeProvider.generateSuccess(200, users, res);
      }
    })
  }
  

exports.create_an_user = (req, res) => {
    let new_user = new User(req.body);
    new_user.school_id = req.params.school_id;

    new_user.save((error, user) => {
        if(error){
            routeProvider.generateError(500, 'Erreur serveur', res);
          }
          else{
            routeProvider.generateSuccess(201, user, res);
          }
    });
}



exports.get_an_user = (req, res) => {
    User.findById(req.params.user_id, (error, user) => {
        if(error){
            routeProvider.generateError(500, 'Erreur serveur', res);
        }else{
            routeProvider.generateSuccess(200, user, res);
        }
    });
}

exports.update_an_user = (req, res) => {
    User.findByIdAndUpdate(req.params.user_id, req.body, { new: true, useFindAndModify: false }, (error, user) => {
        if(error){
            routeProvider.generateError(500, 'Erreur serveur', res);
        }else{
            routeProvider.generateSuccess(200, user, res);
        }
    });
}

exports.delete_an_user = (req, res) => {
    User.findByIdAndRemove(req.params.user_id, (error) => {
        if(error){
            routeProvider.generateError(500, 'Erreur serveur', res);
        }else{
            routeProvider.generateSuccess(200, 'utilisateur supprimé', res);
        }
    })
}