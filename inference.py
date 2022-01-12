import pickle
import flask
import numpy as np

# 2019-09-30 23:00:00

X = np.loadtxt('last_168.csv')
area_list = ['WEST TOWN']  # , 'NEAR WEST SIDE', 'AUSTIN', 'HUMBOLDT PARK', 'LOGAN SQUARE']
models = []
for area in area_list:
    with open(f'{area}_model.pkl', 'rb') as file:
        models.append(pickle.load(file))

api = flask.Flask('API')


@api.route('/predict_scooters_west_town')
def predict():
    model = models[0]
    data = X.copy()
    for i in range(int(flask.request.args.get('hours_ahead'))):
        pred = model.predict(data[None, -168:])
        data = np.append(data, max(0, int(pred[0])))
    return str(max(0, int(pred[0])))


if __name__ == '__main__':
    api.run(host='0.0.0.0', port=8080)
