import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPasswors,
  updateProfile,
  signOut
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // cleanup
  // deal with memory leak
  // para limpar resquicios de dados que possam restar entre navegações entre páginas
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  // função que evita vazamento de memoria
  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }


}