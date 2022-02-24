from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Coordinator(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Coordinator {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Event_Coordinator(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    coordinator_id = db.Column(db.Integer, db.ForeignKey('Coordinator.id'))
    event_id = db.Column(db.Integer, db.ForeignKey('Event.id'))
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Event_Coordinator {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "Coordinator_ID": self.Coordinator_ID,
            "Event_ID": self.Event_ID,
            # do not serialize the password, its a security breach
        }

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event_name = db.Column(db.String(120), unique=True, nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('Event.id'))
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Event {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "event_name": self.event_name,
            "event_id": self.event_id,
            # do not serialize the password, its a security breach
        }

class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_name = db.Column(db.String(120), unique=True, nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('Event.id'))
    permission_id = db.Column(db.Integer, db.ForeignKey('permission.id'))
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Room {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "room_name": self.room_name,
            "event_id": self.event_id,
            "permission_id": self.permission_id,
            # do not serialize the password, its a security breach
        }

class Token(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Hash = db.Column(db.String(120), unique=True, nullable=False)
    guest_email = db.Column(db.String(80), unique=False, nullable=False)
    created_at = db.Column(db.String(80), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Token {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "hash": self.Hash,
            "guest_email": self.Guest_Email,
            "created_at": self.Created_At,
            # do not serialize the password, its a security breach
        }
class TokenPermission(db.Model):
    token_id = db.Column(db.Integer, db.ForeignKey('Token.id'))
    permission_id = db.Column(db.Integer, db.ForeignKey('permission.id'))
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'TokenPermission {self.id}'

    def serialize(self):
        return {
            "Token_ID": self.Event_ID,
            "Permission_ID": self.Permission_ID,
            # do not serialize the password, its a security breach
        }
class Permission(db.Model):
    id = db.Column(db.Integer, primary_key=True) 
    event_id = db.Column(db.Integer, db.ForeignKey('Event.id'))
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Permission {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "event_id": self.event_id,
            # do not serialize the password, its a security breach
        }