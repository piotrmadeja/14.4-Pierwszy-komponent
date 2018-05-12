var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry. ',
    imgSrc: 'images/harry.jpg',
    length: '111 min'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
    imgSrc: 'images/lionking.jpg',
    length: '111 min'
  },
  {
    id: 3,
    title: 'Avengers',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
    imgSrc: 'images/avengers.jpg',
    length: '111 min'
  },
  {
    id: 4,
    title: 'Batman',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
    imgSrc: 'images/batman.jpg',
    length: '111 min'
  },
  {
    id: 5,
    title: 'Dracula',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
    imgSrc: 'images/dracula.jpg',
    length: '111 min'
  },
  {
    id: 6,
    title: 'Obcy',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
    imgSrc: 'images/alien.jpg',
    length: '111 min'
  }
];


var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired 
	},
	render: function() {
		return (React.createElement('h2', {}, this.props.title)
		);
	}
});

var MovieDetails = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
			React.createElement('div', {className: 'movie-details'}, 
				React.createElement('ul', {}, 
					React.createElement('li', {}, this.props.movie.length),
				)
			)
		);	
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function(){
		return (
			React.createElement('div', {className: 'movie-description'},
					React.createElement('p', {}, this.props.desc)
			)
		);
	}
});
		
var TabLeft = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired, 
	},
	render: function(){
		return (
			React.createElement('div', {className: 'posters'},
				React.createElement('img', {src: this.props.image})
			)
		);
	}
});

var TabRight = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
				React.createElement('div', {className: 'description'},
					React.createElement(MovieTitle, { title: this.props.movie.title}),
					React.createElement(MovieDetails, { movie: this.props.movie}),
					React.createElement(MovieDescription, { desc: this.props.movie.desc }),
				)
		);
	}
});


var Movie = React.createClass({ 
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
				React.createElement('div', {className: 'movie'},	
					React.createElement(TabLeft, {image: this.props.movie.imgSrc}, ''),
					React.createElement(TabRight, { movie: this.props.movie }, '')
				)
		);
	}
});


var Tabs = movies.map(function(movie) {
        return React.createElement(Movie, {key: movie.id, movie: movie});
});

var element = React.createElement('section', {},
    React.createElement('div', {className: 'Container'}, 
      React.createElement('h1', {}, 'Lista filmów'), Tabs)
);

ReactDOM.render(element, document.getElementById('app'));