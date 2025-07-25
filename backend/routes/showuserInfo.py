from flask import jsonify, Blueprint, request
from dbconnect.dbConnect import get_connection
import os
#Definimos nuestro Blueprint para usar nuestra ruta desde app.py
showuserInfo_bp = Blueprint('showuserInfo_bp', __name__)
#Definimos nuestra ruta para hacer la petición para obtener la información del usuario
@showuserInfo_bp.route('/showuserInfo', methods=['GET'])#Usamos el método GET
def showuserInfo():#Definimos la función para mostrar los usuarios
    try:#Hacemos un bloque try para la conexión con el servidor
        conn = get_connection()#Creamos una conexión con nuestra db
        cursor = conn.cursor(dictionary=True)#Indicamos que usaremos un diccionario, util si usamos recursos como JSON
        
        cursor.execute("SELECT * FROM usuarios WHERE idUsuario = 1")#Indicamos la información que necesitamos desde nuestra base de datos
        usuario = cursor.fetchall()#Usamos nuestro cursor para obtener la información arrojada
        cursor.close()#Cerramos nuestro cursos
        conn.close()#Terminamos la conexión con nuestra base de datos
        print("Información del usuario: ",usuario)
        if usuario:#Si es que encontramos información o "existe" usuario
            return jsonify(usuario),200 #Devolvemos esa información a nuestro front en formato json
        else:
            return jsonify({'message':'Error no se encontró ningún usuario'}),400 #En caso de no encontrar info del usuario retornamos error.
    except Exception as e:
        if conn:
            conn.close()
        return jsonify({'message':str(e)}),500 #Retornamos que ocurrió un error al intentar la conexión con el servidor

#Este code es para un futuro, podemos usar JWT para filtrar por token o podemos usar el id almacenado en localStorage, veremos xd
"""
@showuserInfo_bp.route('/showuserInfo', methods=['GET'])
def showuserInfo():
    try:
        id_usuario = request.args.get('idUsuario', type=int)
        if not id_usuario:
            return jsonify({'message': 'Falta el parámetro idUsuario'}), 400

        conn = get_connection()
        cursor = conn.cursor(dictionary=True)

        cursor.execute("SELECT * FROM usuario WHERE idUsuario = %s", (id_usuario,))
        usuario = cursor.fetchall()

        cursor.close()
        conn.close()

        if usuario:
            return jsonify(usuario), 200
        else:
            return jsonify({'message': 'No se encontró ningún usuario'}), 404

    except Exception as e:
        if conn:
            conn.close()
        return jsonify({'message': str(e)}), 500

"""