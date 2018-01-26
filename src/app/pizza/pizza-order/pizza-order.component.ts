import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as actions from '../pizza.actions';
import * as fromPizza from '../pizza.reducer';

@Component({
  selector: 'pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.sass']
})
export class PizzaOrderComponent implements OnInit {

  pizza: fromPizza.Pizza = {
    id: '',
    size: '',
    status: ''
  }

  pizzas: Observable<any>;

  constructor(private store: Store<fromPizza.State>) { }

  ngOnInit() {
    this.pizzas = this.store.select(fromPizza.selectAll)
    this.store.dispatch(  new actions.Query() )
  }


  updatePizza(id, status) {
    this.store.dispatch( new actions.Update(id, { status }) )
  }
	
  addPizza(id, status) {
    this.store.dispatch( new actions.Added(this.pizza) )
  }

}
