import pandas as pd

def data_to_area_series(file_name, area):
    """ receives dataframe and the desire are and returns a pandas serieswith date/hour in index and the count of
     scooters renting finishing at this time in value"""
    df=pd.read_csv(file_name, usecols =['End Time','End Community Area Name'])
    df=df.dropna()
    serie = df[df['End Community Area Name']==area]['End Time'].value_counts()
    serie.index.name = 'date'
    serie=serie.rename('value_count_at_time')
    serie.index = pd.to_datetime(serie.index)
    return serie

#print(data_to_area_series('/Users/noamcohen/Documents/HackatonITCGroup5/e-scooter-trips-2019-pilot-1.csv', 'WEST TOWN'))


