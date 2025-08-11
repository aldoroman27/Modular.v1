#Importamos nuestras librerías que necesitaremos
#Importamos Blueprint, request para las peticiones y jsonify para retornar la información
from flask import Blueprint, request, jsonify
#Importamos Bcrypt para poder encriptar las contraseñas
from bcrypt import Bcrypt
#Importamos os para poder importar las rutas 
import os
#Importamos nuestra función para hacer la conexión a la base de datos.
from dbconnect.dbConnect import get_connection
#Importamos el schema de nuestro registro.
from Schemas import signInschema

#Generamos una instancia de Bcrypt para poder encriptar las contraseñas bajo un formato
bcrypt =  Bcrypt()
#Definimos el Blueprint para poder usar la ruta dentro de nuestra app.py
sigin_bp = Blueprint('sigin_bp', __name__)

#Definimos la ruta de nuestro bp, junto con los métodos que vamos a utilizar (POST y OPTIONS)
@sigin_bp.route('/signin', methods=['POST', 'OPTIONS'])
#Definimos la función para ingresar.
def sign():
    #Generamos un bloque Try para no "crashear" en caso de error
    try:
        #Obtenemos la información que necesitamos de la petición enviada por el front.
        data = request.get_json()
        
        nombre_completo = data.get('nombreCompleto')
        correo_electronico = data.get('correoElectronico')
        password = data.get('password')
        
        
        
        
        pass
    except Exception as e:
        return jsonify({'message':str(e)}),500