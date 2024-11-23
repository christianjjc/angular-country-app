import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './searchBox.component.html',
  styleUrl: './searchBox.component.css',
})
export class SearchBoxComponent {
  @Input()
  public placeHolder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  // @ViewChild('txtSearchInput')
  // public searchInput!: ElementRef<HTMLInputElement>;

  emitSearchValue(value: string): void {
    // const newValue = this.searchInput.nativeElement.value;
    this.onValue.emit(value);
    // this.searchInput.nativeElement.value = '';
  }
}
