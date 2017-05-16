import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';

import BirthdayList from 'BirthdayList';
import Main from 'Main';

require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
	<Main>
		<Router>
			<Switch>
		  	<Route exact path="/" component={BirthdayList} />
		  </Switch>
	  </Router>
	</Main>,
  document.getElementById('app')
);
