import * as actions from './actions';
import { 
    CHANGE_SEARCH_FIELD ,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
    it('should create an action to search', () => {
      const text = 'Finish docs'
      const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
      }
      expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
  })
  
  describe("Fetch robots action PENDING", () => {
    it("should create a Pending action on request Robots", () => {
      const store = mockStore();
      store.dispatch(actions.requestRobots())
      const action = store.getActions();
      expect(action[0]).toEqual({type: "REQUEST_ROBOTS_PENDING"});
    });
  });