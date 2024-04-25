import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess, signupStart, signupSuccess } from './auth.actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setErrorMessage, setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));
            const userInfo = this.authService.formatUser(data);
            return loginSuccess({ userInfo });
          }),
          catchError((errResp) => {
            console.log(errResp);
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[loginSuccess, signupSuccess]),
        tap((action) => {
          /* scenario = First get the error banner then login with proper credentials
          the error banner stays in the home page. we can fix this with below line. */
          this.store.dispatch(setErrorMessage({ message: '' }));
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );


 /* signUpRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(signupSuccess),
        tap((action) => {
          /~ scenario = First get the error banner then signup with proper credentials
          the error banner stays in the home page. we can fix this with below line. ~/
          this.store.dispatch(setErrorMessage({ message: '' }));
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );*/

  signUp$ = createEffect(() => {
    return this.actions$.pipe(ofType(signupStart), exhaustMap((action) => {
      return this.authService.signUp(action.email, action.password).pipe(
        map((data) => {
          this.store.dispatch(setLoadingSpinner({ status: false }));
          const userInfo = this.authService.formatUser(data);
          return signupSuccess({ userInfo });
        }),
        catchError((errResp) => {
          console.log(errResp);
          this.store.dispatch(setLoadingSpinner({ status: false }));
          const errorMessage = this.authService.getErrorMessage(
            errResp.error.error.message
          );
          return of(setErrorMessage({ message: errorMessage }));
        })
      )
    }))
  })
}
