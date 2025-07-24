from flask import Blueprint, request, jsonify #Importamos las herramientas de flask para crear las rutas, peticiones y trabajar con JSON
from bcrypt import Bcrypt #Usaremos Bcrypt para poder encriptar la data que nos llegue del front y verificar con el backend
import os #Este import nos ayudará en un futuro con el .env de nuestro backend

bcrypt = Bcrypt() #Creamos una instancia de Bcrypt
auth_bp = Blueprint('auth_bp', __name__)# Creamos una ruta para nuestro servidor usando Blueprint

#Definimos la ruta además de incluir los métodos que esta usará en este caso POST y ponemos OPTIONS para poder procesar en un futuro.
@auth_bp.route('/Login', methods=['POST','OPTIONS'])
def login():#Definimos nuestro método login
    try:#Intentamos establecer la conexión con el servidor
        data = request.get_json()#De nuestro frontend obtenemos la información del login
    except Exception as e:#En caso de fallar con la conexión obtenemos el error
        return jsonify({'message':str(e)}),500