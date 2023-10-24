/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Add 'active' class to label of checkbox is selected.
   */
  Drupal.behaviors.activeFilter = {
    attach: function (context, settings) {
      $('.form-checkbox[type=checkbox]:checked', context).parent().addClass('active');
      highlightedFilter();

      $('.form-checkbox[type=checkbox]', context).on('change', function() {
        $('.form-checkbox[type=checkbox]', context).parent().removeClass('active');
        $('.block-kt-page-title', context).find('.highlighted-filter').empty();
        $('.form-checkbox[type=checkbox]:checked', context).parent().addClass('active');
        highlightedFilter();
      });

      function highlightedFilter() {
        var selectedFilter = $('.form-checkbox[type=checkbox]:checked', context).map(function() {
          return $(this).parent().text().trim();
        }).get();

        var highlightedElement = selectedFilter.map(function(value, index) {
          return '<span class="highlighted-text">' + value + '</span>';
        }).join(', ');

        $('.block-kt-page-title', context).find('.highlighted-filter').append(highlightedElement);

        if($('.block-kt-page-title', context).find('.highlighted-filter').children().length != 0) {
          $('.block-kt-page-title', context).find('.highlighted-filter').removeClass('hide');
        } else {
          $('.block-kt-page-title', context).find('.highlighted-filter').addClass('hide');
        }
      }
    }
  };

  /**
   * Content becomes visible after JS changes.
   */
  function visibleContent() {
    $('body').removeClass('invisible');
  }

  /**
   * Calls functions when page has loaded.
   */
  $(window).on('load', function() {
    visibleContent();
  });

})(jQuery, Drupal);
