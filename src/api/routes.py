"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Coordinator
from api.models import db, Event_Coordinator
from api.models import db, Event
from api.models import db, Room
from api.models import db, Token
from api.models import db, TokenPermission
from api.models import db, Permission
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



@api.route('/Coordinator', methods=['POST'])
def create_Coordinator():
    Coordinator = Coordinator(email=email, password=password)
    db.session.add(Coordinator)
    db.session.commit()
    return jsonify(Coordinator.serialize())


@api.route('/Event_Coordinator', methods=['GET'])
def Event_Coordinator():
    Coordinator = Coordinator(email=email, password=password)
    db.session.add(Event_Coordinator)
    db.session.commit()
    return jsonify(Event_Coordinator)


@api.route('/Event', methods=['GET'])
def Event():
    Coordinator = Coordinator(email=email, password=password)
    db.session.add(Event)
    db.session.commit()
    return jsonify(Event)

   
@api.route('/Room', methods=['GET'])
def Room():
    Coordinator = Coordinator(email=email, password=password)
    db.session.add(Room)
    db.session.commit()
    return jsonify(Room)


@api.route('/TokenPermission', methods=['POST'])
def TokenPermission():
    Coordinator = Coordinator(email=email, password=password)
    db.session.add(TokenPermission)
    db.session.commit()
    return jsonify(TokenPermission)    

@api.route('/Permission', methods=['POST'])
def Permission():
    Coordinator = Coordinator(email=email, password=password)
    db.session.add(Permission)
    db.session.commit()
    return jsonify(Permission)



@api.route('/Token', methods=['GET'])
def create_Coordinator():
    Coordinator = Coordinator(email=email, password=password)
    db.session.add(Token)
    db.session.commit()
    return jsonify(Token)




@api.route('/token', methods=['POST'])
def create_token():
    if request.json is None:
        return jsonify({"msg":"Missing the payload"}), 400
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Missing email or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })