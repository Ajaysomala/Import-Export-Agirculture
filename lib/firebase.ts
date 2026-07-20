// ---------------------------------------------------------------------------
// TODO(BACKEND — Firebase setup): this file is a scaffold. To go live:
//
// 1. Create a Firebase project (console.firebase.google.com), enable:
//      Firestore, Authentication (Email/Password), Storage, Cloud Functions.
// 2. Copy your web app config into a `.env.local` file (never commit it):
//
//      NEXT_PUBLIC_FIREBASE_API_KEY=...
//      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
//      NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
//      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
//      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
//      NEXT_PUBLIC_FIREBASE_APP_ID=...
//
// 3. Uncomment the code below.
// ---------------------------------------------------------------------------

// import { initializeApp, getApps, getApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';
//
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
//
// export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const storage = getStorage(app);

export {};
