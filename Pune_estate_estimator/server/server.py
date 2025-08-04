from flask import (
    Flask, jsonify, request,
    render_template, send_from_directory
)
import os
import util
util.load_saved_artifacts()


app = Flask(
    __name__,
    static_folder="../client",        # Point to client folder
    template_folder="../client",      # HTML files in client folder
    static_url_path=""
)

# ---------- Frontend Route ----------
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    # Serve static files from client folder
    file_path = os.path.join(app.static_folder, path)
    if path and os.path.isfile(file_path):
        return send_from_directory(app.static_folder, path)
    
    # Serve main HTML file
    return send_from_directory(app.static_folder, "index.html")

# ---------- API Routes ----------
@app.route("/get_location_names")
def get_location_names():
    return jsonify({"locations": util.get_location_names()})

@app.route("/predict_home_price", methods=["POST"])
def predict_home_price():
    data = request.form
    price = util.get_estimated_price(
        data["location"],
        float(data["total_sqft"]),
        int(data["bhk"]),
        int(data["bath"])
    )
    return jsonify({"estimated_price": price})

@app.route("/get_location_description", methods=["POST"])  
def get_location_description():
    desc = util.get_location_description(request.form["location"])
    return jsonify({"description": desc})

if __name__ == "__main__":
    print("Starting Python Flask Server for Pune Estate Estimator...")
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
