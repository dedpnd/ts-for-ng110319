import { Observable, of, zip, interval } from 'rxjs';
// import { delayWhen } from 'rxjs/operators';

let seq3$: Observable<number> = interval(2000);
let seq4$: Observable<number> = of(6, 5, 4, 3, 2, 1);

zip(seq3$, seq4$).subscribe((val: number[]) => {
  console.log(val)
})

// let seq2$: Observable<string> = new Observable((obs: Observer<string>)=>{
//   for (let index = 0; index < 10; index++) {
//     setTimeout(()=>{
//       obs.next('here: '+ index);
//     }, 1000*index)
//   }
// });

// seq2$.subscribe((val)=>{
//   console.log(val)
// })

// let seq$: Observable<number> = from([1,2,3,4,5,6,7]).pipe(
//   tap(()=>{
//     setTimeout(()=>{
//       console.log('hi')
//     }, 1000);
//   })
// );

// console.log('seq$', seq$);

// seq$.subscribe((val)=>{
//   console.log(val);
// })