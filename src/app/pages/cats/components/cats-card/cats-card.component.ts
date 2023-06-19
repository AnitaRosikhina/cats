import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NCats } from "../../interfaces/cats";

@Component({
  selector: 'app-cats-card',
  templateUrl: './cats-card.component.html',
  styleUrls: ['./cats-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsCardComponent {
  @Input() item!: NCats.Item;
}
