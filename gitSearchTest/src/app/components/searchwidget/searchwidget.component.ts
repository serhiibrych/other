import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-searchwidget',
  templateUrl: './searchwidget.component.html',
  styleUrls: ['./searchwidget.component.scss']
})
export class SearchwidgetComponent {
  initialValue: string = '';
  debounceTime = 300;

  @Output() textChange = new EventEmitter<string>();

  inputValue = new Subject<string>();
  trigger = this.inputValue.pipe(
    debounceTime(this.debounceTime),
    distinctUntilChanged()
  );

  subscriptions: Subscription[] = [];

  constructor() {
  }

  ngOnInit() {
    const subscription = this.trigger.subscribe(currentValue => {
      this.textChange.emit(currentValue);
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onInput(inputValue: any) {
    if (inputValue.target.value.length > 2) {
      this.inputValue.next(inputValue.target.value);
    }
  }
}
