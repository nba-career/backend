# python library import
# pip install pandas numpy matplotlib seaborn sklearn csv warnings lifelines

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
# import csv
# import warnings
import sys, json
from lifelines import KaplanMeierFitter
kmf = KaplanMeierFitter()
# warnings.simplefilter(action='ignore', category=FutureWarning)
pd.options.display.max_rows = 9999

# Cleaned data url
url = 'https://raw.githubusercontent.com/nba-career/Data/master/nba_data.csv'

# Bring data in a variable

df = pd.read_csv(url)

# function creates table based on input values ... default is all positions
# and years


def nba_life(df=df, positions=['G', 'F', 'C', 'F-C', 'G-F', 'C-F', 'F-G'],
             decade=[1950, 1960, 1970, 1980, 1990, 2000, 2010]):
    selections1 = df[df.position.isin(positions)]
    selections2 = selections1[selections1.year_start.isin(decade)]
    kmf.fit(durations=selections2['longevity'],
            event_observed=selections2['active'])
    table = kmf.predict([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                         16, 17, 18, 19, 20, 21, 22])
    return table

# function creates plot based on input values ... default is all positions
# and years


def nba_life_plot(df=df, positions=['G', 'F', 'C', 'F-C', 'G-F', 'C-F', 'F-G'],
                  decade=[1950, 1960, 1970, 1980, 1990, 2000, 2010]):
    selections1 = df[df.position.isin(positions)]
    selections2 = selections1[selections1.year_start.isin(decade)]
    kmf.fit(durations=selections2['longevity'],
            event_observed=selections2['active'])
    kmf.plot()
    plt.ylabel("Probability a Player is Still Active")
    plt.show()

# getting JSON into python script
def read_in():
    lines = sys.stdin.readlines()  
    return json.loads(lines[0])

lines = read_in()
print("lines", lines)

# inputParams = requests.get_json(force=True)
# print("req", requests.get_json(force=True))
# print("inputParams", inputParams)

# input can include and should be in format ['G', 'F', 'C', 'F-C', 'G-F',
# 'C-F', # 'F-G']

# table_position = input()
table_position = lines[0]

# input can include and should be in format [1950, 1960, 1970, 1980, 1990,
# 2000, 2010]

# table_decade = input()
table_decade = lines[1]

# Create text table based on input

nba_life(df, table_position, table_decade)

# input can include and should be in format ['G', 'F', 'C', 'F-C', 'G-F',
# 'C-F', 'F-G']

# plot_position = input()

# input can include and should be in format [1950, 1960, 1970, 1980, 1990,
# 2000, 2010]

# plot_decade = input()

# Create png image of plot based on input

nba_life_plot(df, plot_position, plot_decade)