from model_skeleton import train_model
import pickle
import numpy as np

area_list = ['WEST TOWN']#, 'NEAR WEST SIDE', 'AUSTIN', 'HUMBOLDT PARK', 'LOGAN SQUARE']

for area in area_list:
    model, data = train_model(area)
    with open(f'{area}_model.pkl', 'wb') as file:
        pickle.dump(model, file)
    np.savetxt('last_168.csv', data)
