import pandas as pd


def data_to_area_series(file_name, area):
    """ receives dataframe and the desire are and returns a pandas serieswith date/hour in index and the count of
     scooters renting finishing at this time in value"""
    df = pd.read_csv(file_name, usecols =['End Time','End Community Area Name'])
    df = df.dropna()
    series = df[df['End Community Area Name']==area]['End Time'].value_counts()
    series.index.name = 'date'
    series = series.rename('value_count_at_time')
    series.index = pd.to_datetime(series.index)
    series = series.sort_index()
    series = series[:'2019-09']
    series = series.asfreq(freq='1H')
    series[series.isnull()] = 0
    return series
