"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint, redirect
from api.models import db, Coordinator
from api.models import db, Event
from api.models import db, Guest
from api.models import db, GuestPermission
from api.models import db, Event_Coordinator
from api.models import db, Permission
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

api = Blueprint('api', __name__)




@api.route('/coordinator', methods=['POST'])
def create_coordinator():
    coordinator = Coordinator(email=email, password=password)
    db.session.add(coordinator)
    db.session.commit()
    return jsonify(coordinator.serialize())


@api.route('/coordinator', methods=['GET'])
@jwt_required()
def coordinator():
    current_coordinator_id = get_jwt_identity()
    coordinator = Coordinator.query.get(current_coordinator_id)
    # all_coordinators = Coordinator.query.all()
    # return jsonify([c.serialize() for c in all_coordinators])
    return jsonify({"id": coordinator.id, "email": coordinator.email }), 200



@api.route('/redirect', methods=['GET'])
@jwt_required()
def redirect_qr_scan():
    
    user_id = get_jwt_identity()
    coordinator = Coordinator.query.filter_by(id=user_id).first()
    guest = Guest.query.filter_by(id=user_id).first()
    if guest is not None:
        return redirect(os.getenv("FRONTEND_URL", "")+ f"/guest_scan?token={request.args.get('token')}", code=302)
    if coordinator is not None:
        return redirect(os.getenv("FRONTEND_URL","")+ f"/coordinator_scan?token={request.args.get('token')}", code=302)
    
    return (f"I have no idea who you are {user_id}")





@api.route('/guest', methods=['POST'])
def create_guest():
    guests = request.get_json()
    if request.json is None:
        return jsonify({"msg":"Missing the payload"}), 400
    email = request.json.get('email', None)
    name = request.json.get('name', None)
    event_id = request.json.get('event_id', None)
    guest = Guest(name=name,email=email,event_id=event_id) 
    db.session.add(guest)
    db.session.commit()
    access_token = create_access_token(identity=guest.id)
    guest.guest_hash = access_token
    db.session.add(guest)
    db.session.commit()
    message = Mail(
    from_email='from_email@example.com',
    to_emails=email,
    subject='Welcome to Safety.net',
    html_content='<strong>and easy to do anywhere, even with Python</strong>')
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)
    return jsonify(guest.serialize())


@api.route('/guest', methods=['GET'])
def guest():
    guests = Guest.query.all()
    all_guests = list(map(lambda x:x.serialize(),guests))
    return jsonify(all_guests), 200

# @api.route('/guest/<int:guest_id>', methods=['GET'])
# def getGuest():
#     guest = Guest.query.get(guest.id)
#     return jsonify(guest), 200


@api.route('/guest/<int:guest_id>', methods=['PUT'])
def edit_guest(guest_id):
    guest = Guest.query.get(guest.id)
    if guest is None:
        raise APIException('Guest not found', status_code=404)
    if "name" in body:
        guest.name = body["name"]
    if "email" in body:
        guest.email = body["email"]
    db.session.commit()
    return jsonify(guest.serialize())

# @api.route('/guest', methods=['DELETE'])
# def delete_guest():
#         guest = Guest.query.get(guest.id)
#         if guest is None:
#             raise APIException('User not found', status_code=404)
# db.session.delete(guest)
# db.session.commit()

@api.route('/event', methods=['POST'])
def create_event():
    body = request.get_json()
    event = Event()
    event.event_name =body['Event_Name']
    db.session.add(event)
    db.session.commit()
    return jsonify(event.serialize())

@api.route('/event', methods=['GET'])
def event():
    event_name = request.json.get('event_name', None)
    event_id = request.json.get('event_Id', None)
    return jsonify(event)
   

@api.route('/permission', methods=['POST'])
def create_permission():
    permission = Permission(name = name , event_id = event_id , guest = guest )
    db.session.add(permission)
    db.session.commit()
    return jsonify(permission.serialize())



@api.route('/permission', methods=['GET'])
def permission():
    name = request.json.get('name', None)
    event_id = request.json.get('event_Id', None)
    guest = request.json.get('guest', None)
    return jsonify(permission)
   

# @api.route('/permission', methods=['DELETE'])
# def delete_permission():
#     permission = Permission.query.get(permission.id)
#     if permission is None:
#         raise APIException('Permission not found', status_code=404)
# db.session.delete(permission)
# db.session.commit()


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