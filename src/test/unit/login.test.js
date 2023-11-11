import { login } from "../../js/api/auth/login";
import { localStorageMock } from "./localstoragemock";

global.localStorage = localStorageMock;

export const globalFetch = async function() {
    const profile = {
        accessToken: 'mockToken'
    }

    const response = {
        json: async () => profile,
        ok: true
    };
    
    return Promise.resolve(response);
}

global.fetch = globalFetch;

test('Login fetches and stores a token in browser storage', async () => {
    
    localStorage.clear()
    const beforeLogin = localStorage.getItem('token');

    await login();

    const afterLogin = localStorage.getItem('token');

    expect(beforeLogin).toEqual(null);
    expect(afterLogin).toEqual('\"mockToken\"');
  });