'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bgcolorlist, randomColor, randNum, lastColor, lastNum;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var _React = React;
var Component = _React.Component;
var _ReactDOM = ReactDOM;
var render = _ReactDOM.render;
var quotes=
[{
author: 'Princess Leila',

quote: 'Aren\'t you a little short for a storm trooper?'
}, {
author: 'Yoda',

quote: 'When 900 years old, you reach… Look as good, you will not.'
}, {

author: 'Yoda',

quote: 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
author: 'Yoda',

quote: 'Do. Or do not. There is no try.'
}, {
author: 'Yoda',

quote: 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
author: 'Senator Palpatine',

quote: 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
author: 'Qui-Gon Jinn',

quote: 'Your focus determines your reality'
}, {
author: 'Count Dooku',

quote: 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
author: 'Obi-Wan-Kenobi',

quote: 'In my experience there is no such thing as luck.'
}, {
author: 'Darth Vader',

quote: 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
author: 'Darth Vader',

quote: 'The Force is strong with this one.'
}];




function Header() {
  return React.createElement(
    'div',
    { className: 'navbar' },
    React.createElement(
      'h2',
      null,
      'Random Star Wars Quotes'
    )
  );
}

function Card(props) {
  var randomColor = props.randomColor;
  var quote = props.quote;
  var author = props.author;

  var changeBackground = props.changeBackground;

  var prettyStyle = {
    background: randomColor,
    transition: 'background 1s ease'
  };
  return React.createElement(
    ReactCSSTransitionGroup,
    {
      transitionName: 'fade',
      transitionAppear: true,
      transitionAppearTimeout: 750,
      transitionEnterTimeout: 750,
      transitionLeaveTimeout: 0
    },
    React.createElement(
      'div',
      { key: 'comp1', className: 'quote--card' },
      React.createElement(
        'p',
        { className: ' quote' },
        quote,
        ' '
      ),
      React.createElement(
        'p',
        { className: 'author' },
        '-',
        author
      ),
      React.createElement(
        'button',
        {
          className: 'btn btn-newQuote',
          onMouseEnter: function onMouseEnter(e) {
            return e.target.classList.add('active');
          },
          onMouseLeave: function onMouseLeave(e) {
            return e.target.classList.remove('active');
          },
          onClick: function onClick(e) {
            e.preventDefault();
            changeBackground();
          },
          style: prettyStyle
        },
        'New Quote!'
      ),
      React.createElement(
        'a',
        {
          className: 'btn btn-twitter',
          href: '#',
          onMouseEnter: function onMouseEnter(e) {
            return e.target.classList.add('active');
          },
          onMouseLeave: function onMouseLeave(e) {
            return e.target.classList.remove('active');
          },

          style: prettyStyle
        }

      ),
      React.createElement(Slideshow, { changeBackground: changeBackground })
    )
  );
}

var QuoteBox = function (_Component) {
  _inherits(QuoteBox, _Component);

  function QuoteBox(props) {
    _classCallCheck(this, QuoteBox);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.changeBackground = _this.changeBackground.bind(_this);
    _this.genRand = _this.genRand.bind(_this);

    _this.genRand();
    _this.state = {

      quote: quotes[randNum].quote,
      author: quotes[randNum].author,
      randomColor: randomColor
    };
    return _this;
  }

  QuoteBox.prototype.genRand = function genRand() {
    bgcolorlist = ["#f58b57", '#BAA7AB', '	#97574E', '#bda066', '#868663', '#F9F7D2', '#49b7be', '#DCD9C8', '#D2865C', '#D57A67', '#D27387', '#A36D91', '#766D88', '#E0AEA3', '#E0AEA5', '#E1CD76', '#3890B4', '#A74F41', '#70CFE1', //blue
    '#85C85D', //green
    '#F4614C', //red
    "#E5CF41", //yellow
    "#F79D2A", //orange

    '#1abc9c', "#2ecc71", '#3498db', '#e74c3c', '#9b59b6', '#f1c40f', '#e67e22'];
    randomColor = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)];
    randNum = Math.floor(Math.random() * quotes.length);
    lastColor = randomColor;
    lastNum = randNum;
  };

  QuoteBox.prototype.changeBackground = function changeBackground() {
    this.genRand();
    //function to ensure color and quote is changed
    if (lastColor !== this.state.randomColor && quotes[lastNum].quote !== this.state.quote) {
      this.setState({
        quote: quotes[randNum].quote,
        author: quotes[randNum].author,
        randomColor: randomColor
      });
    }
  };


  QuoteBox.prototype.render = function render() {
    var prettyStyle = {
      height: '36px',
      width: '36px'
    };

    var twitterImg = React.createElement('img', {
      className: 'twitterImg',
      src: 'http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Twitter-icon.png',
      alt: 'twitter',
      style: prettyStyle
    });
    var rootStyle = {
      background: this.state.randomColor,
      height: '100%',
      width: '100%',
      transition: "all 1s ease"
    };
    return React.createElement(
      'div',
      { style: rootStyle },
      React.createElement(Header, null),
      React.createElement(
        'div',
        { className: 'card-container' },
        React.createElement(Card, {
          randomColor: this.state.randomColor,
          quote: this.state.quote,
          author: this.state.author,
          //handleTweet: this.handleTweet,
          changeBackground: this.changeBackground

        })
      )
    );
  };

  return QuoteBox;
}(Component);

var Slideshow = function (_Component2) {
  _inherits(Slideshow, _Component2);

  function Slideshow(props) {
    _classCallCheck(this, Slideshow);

    var _this2 = _possibleConstructorReturn(this, _Component2.call(this));

    _this2.state = {
      hideClearButton: true
    };
    return _this2;
  }

  Slideshow.prototype.render = function render() {
    var _this3 = this;

    var changeBackground = this.props.changeBackground;

    var hideStyle = {
      display: this.state.hideClearButton ? 'none' : 'block'
    };
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        {
          className: 'btn',
          onMouseEnter: function onMouseEnter(e) {
            return e.target.classList.add('active');
          },
          onMouseLeave: function onMouseLeave(e) {
            return e.target.classList.remove('active');
          },
          onClick: function onClick() {
            changeBackground();
            _this3.interval = setInterval(changeBackground, 3000);
            _this3.setState({
              hideClearButton: !_this3.state.hideClearButton
            });
          }
        },
        'Slideshow'
      ),
      React.createElement(
        'button',
        {
          style: hideStyle,
          onMouseEnter: function onMouseEnter(e) {
            return e.target.classList.add('active');
          },
          onMouseLeave: function onMouseLeave(e) {
            return e.target.classList.remove('active');
          },
          className: 'btn',
          onClick: function onClick() {
            clearInterval(_this3.interval);
          }
        },
        'stop'
      )

    );
  };

  return Slideshow;
}(Component);

render(React.createElement(QuoteBox, null), document.getElementById('root'));
