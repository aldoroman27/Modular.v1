from flask import jsonify, request, Blueprint
from dbconnect.dbConnect import get_connection

ejercicios_bp = Blueprint('ejercicios_bp',__name__)

@ejercicios_bp.route('/ejercicios',methods=['GET', 'POST'])
def obtenerEjercicios():
    try:
        conn = get_connection()
        cursor = conn.cursor()
    except ConnectionRefusedError as error:
        return jsonify({'message':'Error al establecer la conexión con la base de datos'})
    except Exception as e:
        return jsonify({'message':f"Error de conexión con el servidor {str(e)}"}),500

