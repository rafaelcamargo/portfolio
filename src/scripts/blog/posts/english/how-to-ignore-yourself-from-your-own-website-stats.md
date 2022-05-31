title: How to ignore yourself from your own website stats
date: 2022-05-31
description: When we visit our own website, analytics end up including data we wouldn't like to be considering. Instead of wasting time on complex strategies to solve this issue, discover a simple way to ignore yourself from your own website stats.
keywords: google, analytics, plausible, glorious, stats.

---

You might want to disable your website or web app analytics for several reasons. To ignore your own visits, avoid unnecessary consumption of a paid service in development time, skip visits made by testing tools, etc.

Since the day I searched how to ignore myself from Google Analytics stats, I noticed a clear opportunity for a more convenient solution. That was the major motivation behind **Glorious Analytics, a library that extends a couple of analytics services like Google Analytics, adding the ability to disable them easily via Browser**. By setting the value *disabled* for a query parameter called *analytics*, you prevent the website from collecting stats from your visit.

More than preventing stats from getting polluted by unwanted data, the possibility of disabling data collection adds an extra layer of privacy to the users who opt-out to be tracked.

Glorious Analytics is powered by Plausible by default. Below, you can see the most basic usage of the library:

``` javascript
import GAnalytics from '@glorious/analytics';

const analytics = new GAnalytics();
analytics.init('rafaelcamargo.com');
analytics.trackPageview();
```

Optionally, you can get the library adapted to use Google Analytics:

``` javascript
import GAnalytics from '@glorious/analytics';
import googleAnalyticsAdapter from '@glorious/analytics/dist/adapters/google-analytics';

const analytics = new GAnalytics();
analytics.init('UA-123456', { adapter: googleAnalyticsAdapter });
analytics.trackPageview();
```

To learn more about the library, or contribute to its development, visit its [repository on Github](https://github.com/glorious-codes/glorious-analytics).
