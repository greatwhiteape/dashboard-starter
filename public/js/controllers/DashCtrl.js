angular.module('DashCtrl', []).controller('DashboardController', function($scope) {

	$scope.tagline = 'Pretties!';
	
/**
* Initialize angular-gridster
**/
	$scope.gridsterOptions = {
		columns: 6, // the width of the grid, in columns
		pushing: true, // whether to push other items out of the way on move or resize
		floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
		swapping: true, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
		width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
		colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
		rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
		margins: [30, 30], // the pixel distance between each widget
		outerMargin: true, // whether margins apply to outer edges of the grid
		isMobile: false, // stacks the grid items if true
		mobileBreakPoint: 800, // if the screen is not wider that this, remove the grid layout and stack the items
		mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
		minColumns: 1, // the minimum columns the grid must have
		minRows: 2, // the minimum height of the grid, in rows
		maxRows: 10,
		defaultSizeX: 1, // the default width of a gridster item, if not specifed
		defaultSizeY: 1, // the default height of a gridster item, if not specified
		minSizeX: 1, // minimum column width of an item
		maxSizeX: null, // maximum column width of an item
		minSizeY: 1, // minumum row height of an item
		maxSizeY: null, // maximum row height of an item
		resizable: {
			enabled: true,
			handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
			start: function(event, $element, widget) {}, // optional callback fired when resize is started,
			resize: function(event, $element, widget) {}, // optional callback fired when item is resized,
			stop: function(event, $element, widget) {} // optional callback fired when item is finished resizing
		},
		draggable: {
			enabled: true, // whether dragging items is supported
			handle: 'h3', // optional selector for resize handle
			start: function(event, $element, widget) {}, // optional callback fired when drag is started,
			drag: function(event, $element, widget) {}, // optional callback fired when item is moved,
			stop: function(event, $element, widget) {} // optional callback fired when item is finished dragging
		}	
	};	

/**
* Default Gridster Layouts <- few options as examples.
**/
	// these map directly to gridsterItem options
	$scope.standardItems = [{
		sizeX: 2,
		sizeY: 1,
		row: 0,
		col: 0
	}, {
		sizeX: 2,
		sizeY: 2,
		row: 0,
		col: 2
	}, {
		sizeX: 2,
		sizeY: 1,
		row: 2,
		col: 1
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 2,
		col: 3
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 2,
		col: 4
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 0,
		col: 4
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 0,
		col: 5
	}, {
		sizeX: 2,
		sizeY: 1,
		row: 1,
		col: 0
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 1,
		col: 4
	}, {
		sizeX: 1,
		sizeY: 2,
		row: 1,
		col: 5
	}, {
		sizeX: 1,
		sizeY: 1,
		row: 2,
		col: 0
	}];

	// these are non-standard, so they require mapping options
	$scope.customItems = [{
		size: {
			x: 2,
			y: 1
		},
		position: [0, 0]
	}, {
		size: {
			x: 2,
			y: 2
		},
		position: [0, 2]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [1, 4]
	}, {
		size: {
			x: 1,
			y: 2
		},
		position: [1, 5]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [2, 0]
	}, {
		size: {
			x: 2,
			y: 1
		},
		position: [2, 1]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [2, 3]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [0, 4]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [0, 5]
	}, {
		size: {
			x: 2,
			y: 1
		},
		position: [1, 0]
	}, {
		size: {
			x: 1,
			y: 1
		},
		position: [2, 4]
	}];

	$scope.emptyItems = [{
		name: 'Item1'
	}, {
		name: 'Item2'
	}, {
		name: 'Item3'
	}, {
		name: 'Item4'
	}];

	// map the gridsterItem to the custom item structure
	$scope.customItemMap = {
		sizeX: 'item.size.x',
		sizeY: 'item.size.y',
		row: 'item.position[0]',
		col: 'item.position[1]'
	};
});