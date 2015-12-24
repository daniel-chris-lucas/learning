(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/dan/Code/Learning/JavaScript/ReactJS/learn-understand-react/03-tooling/03-gulpfile/src/app.jsx":[function(require,module,exports){
var options = {
  thumbnailData: [
    {
      title: 'See Courses',
      number: 32,
      header: 'Learn React',
      description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
      imageUrl: 'http://formatjs.io/img/react.svg'
    },
    {
      title: 'See Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    }
  ]
};

// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.row'));

},{}]},{},["/home/dan/Code/Learning/JavaScript/ReactJS/learn-understand-react/03-tooling/03-gulpfile/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9kYW4vQ29kZS9MZWFybmluZy9KYXZhU2NyaXB0L1JlYWN0SlMvbGVhcm4tdW5kZXJzdGFuZC1yZWFjdC8wMy10b29saW5nLzAzLWd1bHBmaWxlL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxPQUFPLEdBQUc7RUFDWixhQUFhLEVBQUU7SUFDYjtNQUNFLEtBQUssRUFBRSxhQUFhO01BQ3BCLE1BQU0sRUFBRSxFQUFFO01BQ1YsTUFBTSxFQUFFLGFBQWE7TUFDckIsV0FBVyxFQUFFLG1JQUFtSTtNQUNoSixRQUFRLEVBQUUsa0NBQWtDO0tBQzdDO0lBQ0Q7TUFDRSxLQUFLLEVBQUUsYUFBYTtNQUNwQixNQUFNLEVBQUUsRUFBRTtNQUNWLE1BQU0sRUFBRSxZQUFZO01BQ3BCLFdBQVcsRUFBRSw2RkFBNkY7TUFDMUcsUUFBUSxFQUFFLHlDQUF5QztLQUNwRDtHQUNGO0FBQ0gsQ0FBQyxDQUFDOztBQUVGLGtDQUFrQztBQUNsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFMUQscUVBQXFFO0FBQ3JFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgb3B0aW9ucyA9IHtcbiAgdGh1bWJuYWlsRGF0YTogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnU2VlIENvdXJzZXMnLFxuICAgICAgbnVtYmVyOiAzMixcbiAgICAgIGhlYWRlcjogJ0xlYXJuIFJlYWN0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVhY3QgaXMgYSBmYW50YXN0aWMgbmV3IGxpYnJhcnkgZm9yIG1ha2luZyBmYXN0LCBkeW5hbWljIHBhZ2VzLiBSZWFjdCBpcyBhIGZhbnRhc3RpYyBuZXcgbGlicmFyeSBmb3IgbWFraW5nIGZhc3QsIGR5bmFtaWMgcGFnZXMuJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cDovL2Zvcm1hdGpzLmlvL2ltZy9yZWFjdC5zdmcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1NlZSBDb3Vyc2VzJyxcbiAgICAgIG51bWJlcjogMjUsXG4gICAgICBoZWFkZXI6ICdMZWFybiBHdWxwJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnR3VscCB3aWxsIHNwZWVkIHVwIHlvdXIgZGV2ZWxvcG1lbnQgd29ya2Zsb3cuIEd1bHAgd2lsbCBzcGVlZCB1cCB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93LicsXG4gICAgICBpbWFnZVVybDogJ2h0dHA6Ly9icnVuY2guaW8vaW1hZ2VzL290aGVycy9ndWxwLnBuZydcbiAgICB9XG4gIF1cbn07XG5cbi8vIFJlYWN0LCBwbGVhc2UgcmVuZGVyIHRoaXMgY2xhc3NcbnZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChUaHVtYm5haWxMaXN0LCBvcHRpb25zKTtcblxuLy8gUmVhY3QsIGFmdGVyIHlvdSByZW5kZXIgdGhpcyBjbGFzcywgcGxlYXNlIHBsYWNlIGl0IGluIG15IGJvZHkgdGFnXG5SZWFjdC5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdycpKTtcbiJdfQ==
