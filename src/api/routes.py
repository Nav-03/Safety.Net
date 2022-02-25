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
# from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

api = Blueprint('api', __name__)


# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200



@api.route('/Coordinator', methods=['POST'])
def create_Coordinator():
    Coordinator = Coordinator(email=email, password=password)
    db.session.add(Coordinator)
    db.session.commit()
    return jsonify(Coordinator.serialize())


@api.route('/Event_Coordinator', methods=['GET'])
def Event_Coordinator():
    Coordinator_id = request.json.get('Coordinator_Id', None) 
    Event_id = request.json.get('Event_Id', None)

@api.route('/Event', methods=['GET'])
def Event():
    Event_Name = request.json.get('Event_Name', None)
    Event_id = request.json.get('Event_Id', None)
   
@api.route('/Room', methods=['GET'])
def Room():
    Room_Name = request.json.get('Room_Name', None)
    Event_id = request.json.get('Event_Id', None)
    Permission_id = request.json.get('Permission_id', None)


@api.route('/TokenPermission', methods=['GET'])
def TokenPermission():
    Token_id = request.json.get('Token_id', None)
    Permission_id = request.json.get('Permission_id', None)

@api.route('/Permission', methods=['GET'])
def Permission():
     Event_id = request.json.get('Event_Id', None)



# @api.route('/Token', methods=['GET'])
# def create_Coordinator():
#     Coordinator = Coordinator(email=email, password=password)
#     db.session.add(Token)
#     db.session.commit()
#     return jsonify(Token)




@api.route('/token', methods=['POST'])
def create_token():
    if request.json is None:
        return jsonify({"msg":"Missing the payload"}), 400
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    coordinator = Coordinator.query.filter_by(email=email, password=password).first()
    if coordinator is None:
        return jsonify({"msg": "Missing email or password"}), 401
    access_token = create_access_token(identity=coordinator.id)
    return jsonify({ "token": access_token, "coordinator_id": coordinator.id })