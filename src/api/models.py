from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


Event_Coordinator = db.Table('association',
    db.Column("event_id", db.Integer, db.ForeignKey("event.id"), primary_key=True),
    db.Column("coordinator_id", db.Integer, db.ForeignKey("coordinator.id"), primary_key=True)
)

class Coordinator(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    event = db.relationship("Event",
                    secondary=Event_Coordinator)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Coordinator : {self.email}'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "coordinator": list(map(lambda x: x.serialize(), self.coordinator))
        }


class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event_name = db.Column(db.String(120), unique=True, nullable=False)
    coordinator = db.relationship("Coordinator",
                    secondary=Event_Coordinator)

    def __repr__(self):
        return f'Event : {self.event_name}'

    def serialize(self):
        return {
            "id": self.id,
            "event_name": self.event_name,
            "event": list(map(lambda x: x.serialize(), self.event))
        }


TokenPermission = db.Table('token_association',
    db.Column("token_id", db.Integer, db.ForeignKey("token.id"), primary_key=True),
    db.Column("permission_id", db.Integer, db.ForeignKey("permission.id"), primary_key=True)
)

class Token(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Hash = db.Column(db.String(120), unique=True, nullable=False)
    guest_email = db.Column(db.String(80), unique=False, nullable=False)
    created_at = db.Column(db.String(80), unique=False, nullable=False)
    permission = db.relationship("Permission",
                    secondary=TokenPermission)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Token : {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "hash": self.Hash,
            "guest_email": self.guest_email,
            "created_at": self.created_at,
            # do not serialize the password, its a security breach
        }

class Permission(db.Model):
    id = db.Column(db.Integer, primary_key=True) 
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'))
    token = db.relationship("Token",
                    secondary=TokenPermission)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Permission : {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "event_id": self.event_id,
            # do not serialize the password, its a security breach
        }

class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_name = db.Column(db.String(120), unique=True, nullable=False)
    guest_email = db.Column(db.String(80), unique=False, nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'))
    permission_id = db.Column(db.Integer, db.ForeignKey('permission.id'))
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Room : {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "room_name": self.room_name,
            "guest_email": self.guest_email,
            "event_id": self.event_id,
            "permission_id": self.permission_id,
            # do not serialize the password, its a security breach
        }