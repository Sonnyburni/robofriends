import { 
    CHANGE_SEARCH_FIELD ,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField:''
    }
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined,{})).toEqual({searchField:''})
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch,{
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField:'abc'
        })
    })

})

describe('getRobots', () => {
    const initialStateRobots = {
        isPending: false,
        users: [],
    }
    it('should return the initial state', () => {
        expect(reducers.getRobots(undefined,{})).toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(
          reducers.getRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
          })
        ).toEqual(
          {
            users: [],
            isPending: true
          }
        )
      })

      it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(
          reducers.getRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'j@jmail.com'
              }]
          })
        ).toEqual(
            {
              users: [{
                id: '123',
                name: 'test',
                email: 'j@jmail.com'
              }],
              isPending: false
            }
          )
      })

      it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(
          reducers.getRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'NOOO'
          })
        ).toEqual(
          {...initialStateRobots,
            error: 'NOOO',
            users: [],
          }
        )
      })
})