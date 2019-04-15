# backend
backend for the NBA careers repo


**/--------------------------------------------/ ALL PLAYERS /-----------------------------------------/**

### **Get all Players**

_url_: `/api/players`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
    {
        "id": 1,
        "player": "Robert Parish",
        "allNba": 2,
        "allStar": 9,
        "draftYear": 1976,
        "pick": 8,
        "team": "GSW",
        "college": "Centenary College of Louisiana",
        "years": 21,
        "games": 1611,
        "minutesPlayed": 45704,
        "points": 23334,
        "trb": 14715,
        "totalAssists": 2180,
        "fgPercent": 0.537,
        "tpPercent": 0,
        "ftPercent": 0.721,
        "minutesPerGame": 28.4,
        "pointsPerGame": 14.5,
        "trbPerGame": 9.1,
        "assitsPerGame": 1.4,
        "winShare": 147,
        "wsPerGame": 0.154,
        "bpm": 1.6,
        "vorp": 41.5,
        "executive": "Al Attles",
        "tenure": "3641 days 00:00:00.000000000",
        "executiveId": 1,
        "execDraftExp": 1,
        "attendCollege": 1,
        "firstYear": 0,
        "secondYear": 0,
        "thirdYear": 0,
        "fourthYear": 0,
        "fifthYear": 0
    },
    {
        "id": 2,
        "player": "Sonny Parker",
        "allNba": 0,
        "allStar": 0,
        "draftYear": 1976,
        "pick": 17,
        "team": "GSW",
        "college": "Texas A&M University",
        "years": 6,
        "games": 452,
        "minutesPlayed": 10916,
        "points": 4471,
        "trb": 1841,
        "totalAssists": 954,
        "fgPercent": 0.501,
        "tpPercent": 0,
        "ftPercent": 0.755,
        "minutesPerGame": 24.2,
        "pointsPerGame": 9.9,
        "trbPerGame": 4.1,
        "assitsPerGame": 2.1,
        "winShare": 26.9,
        "wsPerGame": 0.118,
        "bpm": 2.2,
        "vorp": 11.5,
        "executive": "Al Attles",
        "tenure": "3641 days 00:00:00.000000000",
        "executiveId": 1,
        "execDraftExp": 1,
        "attendCollege": 1,
        "firstYear": 0,
        "secondYear": 0,
        "thirdYear": 0,
        "fourthYear": 0,
        "fifthYear": 0
    }
]
```

**/--------------------------------------------/ SINGLE PLAYER /-----------------------------------/**

### **Get a single Player**

_url_: `/api/players/:id`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
    {
        "id": 45,
        "player": "Larry Smith",
        "allNba": 0,
        "allStar": 0,
        "draftYear": 1980,
        "pick": 24,
        "team": "GSW",
        "college": "Alcorn State University",
        "years": 13,
        "games": 883,
        "minutesPlayed": 22879,
        "points": 5904,
        "trb": 8125,
        "totalAssists": 941,
        "fgPercent": 0.531,
        "tpPercent": 0,
        "ftPercent": 0.531,
        "minutesPerGame": 25.9,
        "pointsPerGame": 6.7,
        "trbPerGame": 9.2,
        "assitsPerGame": 1.1,
        "winShare": 46,
        "wsPerGame": 0.096,
        "bpm": 0.6,
        "vorp": 15,
        "executive": "Al Attles",
        "tenure": "3641 days 00:00:00.000000000",
        "executiveId": 1,
        "execDraftExp": 5,
        "attendCollege": 1,
        "firstYear": 0,
        "secondYear": 0,
        "thirdYear": 0,
        "fourthYear": 0,
        "fifthYear": 0
    }
]
```