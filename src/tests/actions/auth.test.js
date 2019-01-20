import {login,logout } from '../../actions/auth';


test('setup login action', () => {
    const action = login('123abc' );
    expect(action).toEqual({
      type: 'LOGIN',
      uid: '123abc'
    });
  });

  test('setup logout action', () => {
    const action = logout( );
    expect(action).toEqual({
      type: 'LOGOUT'
    });
  });