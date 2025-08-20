from marshmallow import Schema, fields


class loginSchema(Schema):
    correoElectronico = fields.Email(required=True)
    password = fields.String(required=True)
    
    

