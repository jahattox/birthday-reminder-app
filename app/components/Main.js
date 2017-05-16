import React from 'react';

const Main = props => {
	return (
		<div className="main">
			<div className="row">
				<div className="col-xs-12">
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default Main;