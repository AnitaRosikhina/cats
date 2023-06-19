import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { NCats } from "../../interfaces/cats";

@Component({
  selector: 'app-cats-filters',
  templateUrl: './cats-filters.component.html',
  styleUrls: ['./cats-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsFiltersComponent {
  @Input() limitOptions: number[] = [10, 20, 50, 100];
  @Input() breedsList!: NCats.Breed[] | null;

  breeds = new FormControl();
}
