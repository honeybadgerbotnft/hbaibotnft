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
	public darkTheme : boolean = true;

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
		setInterval(() => {
			this.darkTheme = !this.darkTheme;
			this.changeDetectorRef.detectChanges();
		}, 7100);
	}

	responseData = [
		{
		  sent: "2022-10-15 10:00:00",
		}
	  ];
	  calculateDiff(sentDate: string) {
		var date1:any = new Date(sentDate);
		var date2:any = new Date();
		var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
	
		return diffDays;
	  }
}
