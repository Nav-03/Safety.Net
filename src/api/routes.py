"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Coordinator
from api.models import db, Event
from api.models import db, Guest
from api.models import db, GuestPermission
from api.models import db, Event_Coordinator
# from api.models import db, Permission
from api.utils import generate_sitemap, APIException
# from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



@api.route('/coordinator', methods=['POST'])
def create_coordinator():
    coordinator = Coordinator(email=email, password=password)
    db.session.add(coordinator)
    db.session.commit()
    return jsonify(coordinator.serialize())


@api.route('/coordinator', methods=['GET'])
def Event_Coordinator():
    all_coordinators = Coordinator.query.all()
    return jsonify([c.serialize() for c in all_coordinators])





@api.route('/guest', methods=['POST'])
def create_guest():
    guest = Guest(email=email,Hash=Hash,event_id=event_id )
    db.session.add(guest)
    db.session.commit()
    return jsonify(guest.serialize())


@api.route('/guest', methods=['GET'])
def Guest():
    all_guests = Guest.query.all()
    return jsonify([g.serialize() for g in all_guests])


@api.route('/event', methods=['POST'])
def event():
    body = request.get_json()
    event = Event()
    event.event_name =body['Event_Name']
    db.session.add(event)
    db.session.commit()
    return jsonify(event.serialize())

@api.route('/event', methods=['GET'])
def Event():
    event_name = request.json.get('event_name', None)
    event_id = request.json.get('event_Id', None)
    return jsonify(event)
   
# @api.route('/room', methods=['GET'])
# def Room():
#     Room_Name = request.json.get('Room_Name', None)
#     Event_id = request.json.get('Event_Id', None)
#     Permission_id = request.json.get('Permission_id', None)
#     return jsonify(room)

# @api.route('/guest_permission', methods=['GET'])
# def TokenPermission():
#     Token_id = request.json.get('Token_id', None)
#     Permission_id = request.json.get('Permission_id', None)

# @api.route('/permission', methods=['GET'])
# def Permission():
#      Event_id = request.json.get('Event_Id', None)




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