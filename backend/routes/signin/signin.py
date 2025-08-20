#Importamos nuestras librerías que necesitaremos
#Importamos Blueprint, request para las peticiones y jsonify para retornar la información
from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
#Importamos Bcrypt para poder encriptar las contraseñas
from flask_bcrypt import Bcrypt
#Importamos os para poder importar las rutas 
import os
#Importamos nuestra función para hacer la conexión a la base de datos.
from dbconnect.dbConnect import get_connection
#Importamos el schema de nuestro registro.
from Schemas.signInschema import SignInSchema
#Importamos la librería de marshmallow para los posibles errores que se presenten durante las validaciones
from marshmallow import ValidationError
#Importamos datetime para manejar el campo de fecha de registro
from datetime import datetime

registrarse_schema = SignInSchema()
#Definimos el Blueprint para poder usar la ruta dentro de nuestra app.py
sigin_bp = Blueprint('sigin_bp', __name__)

#Definimos la ruta de nuestro bp, junto con los métodos que vamos a utilizar (POST y OPTIONS)
@sigin_bp.route('/signin', methods=['POST', 'OPTIONS'])
#Definimos la función para ingresar.
def signIn():
    # flask-cors debería manejar esto, pero lo haremos explícitamente para asegurar que funcione.
    # Si la petición es OPTIONS, el navegador solo está pidiendo permiso.
    # Respondemos con un OK (200) y dejamos que flask-cors añada los headers correctos.
    if request.method == 'OPTIONS':
        return jsonify({"status": "ok"}), 200

    # Si la petición es POST, ejecutamos toda tu lógica original.
    try:
        print("llegué aquí")
        bcrypt = Bcrypt()
        data = request.get_json()

        # Verificamos si get_json() devolvió algo
        if data is None:
            return jsonify({'error': 'La petición debe contener un JSON'}), 400

        registro_validado = registrarse_schema.load(data)
        nivel = 1
        hashed_password = bcrypt.generate_password_hash(registro_validado['password']).decode('utf-8')
        fecha_registro = datetime.now().strftime("%Y-%m-%d")
        
        conn = get_connection()
        cursor = conn.cursor()
        print("Ando aquí mi pa")
        query = """
            INSERT INTO usuarios (nombreCompleto, nombreUsuario, correoElectronico, contraseña, nivel, fechaRegistro)
            VALUES (%s, %s, %s, %s, %s, %s)
        """
        print("Armé el query")
        cursor.execute(query, (
            registro_validado['nombreCompleto'],
            registro_validado['nombreUsuario'],
            registro_validado['correoElectronico'],
            hashed_password,
            nivel,
            fecha_registro
        ))
        print("Envié el query")
        conn.commit()
        
        cursor.close()
        conn.close()
        
        return jsonify({'message': 'Usuario registrado con éxito'}), 201
        
    except ValidationError as err:
        return jsonify({'error': err.messages}), 400
    except Exception as e:
        # Es buena práctica imprimir el error en el servidor para depurar
        print(f"Error en /signin: {e}")
        return jsonify({'message': str(e)}), 500