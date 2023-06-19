import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { NCats } from "../../interfaces/cats";
import { debounceTime, Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-cats-filters',
  templateUrl: './cats-filters.component.html',
  styleUrls: ['./cats-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsFiltersComponent implements OnInit, OnDestroy {
  @Input() limitOptions: number[] = [10, 20, 50, 100];
  @Input() breedsList!: NCats.Breed[] | null;
  @Input() defaultFilters!: NCats.Request;

  @Output() filter = new EventEmitter<NCats.Request>();

  formGroup!: FormGroup;
  destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.listenFormValueChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initForm(): void {
    this.formGroup = this.fb.group(this.defaultFilters);
  }

  listenFormValueChanges(): void {
    this.formGroup.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(300)
      )
      .subscribe(res => {
        this.filter.emit(res);
      });
  }
}
