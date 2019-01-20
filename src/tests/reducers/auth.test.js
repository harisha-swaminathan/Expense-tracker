import auth from '../../reducers/auth';


test('set uid for login',()=>{
    const action={
        type:'LOGIN',
        uid:'123abc'
    }
    const state=auth({},action);
    expect(state).toEqual({
        uid:'123abc'
    })
});

test('clear uid for logout',()=>{
    const action={
        type:'LOGOUT'
    }
    const state=auth({},action);
    expect(state).toEqual({
    })
});