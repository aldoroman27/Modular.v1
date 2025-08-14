from marshmallow import Schema, fields, validate, ValidationError

class SignInSchema(Schema):
    nombreCompleto = fields.String(required=True, validate=validate.Length(min=3, max=100))
    correoElectronico =  fields.Email(required=True)
    nombreUsuario = fields.String(required=True, validate=validate.Length(min=3, max=30))
    password = fields.String(required=True, validate=validate.Length(min=6))
    confirmPassword = fields.String(required=True)
    
    def validate_password(self, data):
        if data.get("password") != data.get("confirmPassword"):
            raise ValidationError("Las contraseñas no coinciden", filed_name="confirmPassword")

