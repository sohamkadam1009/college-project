import pickle
import json
import numpy as np
import pandas as pd

__locations = None
__data_columns = None
__model = None


def get_estimated_price(location, sqft, bhk, bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >= 0:
        x[loc_index] = 1
    x_df = pd.DataFrame([x], columns=__data_columns)
    return round(__model.predict([x])[0], 2)


def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns
    global __locations

    with open("./server/artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]  # first 3 columns are sqft, bath, bhk

    global __model
    if __model is None:
        with open('./server/artifacts/Pune_house_price_model.pickle', 'rb') as f:
            __model = pickle.load(f)
    print("loading saved artifacts...done")


def get_location_names():
    return __locations


def get_data_columns():
    return __data_columns


# Add a dictionary to store descriptions of locations
__location_descriptions = {
    "wagholi": "Wagholi is a developing residential area in Pune with growing real estate demand.",
    "alandi road": "Alandi Road is known for its spiritual significance and growing housing projects.",
    "kothrud": "Kothrud is a well-established residential area with excellent connectivity and amenities.",
    "baner": "Baner is a posh locality in Pune, known for IT parks and modern infrastructure.",
    # Add more location descriptions as needed
}


def get_location_description(location):
    # Standardize location input for matching
    location_lower = location.lower()
    return __location_descriptions.get(location_lower, "Description not available for this location.")


if __name__ == '__main__':
    load_saved_artifacts()

    print(get_location_description(""))
    # print(get_estimated_price('wagholi', 1000, 3, 3))
    # print(get_estimated_price('alandi Road', 1000, 2, 2))
