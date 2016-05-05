$(document).ready(function() {
    // Set up tour
    $(document).click(function(){
    	$('body').pagewalkthrough({
        name: 'introduction',
        steps: [{
           popup: {
               content: '#walkthrough-1',
               type: 'modal'
           }
        }, {
            wrapper: '.window-content',
            popup: {
                content: '#walkthrough-2',
                type: 'tooltip',
                position: 'top'
            }
        }, {
            wrapper: '.window-content',
            popup: {
                content: '#walkthrough-3',
                type: 'tooltip',
                position: 'top'
            }
        }, {
            wrapper: '.window-content',
            popup: {
                content: '#walkthrough-4',
                type: 'tooltip',
                position: 'top'
            }
        }, {
            wrapper: '.window-content',
            popup: {
                content: '#walkthrough-5',
                type: 'tooltip',
                position: 'top'
            }
        }, {
            wrapper: '.window-content',
            popup: {
                content: '#walkthrough-6',
                type: 'tooltip',
                position: 'top'
            }
        }]
    });

    // Show the tour
    $('body').pagewalkthrough('show');
    });
    
});
