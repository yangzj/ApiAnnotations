$(document).ready(function() {
	// Set up tour
	$('body').pagewalkthrough({
		name: 'introduction',
		steps: [{
			wrapper: '.window-content',
			popup: {
				content: '#walkthrough-1',
				type: 'tooltip'
			}
		}, {
			wrapper: '.javadoc-id',
			popup: {
				content: '#walkthrough-2',
				type: 'tooltip',
				position: 'top',
				width: '200'
			}
		}, {
			wrapper: '.javadoc-descriptions',
			popup: {
				content: '#walkthrough-3',
				type: 'tooltip',
				position: 'top'
			}
		}, {
			wrapper: '.javadoc-filters',
			popup: {
				content: '#walkthrough-4',
				type: 'tooltip',
				position: 'top'
			}
		}, {
			wrapper: '.javadoc-returns',
			popup: {
				content: '#walkthrough-5',
				type: 'tooltip',
				position: 'top'
			}
		}, {
			wrapper: '.javadoc-regep',
			popup: {
				content: '#walkthrough-6',
				type: 'tooltip',
				position: 'top'
			}
		}, {
			wrapper: '.javadoc-script',
			popup: {
				content: '#walkthrough-7',
				type: 'tooltip',
				position: 'top'
			}
		}]
	});

	// Show the tour
	$('body').pagewalkthrough('show');

});