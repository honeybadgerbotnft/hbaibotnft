import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-hbtradingbot',
	templateUrl: './hbtradingbot.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./hbtradingbot.component.css']
})
export class hbtradingbotComponent implements OnInit {
	public hbtradingbotData = data['hbtradingbot'];

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

}
