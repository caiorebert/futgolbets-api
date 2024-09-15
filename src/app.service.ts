import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEvents() {
    const dados = {
      "status": "success",
      "timestamp": "2024-09-11T12:34:56Z",
      "data": {
        "sports": [
          {
            "sport_id": 1,
            "name": "Soccer",
            "events": [
              {
                "event_id": 101,
                "teams": {
                  "home": "FC Fictional",
                  "away": "Imaginary United"
                },
                "start_time": "2024-09-15T16:00:00Z",
                "odds": {
                  "home_win": 1.85,
                  "draw": 3.50,
                  "away_win": 2.20
                },
                "status": "upcoming"
              },
              {
                "event_id": 102,
                "teams": {
                  "home": "Dreamland FC",
                  "away": "Legends FC"
                },
                "start_time": "2024-09-16T18:00:00Z",
                "odds": {
                  "home_win": 2.00,
                  "draw": 3.00,
                  "away_win": 2.50
                },
                "status": "upcoming"
              },
              {
                "event_id": 103,
                "teams": {
                  "home": "Flamengo",
                  "away": "Palmeiras"
                },
                "start_time": "2024-09-16T18:00:00Z",
                "odds": {
                  "home_win": 1.90,
                  "draw": 3.00,
                  "away_win": 4.00
                },
                "status": "upcoming"
              }
            ]
          },
        ]
      }
    };    
    return dados;
  }
}
