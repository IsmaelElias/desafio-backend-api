const { DeleteRule } = require('../../src/Actions/Rules')

describe('DeleteRule', () => {
    it('should delete an interval', () => {

        const ruleId = 123;

        const interval = {
            "rules": [
              {
                "day": "0",
                "interval": [
                  {
                    "id": 123,
                    "date": null,
                    "start": "09:30",
                    "end": "10:10"
                  }
                ]
              }
            ]
        }

        const expectedResult = {
            "rules": [
              {
                "day": "0",
                "interval": []
              }
            ]
        }

        const result = DeleteRule(interval, ruleId);

        expect(expectedResult).toEqual(result);

    })

    it('should not delete an interval if the id does not match', () => {

        const ruleId = 123;

        const interval = {
            "rules": [
              {
                "day": "0",
                "interval": [
                  {
                    "id": 1245,
                    "date": null,
                    "start": "09:30",
                    "end": "10:10"
                  }
                ]
              }
            ]
        }

        const expectedResult = {
            "rules": [
              {
                "day": "0",
                "interval": [
                    {
                        "id": 1245,
                        "date": null,
                        "start": "09:30",
                        "end": "10:10"
                      }
                ]
              }
            ]
        }

        const result = DeleteRule(interval, ruleId);

        expect(expectedResult).toEqual(result);

    })
})