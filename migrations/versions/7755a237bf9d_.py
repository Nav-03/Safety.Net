"""empty message

Revision ID: 7755a237bf9d
Revises: 5864dc9da6de
Create Date: 2022-03-16 21:27:46.524114

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7755a237bf9d'
down_revision = '5864dc9da6de'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('event', sa.Column('guest_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'event', 'guest', ['guest_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'event', type_='foreignkey')
    op.drop_column('event', 'guest_id')
    # ### end Alembic commands ###