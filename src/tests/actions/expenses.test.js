import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense,setExpenses,setStartExpenses,startRemoveExpense,startEditExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid='somerandomtestuid';
const defaultuidstate={auth:{uid}};

beforeEach((done)=>{
const data={};
expenses.forEach(({id,description,note,amount,createdAt}) => {
  data[id]={description,note,amount,createdAt};
});
database.ref(`users/${uid}/expenses/`).set(data).then(()=>{
  done();
})
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('removing expenses from firebase',(done)=>{
  const store = createMockStore(defaultuidstate);
  store.dispatch(startRemoveExpense({id:expenses[0].id})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id:expenses[0].id
    });
    return database.ref(`users/${uid}/expenses/${expenses[0].id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('edit expenses in firebase',(done)=>{
  const store = createMockStore(defaultuidstate);
  store.dispatch(startEditExpense(expenses[2].id, { note: 'New note value' })).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id: expenses[2].id,
      updates: {
      note: 'New note value'
    }
    });
    return database.ref(`users/${uid}/expenses/${expenses[2].id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val().note).toBe('New note value');
    done();
  });

})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultuidstate);
  const expenseData = {
    description: 'laptop',
    amount: 300000,
    note: 'gg',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultuidstate);
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('setup setexpenses action with data',()=>{
  const action=setExpenses(expenses);
  expect(action).toEqual({
    type:'SET_EXPENSES',
    expenses
  })

});

test('get expenses from firebase with SetStartExpenses',(done)=>{
  const store = createMockStore(defaultuidstate);
  store.dispatch(setStartExpenses()).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});



