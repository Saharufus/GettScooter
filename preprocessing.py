import pandas as pd

def preprocessing():
    df=pd.read_csv('e-scooter-trips-2019-pilot-1.csv', usecols =['End Time','End Community Area Name'])
    df=df.dropna()
    return df

def end_time_area(df, area):
    df = df[df['End Community Area Name']==area]['End Time'].value_counts()
    df.index.name = 'date'
    df=df.rename('value_count_at_time')
    df.index = pd.to_datetime(df.index)
    return df

def main():
    df = preprocessing()
    df = end_time_area(df,'WEST TOWN')

if __name__ == '__main__':
    main()
