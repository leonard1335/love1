// clac days
var firstDay = new Date("2022-10-27");
var now = new Date();
var toFirst = firstDay.getTime();
var toNow = now.getTime();
var clacLoveDay = (toNow - toFirst) / (1000 * 60 * 60 * 24);
var loveDay = Math.floor(clacLoveDay) + 1;

var start = moment();
var end = moment().add(moment().diff(moment("2022-10-27"), 'days'), 'days');

var years = end.diff(start, 'year');
start.add(years, 'years');
var months = end.diff(start, 'months');
start.add(months, 'months');
var days = end.diff(start, 'days');

var fullDay = "";
if(years > 0)
    fullDay += years + '年';
if(months > 0)
    fullDay += months + '个月';
if(days > 0)
    fullDay += days + '天';

document.querySelector("#accent").innerHTML = fullDay;

var array = [
    {
        days: 100,
        type: 'days'
    },
    {
        days: 200,
        type: 'days'
    },
    {
        days: 1,
        type: 'years'
    },
    {
        days: 500,
        type: 'days'
    },
    {
        days: 2,
        type: 'years'
    },
    {
        days: 3,
        type: 'years'
    },
    {
        days: 4,
        type: 'years'
    },
    {
        days: 5,
        type: 'years'
    }
];
var html = "";
array.forEach(element => {
    var nextDate = moment(firstDay).add(element.days, element.type);
    console.log(nextDate)
    html += `<li>
    <div class="px-4 py-2 sm:px-6">
      <div class="flex items-center justify-between">
        <p class="truncate text-sm font-medium">${element.days}${(element.type=='days') ? "天" : '年'}</p>
        <div class="ml-2 flex flex-shrink-0">
          <p class="inline-flex px-2 text-xs font-semibold leading-5">${nextDate.format('YYYY-MM-DD')}</p>
        </div>
      </div>
    </div>
</li>`;
});
document.querySelector("#anniversary").innerHTML = html;