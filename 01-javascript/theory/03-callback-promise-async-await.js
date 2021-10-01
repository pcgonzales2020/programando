/* eslint-disable no-lone-blocks */

(async () => {
    // 01. CALLBACKS
    // Es una función donde defines el compartimiento pero delegas
    // la tarea de la ejecución a otro
    {
        function getUsersCallback(cb) {
            setTimeout(() => {
                const result = [{
                    id: 1,
                    name: 'Eduardo'
                }];

                cb(result);
            }, 1000);
        }

        getUsersCallback((users) => {
            console.log(users[0].name);
        });
    };

    // 02. PROMISE
    // Una promesa es una respuesta que puede ser éxito o fracaso
    // y nos ofrece una interface más limpia
    {
        function getUsersPromise() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const result = [{
                        id: 1,
                        name: 'Eduardo'
                    }];

                    resolve(result);
                }, 1000);
            });
        }

        getUsersPromise()
            .then((users) => console.log(users[0].name));
    };

    // 03. ASYNC/AWAIT
    // Este es una forma mucho más limpia que nos permite trabajar con las promesas
    {
        async function getUsersAsyncAwait() {
            const result = [{
                id: 1,
                name: 'Eduardo'
            }];

            return result;
        }

        const users = await getUsersAsyncAwait();
        console.log(users[0].name);
    };
})();