import moment from 'moment';
import React from 'react';
import uuid from 'uuid';

import BirthdayItem from 'BirthdayItem';

class BirthdayList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			birthdays: [
				{
					id: uuid(),
					name: 'John Doe',
					date: moment('1990-10-06')
				},
				{
					id: uuid(),
					name: 'Emily Jones',
					date: moment('1988-11-20')
				},
				{
					id: uuid(),
					name: 'Alex Berg',
					date: moment('1970-01-01')
				},
				{
					id: uuid(),
					name: 'Sally Seashell',
					date: moment('1987-02-16')
				},
				{
					id: uuid(),
					name: 'Rod Smith',
					date: moment('2000-05-28')
				}
			]
		}
	}

	render() {
		const birthdays = this.state.birthdays.concat([]).sort((a, b) => {
			const date1 = moment(a.date).format('MM-DD');
			const date2 = moment(b.date).format('MM-DD');

			if (date1 < date2) {
				return -1;
			} else if (date1 > date2) {
				return 1;
			}
			return 0;
		});

		return (
			<div className="birthday-list">
				<h1>Birthday List</li>
				<ul>
					{birthdays.map(item => {
						var date = moment(item.date).format('MMM Do');
						return <BirthdayItem key={item.id} {...item} date={date} />;
					})}
				</ul>
			</div>
		);
	}
}

export default BirthdayList;