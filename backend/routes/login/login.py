from flask import Blueprint, request, jsonify #Importamos las herramientas de flask para crear las rutas, peticiones y trabajar con JSON
from flask_bcrypt import Bcrypt
from dbconnect.dbConnect import get_connection
import os #Este import nos ayudará en un futuro con el .env de nuestro backend
from Schemas.loginschema import loginSchema

login_schema = loginSchema()
bcrypt = Bcrypt() #Creamos una instancia de Bcrypt
auth_bp = Blueprint('auth_bp', __name__)# Creamos una ruta para nuestro servidor usando Blueprint

#Definimos la ruta además de incluir los métodos que esta usará en este caso POST y ponemos OPTIONS para poder procesar en un futuro.
@auth_bp.route('/Login', methods=['POST','OPTIONS'])
def login():#Definimos nuestro método login
    if request.method == "OPTIONS":
        return jsonify({'status':'ok'}),200
    try:#Intentamos establecer la conexión con el servidor
        conn = get_connection()
        cursor = conn.cursor() 
        data = request.get_json()#De nuestro frontend obtenemos la información del login
        #Si la información cargada es None entonces retornamos el error que indica que se debe de recibir la información en formato JSON
        if data is None:
            return jsonify({'message':'El contenido debe de ser un JSON'}),400
        #Validamos la información usando nuestro schema y la asignamos a una variable
        data_validada =  login_schema.load(data)
        correo_electronico = data_validada["correoElectronico"]
        #Definimos nuestro query que vamos a ejecutar, en este caso seleccionamos el correo y la contraseña (hasheada) que vamos a verificar
        query = """
            SELECT correoElectronico, contraseña FROM usuarios WHERE correoElectronico = %s
        """
        #Ejecutamos el query junto con la información que se necesita
        cursor.execute(query, (correo_electronico,))
        
        usuario = cursor.fetchone()
        conn.close()
        
        if usuario is None:
            return jsonify({'message':'ERROR, correo no encontrado'})

        correoElectronico, contrasena =  usuario
        
        #En este paso vamos a verificar la contraseña
        if bcrypt.check_password_hash(contrasena, data_validada['password']):
            return jsonify({'message':'Inicio de sesión éxitoso'}),200
        else:
            return jsonify({'message':'Error, credenciales incorrectas, intente nuevamente'}),401
        
    except Exception as e:#En caso de fallar con la conexión obtenemos el error
        return jsonify({'message':str(e)}),500