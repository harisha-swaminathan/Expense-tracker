import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
  const database=firebase.database();
  const gProvider= new firebase.auth.GoogleAuthProvider();
  export {firebase, gProvider, database as default};





















//   database.ref().on('child_removed',(snapshot)=>{
//       console.log(snapshot.key,snapshot.val());
//   });
//   database.ref().on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// database.ref().on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// database.ref().once('value').then((snapshot)=>{
// const expenses=[];
// snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//     });
// });
// console.log(expenses);
// });
// database.ref().on('value',(snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//     });
    
//   database.ref('Expenses').push({
//       description:'notebook',
//       note:'the pink one',
//       amount:9,
//       createdAt:99
//   });
//   database.ref('Expenses').push({
//     description:'pen',
//     note:'the red one',
//     amount:9,
//     createdAt:99
// });
  

//   database.ref().on('value',(snapshot)=>{
//       const val=snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   });


//   database.ref().once('value')
//   .then((snapshot)=>{
//     const val=snapshot.val();
//     console.log(val);
//   }).catch((e)=>{
//     console.log("datat fetching unsuccessful",e);
//   });
  
//   database.ref().set({
//       name:'Harisha Rajam',
//       age:22,
//       stressLevel:6,
//       job:{
//         title:'Student',
//         company:'GMU'
//       },
//       location:{
//         city:'Fairfax',
//         State:'va'
//     }
//   }).then(()=>{
//       console.log('success');
//   }).catch((e)=>{
//       console.log('error:',e);
//   });

// database.ref().remove().then(()=>{
//     console.log('data removed');
// }).catch((e)=>{
//     console.log('remove unsuccessful',e);
// });
  
// database.ref().update({
//     stressLevel:8,
//     'job/title':'Front end Developer',
//     'job/company':'dpt',
//     'location/city':'dallas',
//     'location/State':'texas'
// });