export const sendForm = (name: string, number: string, access: boolean) => fetch('/api/feedbackform', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, number, access }),
})
.then((res): Promise<any> => {
    if (!res.ok) {
        return res.json()
        .then((err: any): void => {
            if (err.error) {
                throw new Error(err.error);
            } else {
                throw new Error(err.message);
            }
        });
    }
    return res.json();
})
.catch((err) => { 
    throw new Error(err.message);
})