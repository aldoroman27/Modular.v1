#Importamos las librerías que utilizaremos para el back
from flask import Flask, jsonify
from flask_cors import CORS
from routes.showuserInfo import showuserInfo_bp
from routes.signin import sigin_bp

#Creamos una instancia de Flask
app = Flask(__name__, static_folder='static')
#Creamos una instancia de CORS
CORS(app, resources={r"/*":{"origins":"*"}}, supports_credentials=True)


#Definimos una ruta raíz de nuestro servidor
@app.route('/')
def index():#Definimos una función para comprobar que está funcinando correctamente
    try:#Intentamos hacer la conexión
        return 'I´m alive'#Retornamos un mensaje de que se encuentra vivo el server
    except Exception as e:#En caso de fallar
        print(f"Error de conexión: {str(e)}")#Imprimos en consola el error
        return jsonify({'message':str(e)}),500#Retornamos el error en formato json y además con su codigo de servidor
    
app.register_blueprint(showuserInfo_bp)
app.register_blueprint(sigin_bp)

if __name__ == '__main__':
    app.run(debug=True)