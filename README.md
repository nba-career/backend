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

**/--------------------------------------------/ ALL PLAYERS NAMES /-----------------------------------/**

### **Get all Player's Names**

_url_: `/api/players/names`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
    {
        "player": "Robert Parish"
    },
    {
        "player": "Sonny Parker"
    },
    {
        "player": "Marshall Rogers"
    },
    {
        "player": "Jeff Fosnes"
    },
    {
        "player": "Carl Bird"
    },
    {
        "player": "Duane Barnett"
    },
    {
        "player": "Gene Cunningham"
    },
    {
        "player": "Jesse Campbell"
    },
    {
        "player": "Stan Boskovich"
    },
    {
        "player": "Howard Smith"
    },
    {
        "player": "Ken Smith"
    },
    {
        "player": "Rickey Green"
    },
    {
        "player": "Wesley Cox"
    },
    {
        "player": "Ricky Love"
    },
    {
        "player": "Marlon Redmond"
    },
    ...
```

**/--------------------------------------------/ ALL TEAMS /-----------------------------------------/**

### **Get all Teams**

_url_: `/api/teams`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
    {
        "team": "ATL"
    },
    {
        "team": "BOS"
    },
    {
        "team": "CHA"
    },
    ...
]
```

**/---------------------------------------/ TEAM ROSTER /-----------------------------------------/**

### **Get Active Members of a Team**

_url_: `/api/teams/:team`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
[
    {
        "id": 3855,
        "player": "Draymond Green",
        "allNba": 1,
        "allStar": 1,
        "draftYear": 2012,
        "pick": 35,
        "team": "GSW",
        "college": "Michigan State University",
        "years": 4,
        "games": 321,
        "minutesPlayed": 8156,
        "points": 2790,
        "trb": 2085,
        "totalAssists": 1094,
        "fgPercent": 0.44,
        "tpPercent": 0.342,
        "ftPercent": 0.69,
        "minutesPerGame": 25.4,
        "pointsPerGame": 8.7,
        "trbPerGame": 6.5,
        "assitsPerGame": 3.4,
        "winShare": 24.7,
        "wsPerGame": 0.145,
        "bpm": 3.7,
        "vorp": 11.8,
        "executive": "Bob Myers",
        "tenure": "1620 days 00:00:00.000000000",
        "executiveId": 17,
        "execDraftExp": 1,
        "attendCollege": 1,
        "firstYear": 0,
        "secondYear": 0,
        "thirdYear": 0,
        "fourthYear": 1,
        "fifthYear": 0,
        "currentPlayer": 1,
        "gamesPerSeason": 80,
        "minutesPerSeason": 2039,
        "predictions": 10,
        "yearStart": 2013,
        "yearEnd": 2018,
        "position": "F",
        "height": "6-7",
        "weight": 230,
        "birthDate": "4-Mar-90"
    },
...
]
```


**/--------------------------------------------/ REGISTER /---------------------------------------/**

###

**Register a User**
_url_: `/api/auth/register`

_http method_: **[POST]**

#### Body

| name         | type   | required | description    |
| ------------ | ------ | -------- | -------------- |
| `username`   | String | Yes      | Must be unique |
| `password`   | String | Yes      |                |

#### Example

```
  {
    "username": "demo",
    "password": "demo"
  }
```

#### Response

##### 201 (created)

###### Example Response

```
    {
    }
```

##### 400 (Bad Request)

```
    {
        "message": "Please under a username and password"
    }
```

**/--------------------------------------------/ LOGIN /---------------------------------------/**

### **Login a user**

_url_: `/api/auth/login`

_http method_: **[POST]**

#### Body

| name       | type   | required | description             |
| ---------- | ------ | -------- | ----------------------- |
| `username` | String | Yes      | must be registered user |
| `password` | String | Yes      |                         |

#### Example

```
  {
    "username": "demo",
    "password": "demo",
  }
```

#### Response

##### 200 (ok)

> no issues logging in

###### Example response

```
    {
        "message": "Welcome demo!",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyb2RvIiwiaWF0IjoxNTU1MzY3NjMwLCJleHAiOjE1NTU0NTQwMzB9.mDqs_xvjYKNBdhXRAEBMAykSaiypCRrYeR_GzkWkGdw"
    }
```

##### 401 (Unauthorized)

```
    {
        "message": "Invalid Credentials"
    }
```

##### 400 (Bad Request)

```
{
  errorMessage: "No valid user credentials provided, please register..."
}
```

**/--------------------------------------------/ ALL USERS /-----------------------------------------/**

### **Get all Users**

_url_: `/api/users`

_http method_: **[GET]**

#### Headers

| name            | type   | required | description              |
| --------------- | ------ | -------- | ------------------------ |
| `Content-Type`  | String | Yes      | Must be application/json |
| `authorization` | String | Yes      | token to Authorize user  |

#### Response

##### 200 (ok)

###### Example response

```
    [
        {
            "id": 1,
            "username": "demo",
            "password": "demo"
        },
        {
            "id": 2,
            "username": "demo1",
            "password": "demo1"
        }
    ]
```