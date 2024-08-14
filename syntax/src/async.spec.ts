import { describe, expect, test } from "vitest";
import { doAsyncthing, someThing } from "./stuff/asynchronous";




describe('Async Stuff', () => {

    test('promise version', (done) => {

        console.log('About to do some promise stuff.');
        const p = doAsyncthing(2);
        console.log('Called the function');
        p.then((result) => {
            done.expect(result).toBe('done with async thing');
        });

    })
    test('thennable', async () => {
        const r1 = await someThing('r1');
        console.log({ r1 });


    })
    test('async version', async () => {
        console.log('About to do some anyc stuff.');
        const result = await doAsyncthing(2);
        console.log(result);
        expect(result).toBe('done with async thing')

    })

    test('awaiting error', async () => {

        try {
            await doAsyncthing(3);
        } catch (error) {
            expect(error).toBe('error with async thing');
        }
    })

    test('synchronous', async () => {
        await doAsyncthing(2);
        await doAsyncthing(4);
    })
    test('parallel', async () => {
        const p1 = doAsyncthing(2);
        const p2 = doAsyncthing(4);
        const results = await Promise.all([p1, p2]);
        expect(results).toEqual(['done with async thing', 'done with async thing']);
    })

    test('parallel with error', async () => {

        const p1 = doAsyncthing(2); //.then((result) => console.log({ result }));
        const p2 = doAsyncthing(3);
        // all vs. allSettled
        const all = Promise.all([p1, p2])
            .then((results) => {
                console.log({ m: 'Got the Results', r0: results[0], r1: results[1] });
            })
            .catch((error) => {
                console.log({ m: 'Got the Error', error });

            });
        await all;



    })
})