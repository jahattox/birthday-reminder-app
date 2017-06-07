import React from 'react';

class BirthdayItem extends React.Component {
	render() {
		const {name, date} = this.props;
		return <li><strong>{date}:</strong> {name}</li>;
	}
}

export default BirthdayItem;