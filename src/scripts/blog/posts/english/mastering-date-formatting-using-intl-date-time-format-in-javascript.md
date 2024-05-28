title: Mastering date formatting using Intl.DateTimeFormat in JavaScript
date: 2024-05-29
description: For a long time, libraries like MomentJS and DateFNS reigned supreme when it came to date manipulation. Although they still satisfy very specific use cases, if all you need is to simply format a date, you might already be able to meet your needs with just native JavaScript.
keywords: Intl, DateTimeFormat, moment.js, date-fns, date, formatting

---

Presenting a date in a specific format often brings to mind some JavaScript libraries right away, such as `moment.js` and, more recently, `date-fns`. Although these libraries still satisfy very peculiar use cases, they are no longer essential for simple date formatting.

Widely supported by browsers since 2016, and currently with approximately 96% global coverage, the native `Intl` API can present dates in highly elaborate formats. And most importantly, all this without adding even 1Kb to your application.

To demonstrate the simplicity of the `DateTimeFormat` constructor of the `Intl` API, observe the following comparison between it and the mentioned libraries:

```javascript
import moment from 'moment';
import { format } from 'date-fns';

const date = new Date(2024, 3, 29, 0);

moment(date).format('M/D/YYYY');
// → 4/29/2024

format(date, 'M/d/yyyy');
// → 4/29/2024

Intl.DateTimeFormat('en-US').format(date);
// → 4/29/2024
```

With just this example, many advantages are already evident, but the power of `Intl.DateTimeFormat` is just beginning. Notice that the first argument `DateTimeFormat` receives is the *locale* for which you intend to format the date. If the *locale* is not specified, the default locale set in the browser will be used. Also, the constructor's signature receives another parameter. This additional parameter is an object that contains various options. Let's start by checking each of them.

## Long Formats

If you need a date format that includes text and not just digits, look at the possibilities that the `month` option offers.

```javascript
const date = new Date(2024, 3, 29, 0);
const opts = { day: 'numeric', year: 'numeric' };

Intl.DateTimeFormat('en-US', { ...opts, month: 'long' }).format(date);
// → April 29, 2024

Intl.DateTimeFormat('en-US', { ...opts, month: 'short' }).format(date);
// → Apr 29, 2024

Intl.DateTimeFormat('en-US', { ...opts, month: 'narrow' }).format(date);
// → A 29, 2024
```

## Days of the Week

If you need to include not just the day of the month, but also the day of the week, simply use the `weekday` option.

```javascript
const date = new Date(2024, 3, 29, 0);
const opts = { day: '2-digit', month: '2-digit', year: '2-digit' };

Intl.DateTimeFormat('en-US', { ...opts, weekday: 'long' }).format(date);
// → Monday, 04/29/24

Intl.DateTimeFormat('en-US', { ...opts, weekday: 'short' }).format(date);
// → Mon, 04/29/24

Intl.DateTimeFormat('en-US', { ...opts, weekday: 'narrow' }).format(date);
// → M, 04/29/24
```

## Hours, Minutes, and Seconds

In addition to the day, month, and year, dates can also involve time. In this case, you can use the `hour`, `minute`, and `second` options to determine the number of digits (`numeric` or `2-digit`) to present.

```javascript
const date = new Date(2024, 3, 29, 5, 30, 20);
const opts = { minute: '2-digit', second: '2-digit' };

Intl.DateTimeFormat('en-US', { ...opts, hour: 'numeric' }).format(date);
// → 5:30:20 AM

Intl.DateTimeFormat('en-US', { ...opts, hour: '2-digit' }).format(date);
// → 05:30:20 AM
```

## Time Zone

If you need to include the time zone in the format, the `timeZoneName` option can be used. See below the two possibilities offered.

```javascript
const date = new Date(2024, 3, 29, 5, 30, 20);
const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

Intl.DateTimeFormat('en-US', { ...opts, timeZoneName: 'long' }).format(date);
// → 05:30:20 AM Pacific Daylight Time

Intl.DateTimeFormat('en-US', { ...opts, timeZoneName: 'short' }).format(date);
// → 05:30:20 AM PDT
```

Still dealing with time, it is possible to present the date in a different time zone than the local time. The option that performs this conversion is called `timeZone`. See below the same date and time used in the example above, but formatted with the time zone of East Brazil.

```javascript
const date = new Date(2024, 3, 29, 5, 30, 20);
const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

Intl.DateTimeFormat('en-US', { ...opts, timeZone: 'Brazil/East' }).format(date);
// → 09:30:20 AM
```

**Tip:** On Wikipedia, you can check all the [time zone identifiers](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

Combining the possibility of applying a specific time zone with the possibility of displaying the time zone name, we can get the following result.

```javascript
const date = new Date(2024, 3, 29, 5, 30, 20);
const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

Intl.DateTimeFormat('en-US', {
  ...opts,
  timeZone: 'Brazil/East',
  timeZoneName: 'long'
}).format(date);
// → 09:30:20 AM Brasilia Standard Time
```

## 12 vs. 24 Hours

Finally, if you need to switch from the 12-hour to the 24-hour format or vice versa, you can use the `hour12` option to force this change.

```javascript
const date = new Date(2024, 3, 29, 15, 30, 20);
const opts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

Intl.DateTimeFormat('en-US', { ...opts, hour12: false }).format(date);
// → 15:30:20

Intl.DateTimeFormat('pt-BR', { ...opts, hour12: true }).format(date);
// → 03:30:20 PM
```

It is very likely that for calculations, comparisons, and more advanced use cases involving dates, you will still need to install a library. But if what you need is simply to present a date in a specific format, the `Intl` API has a great chance of meeting your needs. If you want to learn more about this API, visit the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) available on the Mozilla Developers Network (MDN).
