angular.module('starter')

.service('WeeklyService', function($filter) {
  function getWeeks(year){
    day = $filter('date')(new Date('Jan 01, ' + year), "EEE");
    firstWeek = ''; endWeek = '';
    switch (day) {
      case 'Fri':
        firstWeek = $filter('date')(new Date('Jan 03, ' + year), 'ww');
        break;
      case 'Sat':
        firstWeek = $filter('date')(new Date('Jan 02, ' + year), 'ww');
        break;
      default:
        firstWeek = $filter('date')(new Date('Jan 01, ' + year), 'ww');
    }

    endDay = $filter('date')(new Date('Dec 31, '+ year), "EEE");
    switch (endDay) {
      case 'Sun':
        endWeek = $filter('date')(new Date('Dec 30, '+ year), 'ww');
        break;
      case 'Mon':
        endWeek = $filter('date')(new Date('Dec 29, ' + year), 'ww');
        break;
      case 'Tue':
        endWeek = $filter('date')(new Date('Dec 28, ' + year), 'ww');
        break;
      case 'Wed':
        endWeek = $filter('date')(new Date('Dec 27, ' + year), 'ww');
        break;
      default:
        endWeek = $filter('date')(new Date('Dec 31, ' + year), 'ww');
    }
    i = 1;
    weeks = [];
    while(i<=52){
      row = [];
      for (j = i; j < i + 3 ; j++){
        if(j<= 52)
          row.push(j);
        else
          break;
      }
      i += 3;
      weeks.push({"row": row});
    }
    return weeks;
  }

  return {
    getWeeks: getWeeks
  }
})
