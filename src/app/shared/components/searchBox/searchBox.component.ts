import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './searchBox.component.html',
  styleUrl: './searchBox.component.css',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private deBouncer: Subject<string> = new Subject<string>();
  private deBouncerSubscription?: Subscription;

  @Input()
  public placeHolder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDeBounce: EventEmitter<string> = new EventEmitter();

  emitSearchValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.deBouncer.next(searchTerm);
  }

  ngOnInit(): void {
    this.deBouncerSubscription = this.deBouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDeBounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.deBouncerSubscription?.unsubscribe();
  }
}
