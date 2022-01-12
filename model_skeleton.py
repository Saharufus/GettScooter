import pandas as pd
import numpy as np
from preprocessing import data_to_area_series
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression


def train_model(community_area):
    data = data_to_area_series("e-scooter-trips-2019-pilot-1.csv", community_area)
    X = np.zeros((len(data)-168, 168))
    y = np.zeros(len(data)-168)
    for i in range(len(y)):
        X[i, :] = data[i:168+i]
        y[i] = data[168+i]
    lr = LinearRegression()
    lr.fit(X, y)
    return lr, X[-1]
