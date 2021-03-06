import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
  
import { AppState, appState } from '../../store';
import { Category } from '../../model';
  
@Injectable()
export class CategoriesResolver implements Resolve<Category[]> {
  constructor(private store: Store<AppState>, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {   
    return this.store.select(appState.coreState).select(s => s.categories).filter(c => c.length > 0).take(1);
  }
}