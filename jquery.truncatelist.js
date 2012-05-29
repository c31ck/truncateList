(function($){
	$.fn.truncateList = function(options) {

		var defaults = {
			elements: 'li',
			numberOfItems: 3,
			moreText: '...',
			lessText: '<'
		};

		var options = $.extend(defaults, options);

    return this.each(function() {
      var target = $(this);
      if (! $(this).hasClass('truncateList-processed')) {
        if ($(this).children(options.elements).length > options.numberOfItems) {
          $(this).addClass('truncateList-processed');
          // Hide elements
          $(this).children(options.elements + ':gt(' + options.numberOfItems + ')').hide();
          // Add the show more link
          var moreLink = '<a class="truncateList-controller truncateList-more">' + options.moreText + '</a>';
          $(this).children(options.elements + ':last').after(moreLink);
          $(target).find('.truncateList-controller').bind('click', function() {
            if ($(this).hasClass('truncateList-more')) {
              $(this).removeClass('truncateList-more').addClass('truncateList-less').text(options.lessText);
              $(target).children(options.elements).show();
            }
            else {
              $(this).removeClass('truncateList-less').addClass('truncateList-more').text(options.moreText);
              $(target).children(options.elements + ':gt(' + options.numberOfItems + ')').hide();
            }
          });
        }
      }
		});
	};
})(jQuery);