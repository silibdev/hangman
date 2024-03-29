import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameQuery } from '../../state/game.query';
import { BaseDirective } from '../../../core/base-objects/base.directive';

@Component({
  selector: 'hmo-room-title',
  templateUrl: './room-title.component.html',
  styleUrls: ['./room-title.component.scss']
})
export class RoomTitleComponent extends BaseDirective implements OnInit {

  roomId$: Observable<string>;
  tooltipText: string;
  linkCopied = false;

  private linkNotCopiedTooltipText = 'Click to copy the link';
  private linkCopiedTooltipText = 'Link copied!';

  constructor(
    private gameQuery: GameQuery
  ) {
    super();
    this.roomId$ = this.gameQuery.getId$();
    this.tooltipText = this.linkNotCopiedTooltipText;
  }

  ngOnInit(): void {
  }

  async getLink(roomId: string): Promise<void> {
    const toCopy = location.host + '/#/manage-room?r=' + roomId;
    await navigator.clipboard.writeText(toCopy);
    this.tooltipText = this.linkCopiedTooltipText;
    this.linkCopied = true;
    setTimeout(() => {
      this.tooltipText = this.linkNotCopiedTooltipText;
      this.linkCopied = false;
    }, 2000);
  }
}
